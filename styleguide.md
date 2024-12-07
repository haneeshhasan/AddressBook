# 🎨 Address Book Application Style Guide

## Table of Contents
- [Color System](#color-system)
- [Layout & Spacing](#layout--spacing)
- [Typography](#typography)
- [Components](#components)
- [Animation Guidelines](#animation-guidelines)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Implementation Notes](#implementation-notes)

## Color System

### Base Theme Variables
:root {
    /* Primary Colors */
    --primary-bg: #121212;
    --secondary-bg: #1E1E1E;
    --card-bg: #252525;
    
    /* Accent Colors */
    --accent-primary: #BB86FC;    /* Purple */
    --accent-secondary: #03DAC6;  /* Teal */
    --accent-warning: #CF6679;    /* Pink-Red */
    
    /* Text Colors */
    --text-primary: #FFFFFF;
    --text-secondary: #B3B3B3;
    --text-muted: #757575;
    
    /* Gradients */
    --gradient-1: linear-gradient(135deg, #BB86FC 0%, #03DAC6 100%);
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
}

## Layout & Spacing

### Grid System
- Maximum content width: 1200px
- Container padding: 24px (desktop), 16px (mobile)
- Use CSS Grid for main layouts
- Card container: 2 columns (desktop), 1 column (mobile)

### Spacing Scale
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-xxl: 48px;

## Typography

### Font Families
--font-primary: 'Inter', sans-serif;  /* General text */
--font-display: 'Outfit', sans-serif; /* Headings */

### Font Sizes
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 2rem;     /* 32px */

## Components

### Buttons

#### Primary Button
.btn-primary {
    background: var(--gradient-1);
    color: var(--text-primary);
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

### Cards
- Background: var(--card-bg)
- Border-radius: 12px
- Subtle gradient border
- Elevation change on hover
- Padding: var(--space-lg)

### Forms
- Floating labels
- Input glow on focus
- Validation states with colors
- Border-radius: 8px
- Full-width inputs

### Tables
- Sticky header
- Alternating row colors
- Row hover effects
- Rounded corners
- Action buttons with icons

## Animation Guidelines

### Transitions
- Duration: 200ms-300ms
- Easing: ease-in-out
- Use for:
  - Hover states
  - Focus states
  - Loading states

### Micro-interactions
- Button clicks: scale(0.98)
- Card hovers: elevation increase
- Form focus: gentle glow
- Navigation: smooth page transitions

## Responsive Design

### Breakpoints
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1200px;

### Media Queries
/* Mobile */
@media (min-width: 320px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Wide Screen */
@media (min-width: 1200px) { }

## Accessibility

### Requirements
- Text contrast ratio: minimum 4.5:1
- Focus states: clearly visible
- Touch targets: minimum 44x44px
- Proper ARIA labels
- Keyboard navigation support

### Focus States
*:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}

## Implementation Notes

### CSS Architecture
1. Use CSS custom properties for theming
2. Implement mobile-first approach
3. Use CSS Grid and Flexbox for layouts
4. Maintain consistent spacing
5. Add smooth transitions
6. Use semantic HTML
7. Implement proper focus management

### Best Practices
- Maintain consistent naming conventions
- Group related styles
- Comment complex code
- Optimize for performance
- Test across browsers
- Validate HTML/CSS

### Icons
- Library: Phosphor Icons or Remix Icons
- Default size: 24px
- Use for visual enhancement
- Include text labels where needed

### Loading States
- Skeleton loading animations
- Progress indicators with accent colors
- Minimal loading spinners
- Smooth transitions

### File Structure
styles/
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   └── tables.css
├── layouts/
│   ├── header.css
│   ├── footer.css
│   └── grid.css
└── main.css

### Important Implementation Note
> **Single File Implementation**: While the file structure above shows a modular approach, for this project all styles should be consolidated into a single `styles.css` file for simplicity. The modular structure shown above should be maintained through comments and section organization within the single file, following this pattern:

css
/ ==========================================================================
Base Styles
========================================================================== /
/ ==========================================================================
Component Styles
========================================================================== /
/
/ ==========================================================================
Layout Styles
========================================================================== /



## Example Component: Header

.header-content {
    background: var(--secondary-bg);
    padding: var(--space-lg);
    box-shadow: var(--shadow-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-content h1 {
    font-family: var(--font-display);
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: var(--text-3xl);
}

nav button {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--accent-primary);
    margin-left: var(--space-sm);
    padding: var(--space-sm) var(--space-lg);
    border-radius: 8px;
    transition: all 0.2s;
}

nav button:hover {
    background: var(--accent-primary);
    transform: translateY(-2px);
}

---

### Additional Resources
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Outfit Font](https://fonts.google.com/specimen/Outfit)
- [Phosphor Icons](https://phosphoricons.com/)
- [Remix Icons](https://remixicon.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


