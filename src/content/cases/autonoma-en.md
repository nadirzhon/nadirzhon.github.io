---
title: 'This site — a showcase that takes its own enquiries'
summary: 'My own project: a bilingual studio site of 36 pages where an enquiry travels through two independent channels, is counted in an anonymous log, and survives the delivery service going down.'
lang: 'en'
year: 2026
role: 'Design, development, infrastructure'
industry: 'Services, software'
service: 'web'
outcomes:
  - value: '36'
    label: 'pages across two languages'
  - value: '2'
    label: 'independent delivery channels per enquiry'
  - value: '£0'
    label: 'monthly infrastructure cost'
  - value: '1.0 s'
    label: 'to first contentful paint'
stack: ['Astro', 'TypeScript', 'Tailwind', 'three.js', 'GSAP', 'Cloudflare Workers']
cover: '/work/autonoma/hero.jpg'
order: 3
---

## What it is

The site you are reading. It is here for a simple reason: it is the one piece of work you can verify completely — open the source, read the commit history, send an enquiry and watch what happens.

Thirty-six pages in Russian and English: the home page, six service pages with a scope builder, case studies, an engineering journal, an about page and the legal documents. Plus an interactive calculator for the cost of manual routine with the formula laid open — not “leave a request and we will estimate”, but the arithmetic in plain sight.

## How an enquiry works

The form is the only way in, and it is built so that nothing is lost under any circumstances.

The visitor starts by picking a direction: no blank page, just point at the service. Arriving from a service page, the direction is already selected for them. The form reads as a three-step route with a completion bar across the top.

From there the enquiry travels **two ways at once**: by email through a form service, and to Telegram through a relay of my own on Cloudflare Workers. The channels are independent — one failing does not affect the other. If both are unreachable, the form opens a mail client with the message already filled in: direction, name, contact, budget and the task text. The enquiry survives even a total outage.

The relay also keeps an anonymous log: direction, budget range, timestamp. No name, no contact, no text — such a log cannot identify a person, but it answers “how many enquiries came this month and for what”. The bot reports the summary on command.

## Where it hurt

**A hidden field fails browser validation.** The direction picker is built from tiles with the real radio inputs hidden underneath. Browsers refuse to show a validation message for an invisible control — it simply fails silently. That required a hand-written check: highlight the block, say in words what is missing, scroll to it.

**The analytics counter stayed silent.** While wiring it up I passed the server-rendering flag, which suppresses the automatic hit. The script loaded, the counter initialised, the console was clean — and no data arrived. Failures like that are worse than crashes: everything looks fine.

**Three animation systems fought over frames.** Inertial scrolling, a three.js scene and reveal-on-scroll each pulled at the frame rate. Order returned when they all started reading one computed scroll value, and the heavy scene learned to stop once out of view.

## The result

The infrastructure costs nothing per month: GitHub Pages serves the pages, the domain and the relay sit on Cloudflare’s free tier, enquiry delivery runs inside a free quota. Nothing is faked for it: a real domain, a real certificate, two independent delivery paths and a working counter.

Publishing is automatic: a commit to the main branch, and twenty seconds later the change is live. No FTP uploads, no “let me re-upload that”.

## What you can verify

The source is open: [github.com/nadirzhon/nadirzhon.github.io](https://github.com/nadirzhon/nadirzhon.github.io). Everything is visible — the relay, the edit history of the legal documents, and the absence of any tokens or keys in the repository.

The most honest way to check this work is to send an enquiry. It will arrive.
