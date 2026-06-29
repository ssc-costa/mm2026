# Mr Move Content & Package Upgrade Plan

This branch adds the safe package pieces that can be committed without rewriting the full single-file homepage blindly.

## Source copy summary

The original supplied copy positions Mr Move as a Costa Blanca removals company covering local and international removals, storage, packing and crane lifting. The legacy homepage says Mr Move operates across the Costa Blanca and surrounding areas, with moves from small jobs to large relocations, plus storage, packing and rooftop crane lifting. The services copy covers local/long-distance moves, man-and-van, crane services and house clearances. The about copy states the company is based near Torrevieja and offers local/international removals, crane services, packing and clearances, with legal operation and insured goods.

## Stronger positioning

Recommended headline:

> Removals, storage and specialist lifting across the Costa Blanca.

Recommended hero paragraph:

> From local man-and-van jobs in Torrevieja and Alicante to full Spain–UK relocations, secure storage and crane-assisted access, Mr Move handles the planning, lifting and transport properly from start to finish.

Recommended CTA labels:

- Get a Moving Quote
- WhatsApp the Team

## Intro section

Recommended heading:

> A proper removals team for real Costa Blanca moves.

Recommended copy:

> Moving on the Costa Blanca is rarely simple. Tight urban streets, apartment blocks, roof terraces, storage delays, Spain–UK paperwork and awkward access all have a habit of appearing at exactly the worst moment.
>
> Mr Move is built for that reality. Based near Torrevieja, the team handles local removals, long-distance relocations, secure storage, packing, house clearances and specialist lifting with experienced crews and the right equipment for the job.

## Service cards

### Local removals

Homes, apartments and villas across Torrevieja, Orihuela Costa, Guardamar, Alicante and the wider Costa Blanca. Ideal for full moves, smaller local jobs and furniture transfers.

### Man and van

A flexible option for smaller loads, single-room moves, marketplace purchases, storage runs and items that do not need a full removals crew.

### Spain, UK and European removals

Door-to-door long-distance removals between Spain, the UK and wider Europe, with planning support for access, timing, loading and documentation.

### Secure storage

Short-term and long-term storage for customers waiting on property dates, renovating, downsizing or splitting a move into stages.

### Packing service

Full or partial packing using proper materials for fragile, bulky and awkward items.

### Crane and specialist access

External lifting for upper-floor apartments, solariums, terraces, jacuzzis, pool tables, sofas, beds and large items that will not fit through stairs or lifts.

### House clearances

Full and partial clearances for sold properties, rental turnovers, inherited homes and pre-move decluttering, with responsible disposal where needed.

### Part-load moves

Cost-effective option for smaller loads travelling on shared routes.

## Trust points to verify before final publish

Do not publish unverified claims. Confirm these with the business owner:

- Fully licensed status
- VAT registration
- Goods-in-transit insurance
- Any exact insurance amount
- Years of experience
- Whether testimonials are genuine Google reviews or placeholders

## Homepage fixes still recommended

The following need an `index.html` pass:

1. Replace the frontend text that says "Submitted securely via Formspree" because the backend now uses Resend.
2. Add a privacy link beside the consent checkbox.
3. Fix the submit button JavaScript so it uses `submitText` and `submitSpinner` instead of overwriting the whole button with `textContent`.
4. Complete the Spanish translation or remove the EN/ES toggle until it is properly finished.
5. Replace external image URLs with local optimised assets.
6. Add footer links to `privacy.html`, `sitemap.xml`, phone, email and WhatsApp.

## Suggested image assets

```txt
/assets/logo-mrmove.png
/assets/hero-vans.webp
/assets/fleet-wide.webp
/assets/team-loading.webp
/assets/storage.webp
/assets/crane-access.webp
/assets/og-mrmove.jpg
```

## Safer quote-form helper text

Replace:

> Submitted securely via Formspree. No spam, no data selling — just a quote for your move.

With:

> Sent securely to the Mr Move team. No spam, no selling your details — just a proper quote for your move.
