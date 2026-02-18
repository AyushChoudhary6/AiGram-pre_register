# AiGram Design System & Customization Guide

Quick reference for designers and developers customizing the AiGram landing page.

## 🎨 Design Tokens

All design tokens are centralized in `src/styles/theme.css`. Update values here to instantly change the entire design.

### Color Palette

```css
/* Primary Colors */
--color-primary-neon: #00ff88;      /* Main CTA, accents */
--color-primary-dark: #12ff88;      /* Hover state variation */
--color-accent-emerald: #00d999;    /* Secondary accents */

/* Neutral Colors */
--color-bg-primary: #0a0e27;        /* Main background */
--color-bg-secondary: #141829;      /* Cards, elevated surfaces */
--color-bg-tertiary: #1a1f3a;       /* Interactive elements */
--color-text-primary: #ffffff;      /* Headings, main text */
--color-text-secondary: #a8aed9;    /* Body copy */
--color-text-muted: #6b7280;        /* Placeholder, secondary */
```

### Quick Color Changes

**To change the accent color globally:**
```css
/* In theme.css */
--color-primary-neon: #your-color;
--color-primary-dark: #your-color-variant;
--color-accent-emerald: #your-color-secondary;
```
This automatically updates:
- All CTA buttons
- Glowing effects
- Text gradients
- Hover states
- Form focus borders

### Gradients

```css
--gradient-bg: linear-gradient(135deg, #0a0e27 0%, #141829 50%, #1a1f3a 100%);
--gradient-card: linear-gradient(135deg, rgba(20, 24, 41, 0.7) 0%, rgba(26, 31, 58, 0.5) 100%);
--gradient-accent: linear-gradient(135deg, #00ff88 0%, #00d999 100%);
--gradient-text-neon: linear-gradient(135deg, #00ff88 0%, #12ff88 100%);
```

---

## 📐 Spacing System

Based on 8px base unit:

```css
--spacing-xs: 4px;      /* Tiny gaps */
--spacing-sm: 8px;      /* Small gaps */
--spacing-md: 16px;     /* Default gap */
--spacing-lg: 24px;     /* Medium gap */
--spacing-xl: 32px;     /* Large gap */
--spacing-2xl: 48px;    /* Extra large */
--spacing-3xl: 64px;    /* Massive gap */
```

**Usage:**
```css
padding: var(--spacing-lg);      /* Consistent spacing */
gap: var(--spacing-md);          /* Flex/grid gaps */
margin-bottom: var(--spacing-xl);/* Section spacing */
```

---

## 🔤 Typography System

### Font Sizes

```css
--font-size-xs: 12px;    /* Captions, small text */
--font-size-sm: 14px;    /* Labels, form text */
--font-size-base: 16px;  /* Body copy */
--font-size-lg: 18px;    /* Large body copy */
--font-size-xl: 20px;    /* Subheadings */
--font-size-2xl: 28px;   /* Section titles */
--font-size-3xl: 36px;   /* Large titles */
--font-size-4xl: 48px;   /* Page section titles */
--font-size-5xl: 64px;   /* Hero title */
```

### Line Heights

```css
--line-height-tight: 1.2;      /* Headings */
--line-height-normal: 1.5;     /* Body text */
--line-height-relaxed: 1.75;   /* Descriptions */
```

### Font Family

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                       Roboto, 'Helvetica Neue', Arial, sans-serif;
```

---

## 🎭 Shadow & Glow Effects

### Glow Shadows (Neon effect)

```css
--shadow-glow-sm: 0 0 20px rgba(0, 255, 136, 0.15);   /* Subtle glow */
--shadow-glow-md: 0 0 40px rgba(0, 255, 136, 0.25);   /* Medium glow */
--shadow-glow-lg: 0 0 80px rgba(0, 255, 136, 0.3);    /* Strong glow */
```

### Elevation Shadow

```css
--shadow-elevation: 0 10px 40px rgba(0, 0, 0, 0.3);
```

**Change glow intensity:**
```css
/* Subtle glow */
--shadow-glow-md: 0 0 30px rgba(0, 255, 136, 0.1);

