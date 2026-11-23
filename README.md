# Business Landing Template

A responsive, **bilingual (English / Persian)** landing page template for agencies, studios and small businesses. Pure HTML, CSS and JavaScript — no build step, no dependencies.

**Live demo:** https://webarahq.github.io/business-landing-template/

## Features

- **English ⇄ Persian** switch with full **RTL** layout support
- **Dark mode** that follows the system setting and remembers the user's choice
- Fully responsive with a mobile menu
- Sections: hero with animated statistics, services, filterable portfolio, process, contact form
- Bilingual customer testimonials section with clearly marked demo copy to replace before publishing
- Contact form with client-side validation and accessible status messages
- Scroll reveal animations that respect `prefers-reduced-motion`
- Theming through CSS custom properties

## Getting Started

```bash
git clone https://github.com/WebAraHQ/business-landing-template.git
cd business-landing-template
```

Open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

## Customizing

| What | Where |
|---|---|
| Colors, radius, fonts | CSS variables at the top of `styles.css` |
| English text | `index.html` |
| Persian text | the `fa` object in `script.js` (keys match the `data-i18n` attributes) |
| Portfolio items | `#projects` in `index.html`; set `data-category` to match a filter |
| Contact form | the submit handler in `script.js` — connect it to your back-end or a form service |

To add a new translatable text, give the element a `data-i18n="section.key"` attribute and add the same key to the `fa` translations.

## Project Structure

```
index.html   Page markup
styles.css   Theme variables, layout and responsive rules
script.js    Language, theme, menu, filters, animations and form validation
```

## About

Developed by [WebAra](https://web-ara.com) — a software studio building web platforms, mobile apps and AI-powered products.

## License

[MIT](LICENSE) © WebAra
