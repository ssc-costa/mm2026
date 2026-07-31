# Mr Move Homepage Wireframe Specification

**Status:** First approved-direction wireframe specification  
**Repository:** `ssc-costa/mm2026`  
**Working branch:** `dev` only  
**Related document:** `docs/PRODUCT-DESIGN-BRIEF.md`  
**Primary design target:** Mobile first, then tablet and desktop  
**Primary conversion:** Qualified quote enquiry  

---

## 1. Purpose

This document converts the agreed product and design brief into a build-ready homepage structure.

It defines:

- The order of homepage sections
- The job each section must perform
- Mobile-first layout behaviour
- The quote journey
- Primary and secondary calls to action
- Trust placement
- Required content and imagery
- Interaction notes
- Components required for design and development

This is a UX wireframe specification, not final visual design. Copy, imagery, spacing, and styling may evolve, but the conversion logic and information hierarchy should remain stable unless evidence supports a better approach.

---

## 2. Homepage UX Goal

Within the first screen, a visitor should understand:

1. Mr Move handles removals, storage, UK–Spain moves, and specialist crane lifting.
2. The company operates across the Costa Blanca.
3. The business is real, experienced, licensed, insured, and active.
4. A quote can be started immediately.
5. Phone and WhatsApp are available as faster alternatives.

The homepage should behave as a service switchboard and conversion page, not an exhaustive brochure.

---

## 3. Core Mobile User Journey

### Primary journey

1. Visitor lands on homepage.
2. Visitor sees clear service proposition and trust cues.
3. Visitor starts the short quote form in the hero.
4. Visitor completes additional details in step two.
5. Visitor receives a clear success message and response expectation.

### Secondary journey

1. Visitor lands on homepage.
2. Visitor chooses one of four core service pillars.
3. Visitor visits the relevant service page.
4. Visitor requests a quote, calls, or uses WhatsApp.

### Immediate-contact journey

1. Visitor lands on homepage.
2. Visitor taps Call or WhatsApp from the header, hero, or mobile sticky bar.

---

## 4. Mobile Wireframe Overview

```text
┌──────────────────────────────────────┐
│ Sticky Header                        │
│ Logo        Call   Menu              │
├──────────────────────────────────────┤
│ Hero                                 │
│ Eyebrow / trust statement            │
│ Main headline                        │
│ Supporting copy                      │
│                                      │
│ Quick Quote Form                     │
│ [Moving from]                        │
│ [Moving to]                          │
│ [Approximate date]                   │
│ [Phone / WhatsApp]                   │
│ [Start My Quote]                     │
│                                      │
│ Call / WhatsApp alternatives         │
├──────────────────────────────────────┤
│ Google Reviews + Credentials Strip   │
├──────────────────────────────────────┤
│ Choose Your Service                  │
│ [Local Removals]                     │
│ [UK ↔ Spain]                         │
│ [Storage in Catral]                  │
│ [Crane Lifting]                      │
├──────────────────────────────────────┤
│ Latest Moves                         │
│ Horizontal cards / stacked cards     │
├──────────────────────────────────────┤
│ Why Mr Move                          │
│ Evidence-led differentiators         │
├──────────────────────────────────────┤
│ UK ↔ Spain Spotlight                 │
├──────────────────────────────────────┤
│ Storage in Catral Spotlight          │
├──────────────────────────────────────┤
│ Crane Lifting Spotlight              │
├──────────────────────────────────────┤
│ Local Removals Spotlight             │
├──────────────────────────────────────┤
│ How It Works                         │
├──────────────────────────────────────┤
│ Relevant Reviews                     │
├──────────────────────────────────────┤
│ FAQ                                  │
├──────────────────────────────────────┤
│ Full Quote Form                      │
├──────────────────────────────────────┤
│ Footer                               │
├──────────────────────────────────────┤
│ Mobile Sticky CTA Bar                │
│ Call | WhatsApp | Quote              │
└──────────────────────────────────────┘
```

