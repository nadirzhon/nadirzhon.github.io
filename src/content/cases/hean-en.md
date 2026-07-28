---
title: 'HEAN — an autonomous trading system'
summary: 'My own product: infrastructure that collects market data, executes orders and holds risk around the clock with nobody at the console.'
lang: 'en'
year: 2026
role: 'Architecture, development, operations'
industry: 'Algorithmic trading'
service: 'trading-systems'
outcomes:
  - value: '50'
    label: 'instruments tracked in real time'
  - value: '11'
    label: 'services running together'
  - value: '<1 ms'
    label: 'event bus latency under load'
  - value: '24/7'
    label: 'operation without manual intervention'
stack: ['Python', 'Rust', 'PostgreSQL', 'Redis', 'Docker', 'Prometheus']
order: 1
---

## What it is

HEAN is my own trading system, built and kept in production for several years. It is not client work and not a showcase: it is the bench where I test everything I later offer to clients. Every engineering decision in it was paid for with my own mistakes rather than read in an article.

The system collects market data around the clock, computes indicators from it, makes decisions by rules defined in advance, executes orders, keeps position accounting and watches risk. A person is needed to change the rules, not to press buttons.

## How it is built

Eleven services in Docker: market data collectors, an event bus, an execution layer, accounting, a risk layer, monitoring and an observation panel. Hot-path computation moved to a Rust module — where Python could not keep up with the quote stream, the budget is measured in tens of microseconds.

The risk layer is its own project. Position limits, drawdown control, deposit protection and a kill switch that fires without asking. In a trading system the expensive thing is not missed profit — it is a failure nobody noticed at night.

## Where it hurt

**The event bus choked.** Moving to fifty instruments made the event queue accumulate tens of seconds of lag, so the system decided on stale prices. The fix was publish-time coalescing — only the latest state per instrument survives in the queue, not the full history — plus moving heavy subscribers to background execution. Latency dropped from fifty seconds to a fraction of a millisecond.

**Positions closed silently.** A duplicate guard blocked itself: a position was marked as closing before the close task was scheduled, and the task then saw its own mark and returned having done nothing. Stops and take-profits never fired, and the log looked clean. These failures are invisible in metrics, because metrics show what happened, not what should have happened.

**Reconciliation deleted live positions.** The routine that clears drift against the exchange did not distinguish paper positions from real ones in test mode and swept them away as garbage. Any automatic cleanup must know which mode it is running in.

## What clients get from this

When I take on a trading or fintech system, I bring a concrete list of where these projects break: position reconciliation, execution races, latency accumulating in queues, silent overnight failures, and accounting that drifts from the exchange by week three.

> The caveat I repeat on every first call: I answer for infrastructure and execution, not for returns. Profit is determined by the strategy and the market. Code can only guarantee that the strategy executes as intended and that a failure gets noticed.
