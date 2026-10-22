# 5 EDGE Integrated Builders Corporation — Website

A responsive static website prepared for GitHub Pages.

## Included
- `index.html` — Home, About, Services, Projects, Contact
- `styles.css` — responsive styling and brand colors
- `script.js` — mobile navigation, current year, enquiry form mailto behavior
- `assets/company-logo.jpg` — supplied company logo

## Before publishing
1. Replace `YOUR-COMPANY-EMAIL@example.com` in `script.js` with the official company email.
2. Replace the contact placeholder in `index.html` with the approved phone number, email, and business address.
3. Replace project placeholder cards with verified project details and approved images.
4. Review all company descriptions, services, and any claims before publishing.
5. Test the site on desktop and mobile.

## Preview locally
Open `index.html` in a browser. For a local web server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a GitHub repository, e.g. `5edge-website`.
2. Upload the contents of this folder (not the enclosing ZIP).
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site and open the generated URL.

## Notes
- This is a static website; no backend or database is configured.
- The enquiry form uses the visitor's email application (`mailto:`) after the official email is configured. For a server-backed form, connect a form service or backend later.
- Google Fonts are loaded externally; system fallback fonts are included.
