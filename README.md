# HABITAT-X

**Before a Mission Fails, Find Out Why.**

NASA Space Apps Challenge 2026 | Team Anthelion

- Live project: [add public link]
- Demo (30 seconds or 7 slides): [add public link]
- Repository: [add link]

---

## Overview

HABITAT-X is an interactive, NASA-data-driven simulation platform for exploring the resilience of future human settlements on the Moon and Mars. It matches real lunar and Martian sites with comparable environments on Earth, lets users build a settlement there, stress-tests it, and traces how a failure spreads so that users can find the underlying weak point and test fixes.

The platform connects three levels:

**Planet → Settlement → Human**

Instead of picking a spot on a map and hoping it is a good match, HABITAT-X shows why an Earth location is a good Moon or Mars stand-in, tests what happens when things go wrong there, and lets users try out solutions.

## The Core Shift

The old question was: *"Can this settlement survive?"*

HABITAT-X asks: *"What would make it fail, how would that failure spread, and what can we do about it?"*

**Find Match → Build → Simulate → Stress-Test → Trace Failure → What-If → Intervene → Recover**

HABITAT-X does not claim to predict what will happen on a real mission. It is a testing ground where NASA data, simulation, AI, and human judgment come together to explore failure, test fixes, and build resilience thinking before it matters in real life.

## How It Works

### 1. Explore: Find the Match
Users pick a real Moon or Mars site, such as a lunar crater or a Martian crater floor. HABITAT-X searches real Earth locations and shows the closest matches using NASA data on temperature, water, terrain, soil, and environmental change over time. For example, an Earth desert can stand in for a dry Martian plain, and a polar site can stand in for a shadowed lunar crater.

### 2. Build: Settlement Scale
At the matched site, users build a small settlement with limited water, food, energy, shelter, and emergency supplies. They decide where to place things and how to obtain water and power. Resources are limited, so every decision has a trade-off.

### 3. Simulate: Stress-Test
The environment changes over time using real data from the Earth analog. When something goes wrong, such as a heat spike, a water drop, or a storm, HABITAT-X does not just lower a number on a bar. It shows the chain of events:

**Heat → Water → Agriculture → Food → Crew**

This exposes hidden weak points before they cause real failure. Because the site is a real Earth analog, the lessons can inform thinking about the actual Moon or Mars site.

### 4. Crew Resilience: Human Scale
A crew layer tracks signs such as sleep, tiredness, activity, and movement, using simple computer vision to help measure movement patterns. This connects environmental and settlement stress to the people living through it, not just the buildings.

### 5. Intervention Lab: What-If
Users test fixes such as storing more water, growing less food, adding backups, changing crew shifts, or moving the settlement. They can also ask direct questions like "What if it gets 5°C hotter?" or "What if more people arrive?" and see the model's actual numbers change in response.

### 6. HABITAT-X Researcher (AI)
An AI helper, not a general chatbot, that:

- finds hidden weak points and risks
- builds what-if scenarios on request
- explains results in plain language
- compares strategies (for example water-first, self-sufficient, or mobile) under the same conditions

The AI suggests and explains. The simulation calculates. The person makes the final call.

### 7. Mission Report
A summary at the end of each run: how long the settlement lasted, safety scores for water, energy, and food, the biggest weak point found, what caused it, and a suggestion for what to try next.

## Product Format

```
HABITAT-X
│
├── TUTORIAL MODE
│     A short guided example: one location, one pre-set problem.
│     Learn the loop: build → problem hits → trace failure → fix it.
│     Ends with "Now try it yourself", which moves the user into the Portal.
│
└── PORTAL
      Explore  → find real Earth matches for a Moon or Mars site
      Build    → your settlement, your resources
      Simulate → real data-driven changes over time, real shocks
      Copilot  → AI finds risks, runs what-ifs, compares strategies
      Report   → Mission Report
```

## What Makes It Different

Survival games built on NASA data already exist (for example Mars Life, a 2016 Global Nominee, which is a guided chatbot survival game), and settlement builders and resource simulators are common. HABITAT-X combines elements that are usually separate:

- Real Earth-to-Moon/Mars matching, not an invented map
- Failure-chain tracing, not just a resource bar dropping
- An Intervention Lab for testing fixes before something breaks
- Strategy comparison under identical conditions
- A Crew Resilience layer linking environment, settlement, and human
- One engine used across Earth, Moon, and Mars

## Impact

- **Earth:** Helps researchers and disaster-planning teams study resilience to heat, drought, and water shortages in real regions, the same regions used as Moon and Mars stand-ins.
- **Space:** Helps mission planners explore candidate testing sites for future Moon and Mars settlements and understand how combined stresses affect crews.
- **Education:** Gives students and researchers a safe place to compare strategies before applying them in the real world.

## NASA Data Used

> Keep only the datasets your build actually uses, and match this list to the submission form.

| Dataset | Link | Use |
|---|---|---|
| MODIS Land Surface Temperature (MOD11A1) | https://lpdaac.usgs.gov/products/mod11a1v061/ | Surface temperature profiles for analog matching |
| NASA POWER | https://power.larc.nasa.gov/ | Temperature and solar energy data for analog sites and heat events |
| SMAP Soil Moisture | https://nsidc.org/data/smap | Soil and water availability comparison |
| GRACE / GRACE-FO | https://grace.jpl.nasa.gov/data/get-data/ | Water storage change for scarcity events |
| SRTM Digital Elevation (SRTMGL1) | https://lpdaac.usgs.gov/products/srtmgl1v003/ | Terrain and elevation comparison |
| LRO (LOLA and Diviner) | https://pds-geosciences.wustl.edu/missions/lro/ | Lunar terrain and surface temperature |
| Mars Global Surveyor MOLA | https://pds-geosciences.wustl.edu/missions/mgs/mola.html | Martian topography |

## Tech Stack

> Fill in with what you actually used.

- Frontend: [framework]
- Backend and simulation: [language, libraries]
- Computer vision: [library or model]
- AI Researcher: [model or API]
- Other libraries, fonts, icons, and assets: [list with links and licenses]

## Getting Started

> Replace with your real steps.

```bash
git clone [repository url]
cd [project folder]
[install command]
[run command]
```

## Limitations

HABITAT-X is a working prototype and an exploratory framework. Earth analogs cannot perfectly reproduce lunar or Martian conditions, and the simulation does not predict real mission outcomes. Future work includes deeper NASA datasets, expert validation, and feedback from real mission contexts.

## Team

Team Anthelion: five computer science students.

- [Name, role]

## License

[Add a license, or state "All rights reserved".]

---

*HABITAT-X: Before a Mission Fails, Find Out Why.*
