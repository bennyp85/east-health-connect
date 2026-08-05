# Community Food & Assistance Guide

A simple, mobile-friendly decision-tree website that helps outpatients at a mental health facility find food and support services once they leave the facility.

## Purpose

People leaving an inpatient mental health facility are often in a fragile and confused state, may have limited experience with technology, and are facing the practical challenge of getting by in the community. Searching long lists of services or complex websites can be overwhelming.

This guide reduces that burden by:

- **Guiding the user through a simple decision tree** — the user only ever answers **one question at a time**, starting with *"Which area are you heading to?"*.
- **Only showing what is relevant** — instead of a huge directory, the user is walked to the specific type of help they need (food, hygiene, legal, utilities, and more) in their local area.
- **Being calm and reassuring** — large buttons, plain language, a warm tone, and an always-available **Back** button so the user can change their answer at any time without feeling lost.

The result is a tool a clinician can hand to an outpatient with confidence: no login, no jargon, no clutter — just the help they need, a few taps away.

## Design principles

- **One choice per page** — the site works like a decision tree, so people are never overwhelmed.
- **Mobile-first** — designed for phones.
- **Simple and calm** — large buttons, plain language, and an always-available **Back** button.

## How it works (decision tree)

1. **Choose your area** — the home page asks *"Which area are you heading to?"* with 7 big buttons (Yarra Ranges, Knox, Boroondara, Monash, Maroondah, Whitehorse, Manningham).
2. **Choose a category** — each area shows the same list of service categories:
   Emergency Relief · Community Meals · Housing · Hygiene Services · Technology and Communication · Aboriginal and Torres Strait Islander People · No Interest Loans · Utilities · Legal · Pet Care · Health Ability · No Money No Time · Dental Clinics · Health Direct · Homeless Entry Points · Family Violence Emergency Contacts · COVID · Useful Contacts
3. **See the services** — the user sees the specific providers available in their area for that category (address, phone, website, hours, cost). Categories without data yet show a friendly "coming soon" note.

The site is a small **single-page application**: all views are rendered by JavaScript from one data file, so there is a single source of truth and nothing can drift out of date.

## Architecture

```
east-health-connect/
├── index.html            # The SPA shell — everything is rendered here
├── css/
│   └── styles.css        # All styles (mobile-first)
├── js/
│   ├── data.js           # ALL content: areas, categories, services (edit this to update the site)
│   └── app.js            # Tiny SPA: routing + rendering
├── areas/                # Redirect to the SPA deep-link (kept so old links still work)
│   ├── yarra-ranges.html
│   ├── knox.html
│   ├── boroondara.html
│   ├── monash.html
│   ├── maroondah.html
│   ├── whitehorse.html
│   └── manningham.html
├── coming-soon.html      # Redirect to the SPA (kept for old links)
├── useful-contacts.html  # Redirect to the SPA (kept for old links)
├── assets/
│   └── images/
└── README.md
```

### How routing works

Hash routes in `index.html`, e.g.:

| Route | Shows |
| --- | --- |
| `#/` | Level 1 — choose an area |
| `#/area/knox` | Level 2 — choose a category for Knox |
| `#/area/knox/emergency-relief` | Level 3 — Knox emergency relief providers |

The **Back** button always returns to the previous logical step.

## Editing content

All content lives in `js/data.js`:

- `AREAS` — the 7 municipalities (name, slug, colour).
- `CATEGORIES` — the 18 service categories (id, label), in display order.
- `SERVICES` — providers grouped by category id. Each provider has optional fields: `name`, `areas`, `address`, `phone`, `website`, `email`, `desc`, `hours`, `cost`, `notes`, `list`.
  - `areas` is either the special value `"*"` (available in every area, e.g. Health Direct) or an array of area names (e.g. `["Knox"]`).
  - A category with an empty array (e.g. `"utilities": []`) automatically shows the "coming soon" note for every area.

To add or correct a service, edit the matching entry in `js/data.js` — no HTML changes needed.

## How to run

Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.
