/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',

  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json',
  ],

  corePlugins: {
    // Disable Tailwind's reset so it doesn't interfere with Trade's base styles
    preflight: false,
  },

  theme: {
    extend: {
      // ---------- Colors ----------
      // Trade defines colors as raw RGB triplets (e.g. "255,255,255")
      // and consumes them as rgb(var(--color-*)). Using the same pattern
      // here enables Tailwind's alpha modifier syntax (tw-bg-theme-bg/50).
      colors: {
        'theme-bg': 'rgb(var(--color-background) / <alpha-value>)',
        'theme-fg': 'rgb(var(--color-foreground) / <alpha-value>)',
        'theme-bg-contrast': 'rgb(var(--color-background-contrast) / <alpha-value>)',
        'theme-shadow': 'rgb(var(--color-shadow) / <alpha-value>)',
        'theme-button': 'rgb(var(--color-button) / <alpha-value>)',
        'theme-button-text': 'rgb(var(--color-button-text) / <alpha-value>)',
        'theme-secondary-button': 'rgb(var(--color-secondary-button) / <alpha-value>)',
        'theme-secondary-button-text': 'rgb(var(--color-secondary-button-text) / <alpha-value>)',
        'theme-link': 'rgb(var(--color-link) / <alpha-value>)',
        'theme-badge-fg': 'rgb(var(--color-badge-foreground) / <alpha-value>)',
        'theme-badge-bg': 'rgb(var(--color-badge-background) / <alpha-value>)',
        'theme-badge-border': 'rgb(var(--color-badge-border) / <alpha-value>)',
      },

      // ---------- Typography ----------
      fontFamily: {
        heading: 'var(--font-heading-family)',
        body: 'var(--font-body-family)',
      },

      // ---------- Border radius ----------
      borderRadius: {
        buttons: 'var(--buttons-radius)',
        inputs: 'var(--inputs-radius)',
        badge: 'var(--badge-corner-radius)',
        popup: 'var(--popup-corner-radius)',
        media: 'var(--media-radius)',
        'text-boxes': 'var(--text-boxes-radius)',
      },

      // ---------- Spacing ----------
      spacing: {
        page: 'var(--page-width)',
        'section-desktop': 'var(--spacing-sections-desktop)',
        'section-mobile': 'var(--spacing-sections-mobile)',
        'grid-desktop-v': 'var(--grid-desktop-vertical-spacing)',
        'grid-desktop-h': 'var(--grid-desktop-horizontal-spacing)',
        'grid-mobile-v': 'var(--grid-mobile-vertical-spacing)',
        'grid-mobile-h': 'var(--grid-mobile-horizontal-spacing)',
      },
    },
  },

  plugins: [],
};
