---
title: CIVIKNET Canonical Naming System
description: Exhaustive v2.0 naming, coding, and taxonomy standards for CIVIKNET, CivikStack, PublikWorks, and Publik School assets.
---

# Layer Map (Who Does What)

- **CIVIKNET** — umbrella network and brand responsible for governance, IP, standards, and publishing.
- **CivikStack (`CST`)** — standards, schemas, and reference implementations describing how work is executed.
- **PublikWorks (`PBW`)** — delivery studio that runs events and installs (the *do* layer).
- **Publik School (`PBS`)** — academy and certification engine (the *learn* layer).

> Flow: **Learn (PBS) → Do (PBW) → Power (CST) → Govern & Publish (CIVIKNET)**

# Core Brands and Frameworks

- **CIVIKNET** — ecosystem brand, visual identity, and guardianship of marks.
- **CIVIKS Intelligence** — the six-phase loop: *Context → Intention → Vision → Integration → Knowledge → Sustainability*.
- **KnowledgeSport** — live hackathon and rapid deployment event format.
- **KAO** — *Knowledge Asset Object*, the atomic licensed output that carries provenance.
- **KOGNISHUN** — conversational cognitive profiling method.
- **VIRA** — advisory AI trained on KAOs and event telemetry.

# Systems Directory (Codes and Custodians)

| System | Code | Purpose | Default Owner |
| --- | --- | --- | --- |
| **MAVVIS** | `MVS` | Movement-Adaptive Vector Validation Integration Synthesis (room orchestration) | Ops Lead |
| **VAULT** | `VLT` | Versioned Asset, Unified Licensure & Trust (IP, licensing, provenance) | Team VAULT |
| **TRAKC** | `TRK` | Telemetry, Reporting, Attribution & KPI Console | Team PULSE |
| **KONST** | `KST` | Knowledge Object Normalization & Schema Translator (ETL to KAO) | Data Steward |
| **Kommons** | `KOM` | Public knowledge portal and publisher | Team PRINTNATION |
| **ScribeDock** | `SCD` | Capture and transcription station | Scribes |
| **Gatekeeper** | `GKP` | CIVIKS phase and quality validator | Facilitator |
| **GapCallup** | `GCU` | Expertise and coverage gap detector | Facilitator |
| **QualityScorer** | `QSR` | Conversation and asset quality rating | Team PULSE |
| **Printery** | `PRY` | Printables and pack generation | Team PRINTNATION |

# Canonical Teams

| Team | Code | Expanded Name | Loop Mnemonic | Short Loop |
| --- | --- | --- | --- | --- |
| **VEKTOR** | `VEK` | Vectorized Evidence, Knowledge & Terrain Observation for Response | **V.E.K.T.O.R.** → *Vectorize → Establish → Key → Triangulate → Observe → Recommend* | Sense → Validate → Map → Prioritize |
| **SWARM** | `SWM` | Stakeholder & Warehouse Asset Registry & Matchmaking | **S.W.A.R.M.** → *Scan → Weight → Align → Register → Match* | List → Vet → Onboard → Match |
| **VAULT** | `VLT` | Viability, Access, Underwriting, Licensing & Trust | **V.A.U.L.T.** → *Verify → Assemble → Underwrite → Lock → Transfer* | Frame → Design → Secure → Record |
| **REACH** | `RCH` | Routing, Equity, Access, Coordination & Handoff | **R.E.A.C.H.** → *Receive → Engineer → Assign → Confirm → Health-check* | Stage → Route → Deliver → Improve |
| **BEAKON** | `BKN` | Broad Engagement & Activation: Keep On Noticing | **B.E.A.K.O.N.** → *Brief → Engage → Activate → Keep → Open → Notify* | Inform → Mobilize → Listen → Update |
| **PULSE** | `PLS` | Performance, Uptime, Learning, Signals & Evaluation | **P.U.L.S.E.** → *Pull → Understand → Learn → Share → Evolve* | Measure → Learn → Decide → Adapt |
| **PRINTNATION** | `PRN` | Package, Replicate, Install, Normalize & Transmit Nation-wide | **P.R.I.N.T. / N.A.T.I.O.N.** | Package → Localize → Publish → Proliferate |

