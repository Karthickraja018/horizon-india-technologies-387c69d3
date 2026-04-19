

## Current State Assessment

After reviewing the codebase, the site already implements most of what's being asked:
- Neutral white/gray base with `.section-alt` (subtle muted bg)
- Cards use white bg + thin borders + subtle hover lift (`.surface-card`)
- Primary color restrained to CTAs, icons, eyebrow labels, badges
- Asymmetric Categories grid (featured card spans 2 cols)
- Services grouped Core + Support
- Real generated product images in `src/assets/products/`
- TrustBar with NABL/ISO/24h
- Hero locked (cannot touch per memory rule)

**What's actually missing vs. the brief:**
1. No "Problem → Solution" section in the lead-gen flow
2. CTA discipline: Hero has two solid-feeling buttons; some sections still stack two primary CTAs
3. Featured Products: spec rows are good, but card density can be tightened and "Request Quote" should be the only solid button (View Details = outline ✓ already)
4. Trust strip is minimal — no industries-served / client tags row
5. WhyChooseUs uses bordered grid that still reads "boxy startup"; can be flattened to a metrics strip
6. Some remaining decorative use of primary color (e.g., featured card icon tile, hover border highlights) — needs audit
7. Other pages (Products, CategoryPage, ProductPage, Services, About, Contact) likely still use older styling — need consistency pass

## Plan

### 1. Add "Problem → Solution" section (new)
New `IndustryChallenges.tsx` between TrustBar and CategoriesGrid. Two-column asymmetric layout:
- Left: 3 stacked problem statements (downtime, calibration drift, compliance gaps) with small neutral icons
- Right: single solution panel summarizing Horizon's response (sales + service + NABL calibration)
- White bg, thin border separators, no color blocks

### 2. Add "Industries Served" strip
New `IndustriesStrip.tsx` below TrustBar (or merged): horizontal row of text tags — Automotive, Foundry, Construction, Aerospace, Education, Research. Plain text chips with thin borders, no color fills.

### 3. Refine WhyChooseUs into a flatter metrics strip
- Remove the heavy bordered card grid
- Use a single horizontal divided row (4 metrics, separated by thin vertical dividers)
- Numbers in dark headline color, label below in muted, tiny eyebrow above
- Remove card backgrounds entirely — sit directly on `.section-alt`

### 4. Audit & tighten primary color usage
Sweep across:
- `CategoriesGrid.tsx` — featured card icon tile (`bg-hero-accent/10`) → make it neutral `bg-secondary/40`, icon stays accent
- `ServicesSection.tsx` — group header eyebrow stays accent, icons stay accent, remove any remaining tinted hover bg
- `FeaturedProducts.tsx` — confirm only "Get Quote" is solid; "Details" stays outline ✓
- `CTABand.tsx` — keep one solid (WhatsApp), Email + Phone as outline/ghost
- `TrustBar.tsx` — icons accent, text neutral
- `Footer.tsx` — links neutral, hover → accent only

### 5. Apply industrial styling to inner pages
- `Products.tsx` (categories list): use same asymmetric grid pattern
- `CategoryPage.tsx`: product cards reuse `FeaturedProducts` card styling (spec-row, badges, dual CTA)
- `ProductPage.tsx`: structured spec table using `.spec-row`, sticky right rail with Quote + WhatsApp + Phone, neutral background
- `Services.tsx`: mirror homepage Core/Support grouping
- `About.tsx`: clean two-col layout — company facts left, credentials/coverage right
- `Contact.tsx`: form left (white card, thin border), contact details right (no color blocks)

### 6. Hero — DO NOT TOUCH
Hero is locked per project memory. Skip entirely.

### 7. Global CSS additions (`src/index.css`)
- `.metrics-strip` — flat divided row utility
- `.tag-chip` — neutral bordered text chip for industries
- `.problem-item` — left-bordered list item with icon slot
- Confirm `.btn-ghost` exists for tertiary actions; add if missing

## Files to Edit / Create

**Create:**
- `src/components/IndustryChallenges.tsx`
- `src/components/IndustriesStrip.tsx`

**Edit:**
- `src/pages/Index.tsx` (add new sections in order)
- `src/components/WhyChooseUs.tsx` (flatten to metrics strip)
- `src/components/CategoriesGrid.tsx` (neutralize featured tile)
- `src/components/FeaturedProducts.tsx` (minor density polish)
- `src/components/CTABand.tsx` (single solid CTA discipline)
- `src/components/TrustBar.tsx` (color audit)
- `src/components/Footer.tsx` (link color audit)
- `src/pages/Products.tsx`
- `src/pages/CategoryPage.tsx`
- `src/pages/ProductPage.tsx`
- `src/pages/Services.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/index.css` (utilities for metrics strip, chips, problem items)

## New Homepage Section Order

```text
Hero (locked)
↓
TrustBar (NABL / ISO / 24h / Coverage)
↓
IndustriesStrip (Automotive · Foundry · Construction · …)
↓
IndustryChallenges (Problem → Solution)
↓
CategoriesGrid (asymmetric, neutral)
↓
WhyChooseUs (flat metrics strip)
↓
FeaturedProducts (spec cards)
↓
ServicesSection (Core / Support)
↓
CTABand (one solid + outlines)
↓
Footer
```

## Color Discipline Rules Enforced

- Solid primary: only Request Quote / Get Quote / WhatsApp buttons, eyebrow labels, small icons, active nav, badges
- Everything else: `text-foreground`, `text-hero-muted`, `border-border`, white or `.section-alt` backgrounds
- No section uses primary as background fill
- No card uses primary as background fill
- Hover states may briefly tint border to accent — no bg fills

