# JDL Industries - Shopify Store

Shopify storefront for [JDL Industries](https://jdlindustries.com), a master distributor of aviation, military, and marine supplies. This is a customization of Shopify's [Trade](https://themes.shopify.com/themes/trade/styles/default) theme, with v15.4.1 as the base.

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)

## Setup

```bash
npm install
npm run build:css
```

## Development

Run the Tailwind watcher and Shopify dev server in separate terminals:

```bash
npm run dev:css
```

```bash
shopify theme dev --store=jdl-industries-inc-aviation.myshopify.com
```

The watcher recompiles `assets/site.css` whenever Liquid files change.

## Deployment

Build the production CSS, then push:

```bash
npm run build:css
shopify theme push
```

## Using Tailwind in Liquid

All Tailwind classes must be prefixed with `tw-`. Tailwind's CSS reset (preflight) is disabled so it won't interfere with Trade's built-in styles. Standard Tailwind utilities all work — just add the prefix:

```liquid
<div class="tw-flex tw-items-center tw-gap-4 tw-p-6">
  <h2 class="tw-text-2xl tw-font-bold">Hello</h2>
</div>
```

### Theme-aware utilities

The Tailwind config maps Trade's CSS custom properties so that custom code respects theme editor settings. These update automatically when a merchant changes colors, fonts, or spacing in the Shopify theme editor.

**Colors** — based on the active color scheme:

| Utility example | What it maps to |
|---|---|
| `tw-bg-theme-bg` | Background color |
| `tw-text-theme-fg` | Foreground/text color |
| `tw-bg-theme-button` | Primary button background |
| `tw-text-theme-button-text` | Primary button text |
| `tw-bg-theme-secondary-button` | Secondary button background |
| `tw-text-theme-secondary-button-text` | Secondary button text |
| `tw-text-theme-link` | Link color |
| `tw-bg-theme-bg-contrast` | Contrast background |

Alpha modifiers work: `tw-bg-theme-fg/10` gives foreground color at 10% opacity.

**Fonts:**

| Utility | What it maps to |
|---|---|
| `tw-font-heading` | Heading font family |
| `tw-font-body` | Body font family |

**Border radius** — matches theme component rounding:

| Utility | What it maps to |
|---|---|
| `tw-rounded-buttons` | Button radius |
| `tw-rounded-inputs` | Input radius |
| `tw-rounded-badge` | Badge radius |
| `tw-rounded-media` | Media radius |

**Spacing** — matches theme layout settings:

| Utility example | What it maps to |
|---|---|
| `tw-p-grid-desktop-h` | Desktop horizontal grid spacing |
| `tw-gap-grid-desktop-v` | Desktop vertical grid spacing |
| `tw-p-grid-mobile-h` | Mobile horizontal grid spacing |
| `tw-gap-section-desktop` | Desktop section spacing |
| `tw-max-w-page` | Page max width |

### Mixing with Trade classes

Tailwind classes can be used alongside Trade's existing classes without conflict:

```liquid
<div class="page-width tw-py-8 tw-flex tw-justify-between">
  <button class="button tw-bg-theme-button tw-rounded-buttons">
    Shop Now
  </button>
</div>
```

See `tailwind.config.js` for the full list of mapped theme values.
