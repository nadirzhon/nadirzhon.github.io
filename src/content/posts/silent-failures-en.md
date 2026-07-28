---
title: 'Three failures that metrics never show'
description: 'The dashboard is green and the system is not doing its job. Three cases from my own trading system and what to do about them.'
lang: 'en'
date: 2026-06-18
tags: ['reliability', 'trading systems', 'post-mortem']
readingTime: 7
---

The expensive failure is not the one where a service crashes. A crash is visible: an alert fires, someone wakes up, someone fixes it. The expensive failure is when everything is green, every metric is normal, and the work is not getting done.

Running my own trading system for several years produced three of these. They share one property: monitoring showed what happened, and no graph showed what **failed to** happen.

## One: a duplicate guard that blocked itself

The system had a rule — a position must never be closed twice. Implemented simply: before closing, the position id goes into a "currently closing" set, and the close function checks that set and returns if the id is already there.

Trouble arrived when the check was duplicated in two places. The scheduler put the id into the set and launched a background task. The task called the close function. The function looked into the set, found its own id — placed there a second earlier by the scheduler — and returned.

No position ever closed. Not on stop-loss, not on take-profit, not on timeout. The log was clean: close "skipped, already in progress". Formally true.

The general lesson: **an idempotency guard needs exactly one owner.** Put a guard in two places on one path and the second one reads the first one's marks as somebody else's.

## Two: a cleanup routine that did not know its own mode

A separate routine reconciled internal positions against the exchange and deleted "ghosts" — records with no counterpart on the venue.

In paper trading mode there are no positions on the exchange by definition. The routine honestly asked the exchange, honestly found nothing, and honestly deleted every position as drift. With a zero result, because deleting a ghost yields neither profit nor loss.

Net effect: trades opened, got "closed" by the cleaner at zero, and the statistics showed a perfect zero instead of real numbers.

The lesson: **any automatic cleanup must check its operating mode before deleting anything.** And it should almost always start life in a mode that only reports what it *would* delete.

## Three: correct data written over correct data

The dashboard displayed system equity. The value came from internal accounting, and then the exchange wallet balance was written over it — "to show real money".

In paper mode the real wallet is empty. The dashboard showed zero, the risk layer saw a 99.99 percent drawdown against the remembered peak, and halted trading. Both components were individually correct. The mistake was that both wrote into the same field.

The lesson: **if a value can arrive from two sources, the field needs one owner and an explicit override rule.** "Let's refresh it from here too" is the opening line of most three-day investigations.

## What to do instead

Three practices that have been default in every project since, client work included:

**Count absences, not just events.** A "positions closed" metric is useless without "how many closes were skipped and why". The skip reason is a mandatory label.

**Verify consequences, not actions.** Not "close command sent" but "ten seconds later the position is actually gone". The gap between intent and result is the cheapest place to catch silent failures.

**Alert on suspicious silence.** If the system normally performs between five and forty operations a day, zero operations is an incident, not a quiet day. That single alert has caught more failures for me than all the others combined.

None of the three needs sophisticated tooling. All three need one uncomfortable question asked once: *how would I know the system stopped working, if it did not crash while doing so?*