# Namespaces and Repository Conventions

- `civiknet/*` — governance, schemas, license center, brand assets, public portals.
- `civikstack/*` — specifications, schemas, reference implementations, workflow packs.
- `publikworks/*` — operational runbooks, venue kits, deployment tooling.
- `publikschool/*` — curriculum, certifications, simulations, and exams.

**Repository Slug Pattern**

```
<org>-<system-or-team>-<purpose>
# Example: civikstack-kao-schema, publikworks-venue-kit
```

**Starter Repository Set**

- *CivikStack*: `civikstack-spec`, `civikstack-schemas`, `civikstack-refimpl`, `civikstack-n8n-pack`
- *PublikWorks*: `publikworks-hackathon-runbooks`, `publikworks-printables`, `publikworks-venue-kit`
- *Publik School*: `publikschool-facilitator-101`, `publikschool-scribe-lab`, `publikschool-cert-bank`
- *CIVIKNET*: `civiknet-license-center`, `civiknet-brand-assets`, `civiknet-kommons-portal`

# Identifiers, Versioning, and Filenames

**Event Runs**

```
RUN:<GEO>-CIVIKS-<YYYYMMDD>-<format>
RUN:DUR-CIVIKS-20251115-48H
```

**Knowledge Asset Objects (KAO)**

```
KAO:<TEAMCODE>-<GEO>-<TOPIC>-<YYYYMMDD>-<seq>
KAO:VEK-DUR-FoodAccess-20251103-01
```

**Datasets**

```
DS:<DOMAIN>-<GEO>-<VERSION>
DS:Logistics-DUR-v2025.11
```

**Stack and Curriculum Versions**

- `CST vX.Y.Z` — CivikStack
- `PBW-OPS vX.Y` — PublikWorks kits
- `PBS-CERT vX.Y` — Publik School curricula and certifications

**File Naming**

```
CIVIKNET_<Code>_<Geo>_<TitleOrRelease>_<YYYYMMDD>.<ext>
CIVIKNET_VLT_DUR_FundingStack_v2025.11.pdf
```

**Short Codes**

- Systems: `MVS`, `VLT`, `TRK`, `KST`, `KOM`, `SCD`, `GKP`, `GCU`, `QSR`, `PRY`
- Teams: `VEK`, `SWM`, `VLT`, `RCH`, `BKN`, `PLS`, `PRN`
- Layers: `CST`, `PBW`, `PBS`

# Event and Asset Taxonomy

- **Event Formats**: `48h-standard`, `one-day-sprint`, `two-week-impl-lab`
- **CIVIKS Phase Gates**: `CTX`, `INT`, `VIS`, `ING`, `KNW`, `SUS`
- **Thread Types**: `context-map`, `intention-circle`, `vision-studio`, `integration-build`, `knowledge-harvest`
- **Contribution Roles**: `sponsor`, `lead-facilitator`, `floor-facilitator`, `scribe`, `safety-officer`, `ops-lead`, `data-steward`, `runner`, `participant`
- **KAO Classes**: `playbook`, `workflow`, `template`, `dataset`, `model-card`, `policy`, `brief`, `map`, `report`

# Issue, PR, and Label Conventions

**Issue Labels**

```
type:bug | type:feature | type:doc | type:ops-kit
prio:urgent | prio:high | prio:med | prio:low
area:mvs|vlt|trk|kst|kom|scd|gkp|gcu|qsr|pry
team:vek|swm|vlt|rch|bkn|pls|prn
status:triage|in-progress|blocked|ready
phase:ctx|int|vis|ing|knw|sus
```

**PR Labels**

```
release:candidate | breaking-change | needs-qa | docs-needed
license-impact | schema-change
```