---

## 5. Section-by-Section Specification

## 5.1 Sticky Header

### Purpose

Provide immediate access to contact and navigation without taking over valuable mobile screen space.

### Mobile layout

- Left: Mr Move logo
- Right: Call icon and menu icon
- Quote action may remain in the mobile sticky bar rather than crowding the header
- Height target: approximately 64px
- Header remains visible while scrolling

### Desktop layout

- Logo and brand name
- Primary navigation
- Phone number
- Primary `Get a Quote` button

### Recommended navigation

- Services
- Storage
- UK–Spain
- Crane Lifting
- Reviews
- Quote

### Behaviour

- Header may reduce slightly after scrolling
- Mobile menu must trap focus and close using a visible button, Escape key, and navigation selection
- No excessive dropdown structure in the first version

---

## 5.2 Hero with Quick Quote Form

### Purpose

Explain the business and convert intent immediately.

### Mobile priority order

1. Trust eyebrow
2. Headline
3. Supporting sentence
4. Quote-start form
5. Contact alternatives
6. Compact proof points

### Recommended eyebrow

`Licensed & insured removals across the Costa Blanca`

### Recommended headline direction

`Removals, storage and specialist lifting without the usual moving-day chaos.`

Alternative, more search-focused direction:

`Costa Blanca removals, secure storage and UK–Spain relocations.`

The final headline should balance service clarity with brand personality. It must not attempt to list every location and service in one breath.

### Supporting copy

One short paragraph explaining the four service pillars and geographic area. Maximum two or three short lines on mobile.

### Hero image

- Use a real Mr Move fleet, team, storage, or active-job photograph
- Image should support the text, not make form fields difficult to read
- Mobile may use a top image with a dark gradient or a contained image below the form
- Avoid hiding important subjects behind text
- Do not use a slideshow in the hero

### Quick quote fields

Required first-step fields:

- Moving from
- Moving to
- Approximate date
- Phone or WhatsApp number

Optional field to test later:

- Service type selector

### Primary button

`Start My Quote`

Alternative:

`Get My Free Quote`

Avoid vague labels such as `Submit` or `Continue` when no context is visible.

### Contact alternatives

Directly below the form:

- `Call Mr Move`
- `WhatsApp Us`

### Compact proof row

Use no more than three or four proof points:

- 15+ years' experience
- Licensed and insured
- Costa Blanca based
- UK–Spain service

These should remain concise and readable rather than becoming tiny decorative labels.

### UX requirements

- Inputs minimum 48px high
- Input text minimum 16px on mobile
- Correct input modes for phone and date
- Labels must remain visible
- Errors displayed beside or immediately below the affected field
- No CAPTCHA challenge before the visitor submits unless abuse requires it
- Form should fit within a reasonable first-screen journey without becoming cramped

---

## 5.3 Google Reviews and Credentials Strip

### Purpose

Answer the visitor's immediate question: "Are these people trustworthy?"

### Recommended content

- Google star rating
- Number of reviews
- Link to read reviews
- Licensed
- Insured
- VAT registered, if confirmed and useful

### Mobile layout

- Review summary as the dominant item
- Credentials displayed as compact supporting badges beneath or beside it
- Avoid horizontally squeezing five tiny items into one row

### Content rule

All rating values and review counts must come from a reliable current source. Do not hardcode values that will quietly become stale and embarrassing.

---

## 5.4 Four Service Pillars

### Section heading

`What do you need help with?`

### Purpose

Help visitors self-select quickly and establish the business as four equally important service areas.

### Cards

1. Local Removals
2. UK–Spain / Spain–UK
3. Secure Storage in Catral
4. Crane & Specialist Lifting

### Card anatomy

- Real image
- Service title
- One-sentence explanation
- One relevant proof point
- Clear link: `Explore [service]`

### Mobile layout

