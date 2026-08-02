---
title: 'A wholesale catalogue of 617 construction chemicals'
summary: 'A catalogue site for a wholesale depot: an Excel price list turns into a working catalogue with one command, orders are assembled as a list, and no product photography is needed to launch.'
lang: 'en'
year: 2026
role: 'Design, development, tooling'
industry: 'Wholesale, building materials'
service: 'web'
outcomes:
  - value: '617'
    label: 'catalogue items across 19 product groups'
  - value: '5 ms'
    label: 'to filter the entire price list as you type'
  - value: '1'
    label: 'command to refresh prices from Excel'
  - value: '0'
    label: 'photographs required to go live'
stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Cloudflare Workers']
cover: '/work/opt-katalog/hero.jpg'
order: 4
---

## What it is

A site for a wholesale supplier of construction chemicals: foams, sealants, adhesives, tapes — 617 items, nineteen product groups, thirty-one brands. The customers are retail shops, installation crews and contractors who buy by the case, not by the unit.

The client is not named in this write-up: the project is commissioned work, so only the engineering side is shown — what the problem was and how it was solved. The screenshots come from a copy with all identifying data removed.

## The problem

The price list lived in Excel and travelled by email. A customer would open a 617-row spreadsheet, hunt for what they needed, retype the items into a messenger, and a sales manager would total it up by hand. Every order burned time on both sides, and half the enquiries arrived as “do you have the 65 foam? how much?”.

There was a second difficulty: almost nothing had product photography. Waiting for suppliers to deliver imagery for six hundred items meant never launching.

## What was built

**The catalogue is generated from the price list.** When prices change, one command runs a Python script that re-reads the source Excel file, parses categories, pack sizes and availability, and rewrites the data file. No manual transfer: the price list stays the single source of truth and the site is merely its reflection.

**Search and filters are instant.** The whole catalogue sits in one data file and is filtered in the browser: typing narrows six hundred items in five milliseconds. No server, no request per keystroke. There are filters by brand, by group, and an “in stock only” switch.

**Orders are assembled as a list.** The customer marks items with “add to order”, sets the number of cases and sends the whole list in one message — the manager receives a finished order rather than a twenty-message conversation. It reaches Telegram through a relay on Cloudflare Workers, so the bot token never touches the site’s code.

**Photography stopped being a launch blocker.** Every item is drawn a label of its product group: a coloured pictogram with the pack size on it. It looks deliberate, weighs nothing, and the catalogue looks complete from day one. Real photos are added one at a time — drop the file into a folder and a script matches it to the item by filename or by product name.

## Where it hurt

**The price list turned out to be a document, not a table.** It contained category heading rows, merged cells, inconsistent pack-size notation and items with no price at all. The parser had to tolerate the mess: a row with only a name is treated as a group heading; an item without a price is not discarded but marked “to order”. A script that breaks on the client’s real file is useless no matter how correct it is.

**Two different audiences on one site.** The home page has to sell — a dark warehouse scene with a pallet and large figures. The catalogue has to work — a light, dense list fitting as many rows on screen as possible. Forcing them into one visual language ruined both, so the pages deliberately diverge in style: showcase apart, working tool apart.

## The result

The catalogue loads in under a second at roughly 140 KB including fonts — on a phone with poor reception in the field, that is the difference between “it opened” and “closed it”.

Updating prices takes one command instead of editing six hundred rows by hand. The site stays static: it can be hosted anywhere, needs no database, no admin panel and no maintenance.

A public offer and a data-processing policy were written separately — in wholesale trade with businesses these are a condition of doing business, not a formality.
