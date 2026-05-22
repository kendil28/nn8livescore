---
name: Arena Prime
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c90a0'
  outline-variant: '#424754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#508dff'
  on-primary-container: '#00275e'
  inverse-primary: '#0059c5'
  secondary: '#ffb3ae'
  on-secondary: '#68000b'
  secondary-container: '#ad031a'
  on-secondary-container: '#ffb8b2'
  tertiary: '#ffb68b'
  on-tertiary: '#522300'
  tertiary-container: '#e47011'
  on-tertiary-container: '#481e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930014'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68b'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#753400'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 16px
  margin-mobile: 12px
  margin-desktop: 24px
  stack-tight: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for high-performance sports data visualization, prioritizing information density, speed of scanning, and technical precision. The brand personality is authoritative and athletic, catering to a dedicated audience of sports enthusiasts and bettors who require real-time updates and deep statistical insights.

The visual style is **Corporate Modern with a "Pro-Dark" aesthetic**. It utilizes a layered dark interface to reduce eye strain during extended night viewing while employing high-contrast accents to signal live events and interactive elements. The aesthetic relies on a rigid grid, subtle containment, and a "dashboard" feel that conveys reliability and real-time responsiveness.

## Colors

The palette is anchored in a triple-layered dark theme. The base layer is a deep charcoal (#121212), while elevated cards and containers use a slightly lighter #1E1E1E to create subtle depth. 

- **Primary Blue:** Used for active states, navigation underlines, links, and primary actions. It represents the "logic" of the application.
- **Signal Red:** Strictly reserved for "Live" indicators and critical real-time alerts.
- **Typography:** Pure white is used for headings and critical data. Mid-grays are used for labels and secondary information to maintain a clear visual hierarchy in data-heavy views.

## Typography

This design system uses **Inter** exclusively to ensure maximum legibility at small sizes, which is critical for dense tabular data and sports brackets. 

The hierarchy is "flat" but utilizes weight heavily to distinguish between team names, scores, and timestamps. Uppercase transformations are used for category labels (e.g., "LIVE", "UPCOMING") to create a distinction between structural metadata and content. Tabular numerals should be used where possible to ensure that columns of scores and statistics align perfectly for easier comparison.

## Layout & Spacing

The system employs a **Fixed Grid** approach for desktop, centering a content column of 1280px to maintain focus, while utilizing a **Fluid Grid** for mobile devices. 

- **Density:** The design is purposefully dense. Vertical spacing between list items (like match rows) is kept to a minimum (4px - 8px) to allow as many data points as possible "above the fold."
- **Margins:** Large lateral margins on desktop provide breathing room for the dark UI, while mobile utilizes tight 12px margins to maximize screen real estate.
- **Grid:** A standard 12-column system is used for desktop layouts, typically split into a main content area (8-9 columns) and a sidebar for rankings/promotions (3-4 columns).

## Elevation & Depth

Depth is conveyed through **Tonal Layers** rather than shadows. In a dark sports interface, shadows can appear muddy, so this system uses color shifts to indicate hierarchy:

1.  **Level 0 (Background):** #121212 - The canvas.
2.  **Level 1 (Cards/Containers):** #1E1E1E - Used for match lists, news feeds, and widgets.
3.  **Level 2 (In-Card Accents/Inputs):** #2A2A2A - Used for search bars and nested sections within cards.
4.  **Stroke:** Subtle 1px borders (#333333) are used on cards to define boundaries where tonal shifts are insufficient.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern touch without sacrificing the professional, "engineered" feel of a data-heavy application. 

- **Primary Components:** Buttons and input fields use a 4px radius.
- **Structural Elements:** Main content cards use an 8px radius (rounded-lg) to clearly group related information.
- **Avatars/Logos:** Team crests and player photos are strictly circular to contrast against the rigid rectangular grid of statistics.

## Components

### Buttons & Controls
- **Primary Button:** Solid primary blue with white text. High contrast, 4px corner radius.
- **Filter Chips:** Pill-shaped backgrounds (#2A2A2A) with white text. Active state uses primary blue background.
- **Segmented Control:** A dark container with a subtle background highlight behind the active tab.

### Data Display
- **Match Row:** A horizontal component with team logos on the left/right and the score/time centered. High-density padding (8px).
- **Stat Bars:** Horizontal bar charts within cards to show possession or shooting percentages, using primary blue vs. secondary gray.
- **Status Indicators:** A small "Live" badge with a pulsing red background.

### Inputs
- **Search Bar:** Integrated into the global header. Darker than the header background with a subtle gray stroke. Uses a magnifying glass icon and "Cmd+K" style keyboard hint.

### Cards
- **Widget Cards:** Titled containers with a header row (often containing an icon and a "View More" link) and a body containing lists or charts.