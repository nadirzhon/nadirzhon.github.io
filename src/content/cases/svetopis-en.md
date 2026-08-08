---
title: 'Svetopis — a photographer’s site with zero libraries'
summary: 'My own project: a photographer’s showcase where the WebGL shader, inertial scrolling and booking flow are written in plain HTML, CSS and JavaScript. Not a single external dependency.'
lang: 'en'
year: 2026
role: 'Design, markup, development'
industry: 'Photography, services'
service: 'web'
outcomes:
  - value: '275 KB'
    label: 'the entire page, everything included'
  - value: '0.5 s'
    label: 'to first contentful paint'
  - value: '0'
    label: 'external libraries or build tools'
  - value: '922'
    label: 'lines of hand-written JavaScript'
stack: ['HTML', 'CSS', 'JavaScript', 'WebGL', 'Canvas']
cover: '/work/svetopis/hero.jpg'
live: 'https://autonoma.uk/svetopis/'
order: 2
---

## What it is

A site for a photographer: a portfolio, shooting packages and date booking. The project is my own — I built it to see how far the visual side can go without pulling in a single third-party package.

The constraint was strict: no frameworks, no build step, no CDNs. The `index.html` file opens straight from disk with a double click and works in full, shaders and animations included. It hosts anywhere, including free static hosting.

## What moves here

The hero is a living light dispersion — a WebGL fragment shader where fbm noise is split into three offset channels, producing a prism. It responds to the cursor and to scrolling: the light behaves like light, not like a looping video.

Scrolling is inertial and hand-written — one `requestAnimationFrame` loop for the whole site, with every effect computed inside it. Headlines rise from behind a mask word by word, technical captions decode character by character, buttons are magnetically drawn to the cursor, and the “Best moments” section turns vertical scrolling into a horizontal track.

Booking is its own piece of work: a short multi-step flow that checks unavailable dates and collects the enquiry without dumping the visitor into a messenger halfway through.

## Where it hurt

**Inertia fought the effects.** When every effect attaches its own scroll listener, the browser chokes — under thirty frames per second while moving. Everything had to collapse into a single animation loop: position is computed once per frame and each effect reads the finished value. Nothing subscribes to `scroll` directly.

**The shader drained laptop batteries.** A full-screen WebGL canvas kept rendering even after the hero had scrolled away. The fix is obvious in hindsight: `IntersectionObserver` stops drawing the moment the hero leaves the viewport and resumes when it returns.

**Text with a continuous gradient.** The design called for one gradient running across a whole line rather than restarting inside each word. Each word had to be given its slice of the shared gradient, recalculated whenever the window resizes.

## The result

The page weighs 275 KB with fonts and all graphics — less than a single phone photo. First paint in half a second, eleven requests for the entire load. For comparison, a typical website-builder page pulls three to four megabytes across fifty requests.

There is a second benefit: nothing here can rot. No packages demanding an update next year, no bundler that stops running on a newer Node. In five years this file will open exactly as it does today.

## What you can verify

The code is fully open: [github.com/nadirzhon/svetopis](https://github.com/nadirzhon/svetopis). No black boxes — every line is visible, shader and booking logic included.

This is my own work rather than a commission: the contacts on the site are placeholders and the photographs are demonstration material. It is shown as an example of how I approach visually demanding sites, not as a delivered client project.
