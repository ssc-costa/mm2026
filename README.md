# Mr Move Website

Static single-page website for **Mr Move Costa Blanca**, deployed on Vercel from this repository.

## Current structure

```txt
index.html          Main one-page website
api/contact.js      Vercel serverless quote form handler using Resend
privacy.html        Privacy policy for enquiry data
robots.txt          Search crawler rules
sitemap.xml         Basic sitemap
vercel.json         Security headers
.env.example        Required environment variables
```

## Contact form

The quote form posts to `/api/contact` and sends enquiries through Resend.

Required environment variable:

```txt
RESEND_API_KEY=
```

Configured sender in `api/contact.js`:

```txt
Mr Move Website <quotes@mail.mrmove.es>
```

Make sure the sending domain is verified in Resend before using this in production. Because email deliverability is apparently a ritual involving DNS runes.

## Local checks

```bash
npm install
npm run check
```

`npm run check` validates the serverless function syntax.

## Remaining homepage tasks

The main `index.html` is a large single-file build. Suggested next pass:

1. Replace external Imghippo image URLs with local `/assets/` files.
2. Fix frontend form helper text so it no longer mentions Formspree.
3. Update submit-button JavaScript to use the existing spinner instead of replacing button content.
4. Either complete the Spanish translation or remove the partial EN/ES toggle.
5. Add a visible privacy link beside the quote-form consent checkbox.
6. Confirm claims with the business owner before publishing: licensed, VAT registered, goods-in-transit cover, years of experience and any insurance amount.
7. Replace any placeholder-style testimonials with verified reviews.

## Suggested asset paths

```txt
/assets/logo-mrmove.png
/assets/hero-vans.webp
/assets/fleet-wide.webp
/assets/team-loading.webp
/assets/storage.webp
/assets/crane-access.webp
/assets/og-mrmove.jpg
```