**Branching Pattern**

```
main
develop
feature/<area>-<short>
fix/<area>-<short>
release/vX.Y.Z
```

# CLI, Environment, and API Naming

**CLI Namespace**

```
civik <command> [subcommand]

civik run --event RUN:DUR-CIVIKS-20251115-48H
civik kao create --team VEK --topic FoodAccess --geo DUR
civik publish --to kommons --id KAO:VEK-DUR-FoodAccess-20251103-01
```

**Environment Variables**

```
CIVIK_ENV=dev|staging|prod
CIVIK_ORG=civiknet
CIVIK_GEO=<ISO-CODE>
CIVIK_RUN_ID=RUN:DUR-CIVIKS-20251115-48H
CIVIK_KOMMONS_URL=<https://...>
CIVIK_VAULT_POLICY=v1
```

**Service Endpoints**

```
/api/v1/vault/licenses
/api/v1/konst/normalize
/api/v1/trakc/telemetry
/api/v1/kommons/publish
/api/v1/mavvis/recommendations
```

# Data and Schema Naming

- **Collections/Tables**: `runs`, `threads`, `participants`, `roles`, `signals`, `telemetry`, `kaos`, `licenses`, `attributions`
- **Canonical Fields**: `run_id`, `geo`, `phase`, `team_code`, `thread_id`, `kao_id`, `kao_class`, `license_id`, `attribution[]`, `quality_score`, `equity_index`, `coverage_rate`, `created_at`, `updated_at`, `version`
- **Metric Keys (TRAKC)**: `tta` (Time-to-Answer), `pbal` (Participation Balance), `kao_yield`, `equity_coverage`, `throughput`, `gate_passrate`, `retention`

# Visual Identity Tokens

- **CIVIKNET Core**: Slate `#0F172A`, Accent Cyan `#06B6D4`
- **CivikStack (`CST`)**: Indigo `#4F46E5`
- **PublikWorks (`PBW`)**: Emerald `#10B981`
- **Publik School (`PBS`)**: Amber `#F59E0B`
- **Team Accents**: `VEK` Purple `#7C3AED`, `SWM` Teal `#14B8A6`, `VLT` Blue `#2563EB`, `RCH` Orange `#F97316`, `BKN` Sky `#0EA5E9`, `PLS` Rose `#F43F5E`, `PRN` Lime `#84CC16`
- **Typography**: Headlines — Inter or SF Pro (semibold); Body — Inter or Source Sans; Mono — JetBrains Mono or Fira Code.
- **Icon Tokens**: `VEK` 🗺️, `SWM` 🤝, `VLT` 🔐, `RCH` 🚚, `BKN` 📣, `PLS` 📊, `PRN` 📦; systems `MVS` 🕹️, `TRK` 📈, `KST` 🧩, `KOM` 🌐, `SCD` 📝, `GKP` ✅, `GCU` 🧭, `QSR` ⭐, `PRY` 🖨️.

# Licensing and IP Posture

- **Code and reference implementations**: `Apache-2.0` or `MPL-2.0` with `SPDX-License-Identifier` headers.
- **Specs and schemas**: `CC BY 4.0`.
- **Playbooks and KAOs**: `CC BY-SA 4.0` (default, attribution required).
- **Brand packs and marks**: CIVIKNET™ usage under published guidelines.

# Governance, Roles, and Councils

- **Standards Council (SC)** — evolves CivikStack.
- **Ethics & Equity Board (EEB)** — reviews gates, metrics, language access.
- **License & IP Board (LIB)** — oversees VAULT policy and exceptions.
- **Education Council (EDC)** — Publik School curricula and certifications.
- **Ops Guild (OPG)** — facilitators, scribes, and data stewards guild.

**Role Codes**: `SPN` (Sponsor), `LFA` (Lead Facilitator), `FFA` (Floor Facilitator), `SCD` (Scribe), `SOF` (Safety Officer), `OPS` (Ops Lead), `DST` (Data Steward), `RUN` (Runner), `PAR` (Participant).

