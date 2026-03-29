# Yearly Demand Plan — Angular 20 + PrimeNG 20

Built from the HTML demo file. Pixel-perfect match to the Envision design system.

---

## Tech Stack

| | Version |
|---|---|
| Angular | 20.x |
| PrimeNG | 20.x (Select, Dialog, Toast — minimal usage; pure CSS/HTML used for tables & layout matching the demo) |
| Node.js | 20.x or 22.x LTS |
| TypeScript | 5.8.x |

---

## Quick Start

```bash
# 1. Install Angular CLI 20 globally
npm install -g @angular/cli@20

# 2. Install dependencies
npm install

# 3. Run dev server
ng serve
# → Open http://localhost:4200
```

---

## Project Structure

```
src/
├── index.html
├── main.ts
├── styles.scss                         ← All global CSS (exact match to HTML demo)
└── app/
    ├── app.component.ts                ← Shell: top-nav + sidebar
    ├── app.config.ts                   ← Angular providers
    ├── app.routes.ts
    ├── data.service.ts                 ← Mock DB (customers / projects / SPVs / defaults)
    └── demand-plan/
        ├── demand-plan.component.ts    ← All business logic
        ├── demand-plan.component.html  ← Template
        └── demand-plan.component.scss  ← Component-level overrides
```

---

## Features (matching HTML demo exactly)

### Core
- **Year** selector (2025–2028)
- **Customer** selector → filters project codes
- **Project Code** selector (per card) → filters SPV list
- **SPV** selector → auto-loads default WTG rows from DB
- **Monthly input table** (Jan–Dec) with live row totals & column totals
- **Add WTG Row** — adds an extra editable row per card
- **Remove WTG Row** — removes individual rows

### Business Rules (all 3 fixes implemented)
1. **FIX 1 — Sequential display index**: After any card is deleted the numbering
   resets automatically. Index is computed from `array.findIndex()` — never stale.
2. **FIX 2 — SPV disabled within same project**: If Card 1 picks P-1719 / SPV 1,
   then Card 2 (also P-1719) shows SPV 1 as `(used)` and disabled.
3. **FIX 3 — Cross-project isolation**: If Card 2 picks a different project code
   (e.g. P-1854) all SPVs are enabled regardless of what other cards selected.

### UX
- **Status badge** — live count of projects / rows / units in page header
- **View Summary** — modal with 4 stat tiles + full detailed breakdown table
- **Submit Plan** — closes modal, shows success toast, logs payload to console
- **Toast** — green (success) / amber (warning) with auto-dismiss after 3 s
- **Add More Project** button in filter bar
- **Remove** button on each card (hidden when only 1 card remains)

---

## Design

Exact match to the HTML demo:
- Font: Inter
- Colors: `--accent: #00a86b` (green), `--blue: #1a6fc4`, `--text: #1a2332`
- Background: `#eef1f5`
- Cards: white with subtle border-shadow
- Table headers: `#f0f4f9` with uppercase labels
- Total row: `#f0f9f5` with green accent values

---

## Wiring to a Real API

Replace the static `DB_*` constants in `src/app/data.service.ts` with HTTP calls:

```typescript
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getProjects(customer: string) {
    return this.http.get<string[]>(`/api/projects?customer=${customer}`);
  }

  getSPVs(projectCode: string) {
    return this.http.get<string[]>(`/api/spvs?project=${projectCode}`);
  }
}
```

Then add `provideHttpClient()` to `src/app/app.config.ts`.

---

## Submit Payload Shape

```json
{
  "year": "2026",
  "customer": "ReNew",
  "projects": [
    {
      "project": "P-1719",
      "spv": "SPV 1",
      "rows": [
        {
          "wtg": "EN182",
          "cap": 5,
          "tower": "140HH-474T",
          "blade": "Big",
          "qty": 10,
          "mon": [0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    }
  ]
}
```
