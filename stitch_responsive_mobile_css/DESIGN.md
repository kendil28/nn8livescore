---
name: Velocity Dark
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c5c5d3'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8f909c'
  outline-variant: '#444651'
  surface-tint: '#b6c4ff'
  primary: '#b6c4ff'
  on-primary: '#092977'
  primary-container: '#768dde'
  on-primary-container: '#00226e'
  inverse-primary: '#425aa7'
  secondary: '#c4c6ce'
  on-secondary: '#2d3037'
  secondary-container: '#464950'
  on-secondary-container: '#b6b8c0'
  tertiary: '#c3c6d1'
  on-tertiary: '#2c3039'
  tertiary-container: '#8d919a'
  on-tertiary-container: '#262a32'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164f'
  on-primary-fixed-variant: '#28418e'
  secondary-fixed: '#e1e2ea'
  secondary-fixed-dim: '#c4c6ce'
  on-secondary-fixed: '#191c22'
  on-secondary-fixed-variant: '#44474d'
  tertiary-fixed: '#dfe2ed'
  tertiary-fixed-dim: '#c3c6d1'
  on-tertiary-fixed: '#181c23'
  on-tertiary-fixed-variant: '#43474f'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

This design system is built for high-performance sports and data-heavy environments where speed of information and visual focus are paramount. The aesthetic is rooted in **Modern Corporate** with a "Dark Mode First" philosophy, utilizing a deep, atmospheric foundation to make live data "pop."

The personality is authoritative and energetic yet precise. It avoids the clutter of traditional sports media, instead opting for a refined, card-based layout that organizes complex schedules into digestible modules. High-contrast typography and vibrant blue accents guide the user's eye to active states and primary calls to action, creating an interface that feels both professional and dynamic.

## Colors

The color palette is anchored by **Deep Navy and Pitch Black** to provide maximum contrast for data visualization. 

- **Primary (Electric Blue):** Used strictly for active states, primary buttons, and critical highlights. This specific shade is tuned for high visibility against dark backgrounds without causing eye strain.
- **Surface Tiers:** The background uses a pure neutral black (#0F1115), while containers and cards use progressive shades of navy and charcoal (#1A1D23 and #282C34) to create depth without relying on heavy shadows.
- **Accents:** Functional colors (Success/Warning/Danger) should be desaturated to fit the dark aesthetic, maintaining a "glow" effect rather than flat blocks of color.

## Typography

Typography focuses on legibility and information density. We utilize **Hanken Grotesk** for headings to provide a modern, sharp edge that feels contemporary. **Inter** handles the heavy lifting for body text and data points due to its exceptional clarity at small sizes. **JetBrains Mono** is introduced for technical labels and scores to provide a distinct, "live data" feel.

Scale usage:
- Use **Headline-LG** for page titles and major sections.
- Use **Body-MD** as the standard for all list items and description text.
- Use **Label-MD** (Mono) for timestamps, scores, and metadata to differentiate data from prose.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain the density required for sports schedules, while transitioning to a **Fluid Grid** for mobile devices.

- **Desktop:** A 12-column grid with a max-width of 1280px. Content is organized into modular cards that typically span 4 or 8 columns.
- **Spacing Rhythm:** An 8px base unit (0.5rem) governs all padding and margins. 
- **Density:** The system favors a "compact" density. Lists and data tables should use minimal vertical padding (8px-12px) to ensure as much information as possible is visible above the fold.
- **Mobile Reflow:** On mobile (<768px), all multi-column cards collapse into a single-column vertical stack with 16px side margins.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than traditional drop shadows. This creates a cleaner, more digital-native feel suitable for high-performance apps.

- **Level 0 (Base):** Pure Black (#000000) or very deep neutral. Used for the global background.
- **Level 1 (Card):** Deep Navy (#1A1D23). This is the primary surface for all content modules.
- **Level 2 (In-Card/Hover):** Lighter Navy (#282C34). Used for nested elements within cards or hover states of interactive items.
- **Outlines:** Use subtle 1px borders (#353A45) instead of shadows to define card boundaries. This maintains a "flat" but structured appearance.

## Shapes

The design system uses a **Rounded** shape language to soften the high-contrast dark theme, making the interface feel more approachable and modern.

- **Cards:** 1rem (16px) corner radius for all main containers to create a distinct "module" feel.
- **Buttons/Chips:** 0.5rem (8px) for standard interactive elements.
- **Avatar/Icons:** Use circular (pill) shapes to contrast against the rectangular grid of the card layout.

## Components

### Buttons & Navigation
- **Primary Action:** Solid Electric Blue background with white text. Use high-contrast bold typography.
- **Secondary/Ghost:** Subtle navy background with a 1px border.
- **Segmented Controls:** Used for switching between "Live," "Upcoming," and "Results." The active segment should use the Primary Blue as an underline or subtle background tint.

### Cards
- Every major content block (e.g., a match, a league table, a player profile) must be contained within a card. 
- Cards should have a 1px subtle border to separate them from the black background.

### Chips & Tags
- Use for "Live" status indicators or sport categories. Live indicators should feature a pulsing animation or a high-saturation red/green accent color.

### Input Fields
- Inputs should be dark-themed with a subtle border. On focus, the border transitions to the Primary Electric Blue with a very soft outer glow (0px 0px 8px).

### Lists
- Match lists should use a horizontal layout: [Team A Icon] [Team A Name] [Score/Time] [Team B Name] [Team B Icon]. Use the Mono font for the score area.