- One card per row
- Optional horizontal card pattern only if usability testing shows clear swipe affordance
- Do not hide essential services in a carousel by default

### Desktop layout

- Four-column grid where space permits
- Two-by-two grid is acceptable if images require more breathing room

### Content rule

The four pillars are equal at the navigation level. Crane and UK–Spain may receive stronger visual proof because they are differentiators, but storage and local removals must not look secondary.

---

## 5.5 Latest Moves

### Purpose

Show recent real activity and turn Facebook consistency into website trust.

### Section heading

`Latest Moves`

Alternative:

`Recent Jobs Across the Costa Blanca`

### Card anatomy

- Real photograph
- Short title or move type
- Location, where appropriate and privacy-safe
- One- or two-sentence caption
- Date or relative recency
- Link to original Facebook post where available

### Recommended examples

- Jacuzzi crane lift to a terrace
- Apartment move with difficult access
- Storage collection in Catral
- UK–Spain delivery
- Full local house move

### Mobile layout

- One main featured card followed by two smaller cards
- Or vertically stacked cards
- Do not require Facebook to load before the section becomes usable

### Technical requirement

Content should be cached or imported. If Facebook access fails, the section should retain the last successful content or display manually curated posts.

---

## 5.6 Why Mr Move

### Purpose

Explain why the visitor should choose Mr Move without resorting to vague claims or childish competitor bashing.

### Recommended heading

`A moving company built for the awkward parts`

### Differentiators

- Local Costa Blanca knowledge
- UK–Spain capability
- Secure Catral storage
- Crane and difficult-access capability
- One team across moving, lifting, and storage
- Real communication through phone and WhatsApp

### Layout

- Mobile: short stacked evidence blocks
- Desktop: split layout with image and evidence grid

### Proof requirement

Each differentiator should be supported by a real image, review, credential, process detail, or case example where possible.

---

## 5.7 UK–Spain Spotlight

### Purpose

Promote a major revenue service and reassure international customers.

### Content

- Both travel directions clearly stated
- Full and part-load options only if genuinely offered
- Planning and customs support wording kept accurate
- Communication expectations
- Collection and delivery process
- Relevant testimonial or recent move

### CTA

`Plan a UK–Spain Move`

### Secondary CTA

`WhatsApp About My Move`

### Image

Real loading, vehicle, customer delivery, or route-relevant image.

---

## 5.8 Secure Storage in Catral Spotlight

### Purpose

Position storage as a core standalone service.

### Content

- Facility located in Catral
- Short- and long-term storage
- Collection and redelivery
- Suitable use cases
- Security and insurance wording, verified before publication
- Access arrangements explained clearly

### CTA

`Ask About Storage`

### Image priority

Real external and internal storage photographs.

### UX note

Visitors looking for storage may not be moving immediately. The language should not force every enquiry into a house-move framing.

---

## 5.9 Crane and Specialist Lifting Spotlight

### Purpose

Demonstrate a strong differentiator visually.

### Content

- Sofas
- Jacuzzis
- Large furniture
- Upper-floor apartments
- Balconies and terraces
- Difficult or impossible stair access

### CTA

`Discuss a Difficult Lift`

### Visual treatment

Use a strong real-job image, ideally showing the lift in progress. A sequence of two or three images may be useful if it tells a clear story.

### Safety wording

Do not make unverified technical safety claims. Explain that jobs are assessed and planned before lifting.

---

## 5.10 Local Removals Spotlight

### Purpose

Ensure the broad everyday service remains clear and approachable.

### Content

- Homes and apartments
- Small and large moves
- Man-and-van where appropriate
- Offices where offered
- Costa Blanca service area
- Difficult-access experience

### CTA

`Get a Local Moving Quote`

### Supporting proof

Local review, team image, van image, or completed-move example.

---

## 5.11 How It Works

### Purpose

Reduce uncertainty after the visitor considers making contact.

### Recommended steps