/* Intense glow */
--shadow-glow-md: 0 0 50px rgba(0, 255, 136, 0.4);

/* Change glow color */
--shadow-glow-md: 0 0 40px rgba(100, 200, 255, 0.25);  /* Blue glow */
```

---

## ✨ Animation Speeds

```css
--transition-fast: 150ms ease-in-out;    /* Quick interactions */
--transition-normal: 300ms ease-in-out;  /* Standard animations */
--transition-slow: 500ms ease-in-out;    /* Entrance animations */
```

**Fine-tuning:**
```css
/* Faster feel */
--transition-normal: 200ms ease-in-out;

/* Slower, more dramatic */
--transition-slow: 800ms ease-in-out;
```

---

## 🔲 Border Radius

```css
--border-radius-sm: 8px;       /* Small elements */
--border-radius-md: 12px;      /* Medium elements */
--border-radius-lg: 16px;      /* Large elements */
--border-radius-xl: 24px;      /* Extra large */
```

**Quick roundness change:**
```css
/* Very rounded aesthetic */
--border-radius-md: 16px;
--border-radius-lg: 24px;
--border-radius-xl: 32px;

/* Sharp aesthetic */
--border-radius-md: 4px;
--border-radius-lg: 8px;
--border-radius-xl: 12px;
```

---

## 🎯 Component Customization

### Button Variants

**Primary (Main CTA)**
```css
.btn--primary {
  background: var(--gradient-accent);    /* Neon gradient */
  box-shadow: var(--shadow-glow-md);     /* Glow effect */
}
```

To change primary button:
```css
/* Make it solid instead of gradient */
.btn--primary {
  background: var(--color-primary-neon);
}

/* Add more glow */
.btn--primary:hover {
  box-shadow: var(--shadow-glow-lg);  /* Increased glow */
}
```

**Outline Variant**
```css
.btn--outline {
  border: 2px solid var(--color-primary-neon);
  color: var(--color-primary-neon);
}
```

### Button Sizes

```css
/* Size: Small */
--sm: padding: var(--spacing-sm) var(--spacing-md);

/* Size: Medium */
--md: padding: var(--spacing-md) var(--spacing-lg);