# Communications Channels

**Slack/Matrix Channels**

```
#run-<geo>-<date>-ops
#team-vek|swm|vlt|rch|bkn|pls|prn
#sys-mvs|vlt|trk|kst|kom|scd|gkp|gcu|qsr|pry
#civikstack-spec
#publikworks-field
#publikschool-faculty
```

**Email Aliases**: `ops@civiknet.org`, `school@civiknet.org`, `works@civiknet.org`, `stack@civiknet.org`, `licensing@civiknet.org`.

# Documentation Front Matter and Tagging

**Doc Tags**: `audience: ops|policy|facilitator|scribe|sponsor|dev`, `phase: ctx|int|vis|ing|knw|sus`, `team: vek|swm|vlt|rch|bkn|pls|prn`, `system: mvs|vlt|trk|kst|kom|scd|gkp|gcu|qsr|pry`, `license: cc-by|cc-by-sa|apache-2.0|mpl-2.0`.

**Front Matter Example**

```yaml
title: Funding Stack Overview
id: VLT-FundingStack-Guide
version: 2025.11
team: VLT
phase: ING
license: CC BY-SA 4.0
kao_id: KAO:VLT-DUR-FundingStack-20251103-01
```

# Printables, Badges, and Table Cards

- **Lanyard Codes**: `LFA` (Lead Facilitator, indigo stripe), `FFA` (Floor Facilitator, teal), `SCD` (Scribe, purple), `OPS` (Ops Lead, emerald), `SOF` (Safety, red). Team badges feature team code and color.
- **Table Cards**: `TEAM <CODE>` header, loop mnemonic, three bullets (Immediate task, Handoff, Quality bar), QR code linking to team README and agenda.

# Dataset and Model Card Naming

```
MC:<MODEL>-<DATASET>-<VERSION>
MC:VIRA-KAO-DUR-v2025.11

PV:<KAO_ID>-<HASH:8>
PV:KAO:VEK-DUR-FoodAccess-20251103-01-4F9A7C2B
```

# Quality and Equity Metrics

- `qsr.thread` (0–10) — conversation quality.
- `qsr.kao` (0–10) — asset quality.
- `eqx.coverage` (0–1) — equity coverage index.
- `pbal.score` (0–1) — participation balance.
- `gate.pass` (boolean) — phase gate pass indicator.
- `risk.level` (`low`, `med`, `high`) — operational risk tier.

# Public URLs and Slugs

- Root: `https://civiknet.org`
- Portal: `https://kommons.civiknet.org`
- Docs: `https://docs.civiknet.org`
- Stack: `https://civikstack.civiknet.org`
- Works: `https://publikworks.civiknet.org`
- School: `https://publikschool.civiknet.org`

**Slug Patterns**

```
/playbooks/<geo>/<topic>/<release>
/kao/<id>
/events/<run-id>
/teams/<code>
/systems/<code>
```

# Template File Names

- `README.team-<code>.md`
- `README.system-<code>.md`
- `RUNBOOK.<format>.md`
- `GATE.<phase>.md`
- `KAO-TEMPLATE.<class>.md`
- `SOP.capture-scribedock.md`
- `SOP.gatekeeper.md`
- `SOP.vault-licensing.md`
- `SOP.trakc-dashboards.md`

# Glossary Anchors

- **CIVIKS** — six-phase intelligence framework.
- **KAO** — atomic, licensed knowledge output with provenance and attribution.
- **Gate** — quality bar to advance a phase.
- **Thread** — focused conversation or work unit.
- **Run** — a single event execution.
- **Pack** — printable and digital bundle for deployment.
- **Telemetry** — structured event and activity signals for TRAKC.
- **Attribution** — contributor credit embedded in every KAO.

---

This canonical naming system is intentionally collision-free, URL-safe, and printable so teams can operationalize it across repositories, badges, dashboards, CLIs, datasets, and live events without rework.