1. Tell us what you need
2. We review the move or arrange a survey
3. You receive a clear quote and plan
4. Mr Move handles the move, storage, or lift

### Mobile layout

- Vertical numbered sequence
- Short copy
- Avoid complicated animated timelines

### Supporting reassurance

Explain likely response time once confirmed by the business.

---

## 5.12 Reviews Section

### Purpose

Provide deeper social proof after service consideration.

### Content strategy

- Three to six selected reviews
- Match reviews to services where possible
- Use genuine names or initials according to platform rules
- Link to full Google review profile

### Mobile layout

- Stacked cards
- No auto-rotating testimonial carousel

### Review categories to prioritise

- Reliability and communication
- UK–Spain moves
- Storage
- Crane or difficult access
- Careful handling

---

## 5.13 FAQ

### Purpose

Resolve common objections without bloating earlier sections.

### Initial topics

- Areas covered
- Spain–UK and UK–Spain service
- Insurance
- Storage duration
- Collection and redelivery
- Crane suitability
- Difficult access
- Quote process
- Packing services
- How quickly Mr Move responds

### UX

- Accessible accordion
- Only one answer needs to open at a time on mobile
- Deep links may be considered later
- FAQ copy must match actual policy and service capability

---

## 5.14 Full Quote Form

### Purpose

Capture visitors who have read further or need to provide complex details.

### Relationship to hero form

The full form is stage two of the same quote journey. Data entered in the hero should be preserved and prefilled.

### Recommended fields

- Name
- Email
- Phone / WhatsApp
- Service type
- Moving from
- Moving to
- Approximate date
- Property type
- Property size or rough inventory
- Floor and lift access
- Storage requirement
- Packing requirement
- Crane or access concern
- Message
- Optional photographs
- Consent confirmation

### Progressive behaviour

Fields should appear based on selected service where practical.

Examples:

- Storage enquiry should ask about approximate volume, storage duration, collection, and redelivery.
- Crane enquiry should ask about item, floor, balcony or terrace, access, and photographs.
- UK–Spain enquiry should ask route, dates, volume, and collection flexibility.

### Submission states

- Loading
- Success
- Validation failure
- Server failure
- Fallback contact actions

### Success message

Must state:

- Enquiry received
- Expected response timing
- Phone and WhatsApp alternatives for urgent matters
- Confirmation email status if implemented

---

## 5.15 Footer

### Content

- Logo and short company description
- Phone
- WhatsApp
- Email
- Service links
- Social links
- Privacy policy
- Cookie information where required
- Company and registration details where appropriate

### Mobile layout

Stacked groups with clear spacing. Do not compress everything into miniature columns.

---

## 5.16 Mobile Sticky CTA Bar

### Purpose

Keep high-intent actions available throughout the page.

### Actions

- Call
- WhatsApp
- Quote

### Behaviour

- Visible on mobile after the hero or throughout, depending on visual testing
- Must respect safe-area insets
- Must not cover form controls or footer content
- Primary visual emphasis on Quote, while Call and WhatsApp remain obvious
- Consider reducing to two actions when the on-screen keyboard is active

---

## 6. Quote Flow Wireframe

## Step One: Quick Start

```text
┌──────────────────────────────────────┐
│ Start your quote                     │
│                                      │
│ Moving from                          │
│ [Town / postcode / country]          │
│                                      │
│ Moving to                            │
│ [Town / postcode / country]          │
│                                      │
│ Approximate date                     │
│ [Date / flexible]                    │
│                                      │
│ Phone or WhatsApp                    │
│ [Number]                             │
│                                      │
│ [Start My Quote]                     │
│                                      │
│ Or call / WhatsApp us                │
└──────────────────────────────────────┘
```

## Step Two: Service Details