/* Size: Large */
--lg: padding: var(--spacing-lg) var(--spacing-xl);
```

To add extra-large button:
```css
.btn--xl {
  padding: var(--spacing-xl) calc(var(--spacing-xl) * 2);
  font-size: var(--font-size-lg);
}
```

### Card Variants

**Glass (Glassmorphism)**
```css
.card--glass {
  background: rgba(20, 24, 41, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}
```

To increase blur effect:
```css
.card--glass {
  backdrop-filter: blur(30px);  /* More blurred */
}
```

---

## 🎬 Animation Keyframes

Located in `styles/globals.css`. Common animations:

```css
@keyframes fadeIn { ... }           /* Opacity entrance */
@keyframes slideUp { ... }          /* Vertical slide from bottom */
@keyframes slideInRight { ... }     /* Horizontal slide from right */
@keyframes float { ... }            /* Floating motion */
@keyframes glow { ... }             /* Pulsing shadow */
@keyframes pulse { ... }            /* Opacity pulse */
```

**Add new animation:**
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Then use it */
.element {
  animation: slideInLeft 0.6s ease-out;
}
```

---

## 📱 Responsive Breakpoints

**Mobile-first:** Start with mobile styles, then add media queries.

```css
/* Default: Mobile */
width: 100%;
font-size: 16px;

/* Tablet (768px+) */
@media (max-width: 768px) {
  width: 50%;
  font-size: 18px;
}

/* Desktop (1200px+) */
@media (max-width: 1200px) {
  width: 33%;
  font-size: 20px;
}
```

**Responsive typography (clamp):**
```css
/* Scales from 32px (mobile) to 64px (desktop) */
h1 {
  font-size: clamp(32px, 10vw, 64px);
}
```

---

## 🎨 Dark Mode Variations

To create dark/light mode toggle:

```css
/* Light Mode */
@media (prefers-color-scheme: light) {
  :root {
    --color-bg-primary: #ffffff;
    --color-text-primary: #0a0e27;
    --color-primary-neon: #0088ff;  /* Change accent for light bg */
  }
}
```

---

## 🔧 Common Customizations

### Change Primary Color Theme

```css
/* In theme.css, update: */
--color-primary-neon: #FF6B9D;      /* Purple */
--color-primary-dark: #FF4E8F;
--color-accent-emerald: #FB5581;
```

This automatically updates:
- ✅ All buttons
- ✅ All glows
- ✅ Text gradients
- ✅ Form focus states
- ✅ Hover effects

### Make It More Minimal

```css
/* Reduce glow intensity */
--shadow-glow-md: 0 0 20px rgba(0, 255, 136, 0.08);  /* Much subtler */

/* Reduce animations */
--transition-normal: 150ms ease-in-out;  /* Faster, snappier */
```

### Make It More Dramatic

```css
/* Increase glow */
--shadow-glow-lg: 0 0 100px rgba(0, 255, 136, 0.5);  /* Intense */

/* Increase animation duration */
--transition-slow: 1000ms ease-in-out;  /* Slower, more graceful */
```

### Change to Warm Colors

```css
--color-primary-neon: #FFB347;      /* Orange */
--color-primary-dark: #FF9500;
--color-accent-emerald: #FF7F50;    /* Coral tint */
```

---

## 📏 Layout Tweaks

### Increase Section Padding

```css
/* Make sections more spacious */
section {
  padding: 96px 0;  /* Instead of 64px */
}
```

### Tighter Grid on Cards

```css
.what-is-aigram__grid {
  gap: var(--spacing-md);  /* Instead of var(--spacing-lg) */
}
```

### Wider Max Content Width

```css
.container {
  max-width: 1400px;  /* Instead of 1200px */
}
```

---

## 🎯 Form Customization

### Input Styling

```css
.form-input {
  border-color: var(--color-primary-neon);  /* Change border color */
  border-radius: var(--border-radius-lg);   /* Roundness */
}

.form-input:focus {
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.25);  /* Glow on focus */
}
```

### Error State Color

```css
.form-error {
  background: rgba(255, 100, 100, 0.1);
  border: 1px solid rgba(255, 100, 100, 0.3);
  color: #ff8080;  /* Change to your error color */
}
```

---

## 💡 Pro Tips

1. **Always update `theme.css` first** - One source of truth for everything
2. **Use CSS variables** - Never hardcode colors/sizing
3. **Test on mobile** - Use browser dev tools to resize
4. **Keep animations under 500ms** - Feels snappy, not sluggish
5. **High contrast text** - White on dark passes accessibility
6. **Consistent spacing** - Use multiples of the base 8px unit

---

## 🚀 Quick Recipes

### Make Blue Accent Theme

```css
:root {
  --color-primary-neon: #00D4FF;
  --color-primary-dark: #00B4DF;
  --color-accent-emerald: #0099FF;
}
```

### Softer, Less "Neon" Feel

```css
:root {
  --color-primary-neon: #7DFFB2;      /* Softer green */
  --shadow-glow-md: 0 0 30px rgba(125, 255, 178, 0.15);  /* Subtle */
  --transition-normal: 400ms ease-in-out;  /* Slower */
}
```

### High Contrast / Accessibility Mode

```css
:root {
  --color-text-secondary: #E0E0E0;  /* Lighter secondary text */
  --shadow-glow-md: 0 0 40px rgba(0, 255, 136, 0.35);  /* More prominent */
}
```

---

**For Questions:** Review the specific component CSS file where the change is needed.