```text
┌──────────────────────────────────────┐
│ Tell us a little more                │
│ Progress: Step 2 of 2                │
│                                      │
│ What do you need?                    │
│ [Local] [UK–Spain] [Storage] [Crane] │
│                                      │
│ Conditional service fields           │
│                                      │
│ Name                                 │
│ Email                                │
│ Message / extra details              │
│ Photos (optional)                    │
│ Privacy consent                      │
│                                      │
│ [Send My Quote Request]              │
└──────────────────────────────────────┘
```

### Step transition

Preferred options:

1. Expand inline beneath the hero form, or
2. Open a focused full-screen mobile form panel

A separate page is acceptable if it preserves all step-one data and avoids a jarring transition.

### Recommendation

Use an inline expansion or focused panel in the first prototype. This keeps momentum and avoids forcing the user into a visibly different environment.

---

## 7. Desktop Adaptation

Mobile hierarchy remains the source of truth.

### Hero

- Two-column layout
- Left: headline, supporting copy, trust
- Right: quote form
- Real image integrated as background or supporting panel

### Four pillars

- Four-column or two-by-two grid

### Spotlight sections

- Alternating image and content split layouts
- Avoid repetitive left-right zigzag purely for decoration

### Latest Moves

- One featured card plus smaller supporting cards

### Full quote form

- Two-column field layout where logical
- Maintain readable grouping and labels

---

## 8. Design System Components Required

- Header
- Mobile navigation drawer
- Primary button
- Secondary button
- Text-link CTA
- Form input
- Select
- Date input
- Textarea
- Checkbox
- Radio-card service selector
- Inline error
- Form alert
- Progress indicator
- Review summary
- Credential badge
- Service card
- Latest Move card
- Evidence block
- Process step
- Review card
- FAQ accordion
- Mobile sticky CTA bar
- Footer link group

All components need default, hover, focus, active, disabled, loading, error, and success states where relevant.

---

## 9. Analytics Events

The prototype and build should support the following events:

- `hero_quote_start`
- `hero_quote_step_1_complete`
- `quote_submit_success`
- `quote_submit_error`
- `call_click`
- `whatsapp_click`
- `service_card_click`
- `google_reviews_click`
- `facebook_post_click`
- `faq_open`
- `photo_upload_start`

Events should include page, device category, and selected service where available, without collecting unnecessary personal data.

---

## 10. Content and Asset Requirements

### Needed before final visual design

- Current Google rating and review count
- Selected genuine reviews
- Confirmed licensing and insurance wording
- Confirmed storage security and access details
- Confirmed UK–Spain service details
- Real storage photographs from Catral
- Real crane-job photographs
- Real local-removal photographs
- Real UK–Spain move photographs
- Team and fleet photographs
- Facebook page details and access feasibility
- Privacy-policy content
- Expected response time

### Placeholder policy

Existing photos may be used during wireframing and prototyping. Every placeholder should be labelled in design notes so it is not accidentally mistaken for final approved content, a fate remarkably common in web projects.

---

## 11. Acceptance Criteria for Wireframe Sign-Off

The homepage wireframe is ready for visual design when:

- The four service pillars are equally clear
- The hero contains a usable short quote-start form
- Call and WhatsApp are immediately accessible
- Google reviews and credentials appear near the top
- Storage is correctly identified as being in Catral
- Latest Moves has a defined fallback strategy
- Every section has one clear purpose
- Mobile navigation and sticky actions are defined
- The quote flow preserves step-one data
- Form errors and success states are specified
- No public price estimator appears
- The page does not rely on stock photography
- The homepage is not overloaded with unnecessary content

---

## 12. Recommended Next Deliverable

Create a low-fidelity visual prototype based on this specification at two viewport widths:

1. Mobile: 390px wide
2. Desktop: 1440px wide

The mobile prototype should be designed first and approved before desktop polish. The prototype should cover:

- Header
- Hero quote form
- Reviews strip
- Four pillars
- Latest Moves
- One representative spotlight section
- Full quote-form interaction
- Sticky mobile CTA

After approval, the remaining sections can use the established component system rather than being designed as unrelated one-off blocks.
