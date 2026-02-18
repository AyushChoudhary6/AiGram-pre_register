# AiGram Pre-Registration Landing Page

A modern, dark-themed landing page for the AiGram AI-powered learning platform. Built with React, Vite, and custom CSS with a gamified learning aesthetic.

## 🎨 Design Philosophy

**Dark, Futuristic, AI-Native**
- Deep charcoal/black gradient backgrounds
- Neon green & emerald accents
- Soft glow effects and glassmorphism
- Premium SaaS aesthetic
- Smooth animations and micro-interactions
- Gamified learning visual language

**Core Message**: "An AI system designed to help users grow skills step-by-step, not just another app."

---

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Button.css
│   │   ├── Card.jsx                # Reusable card component
│   │   └── Card.css
│   ├── HeroSection/
│   │   ├── HeroSection.jsx         # Hero banner with CTA
│   │   └── HeroSection.css
│   ├── WhatIsAiGram/
│   │   ├── WhatIsAiGram.jsx        # Feature blocks (4 features)
│   │   └── WhatIsAiGram.css
│   ├── ExperiencePreview/
│   │   ├── ExperiencePreview.jsx   # Screenshot/video showcase grid
│   │   └── ExperiencePreview.css
│   ├── WhyAiGramIsDifferent/
│   │   ├── WhyAiGramIsDifferent.jsx # Value proposition (4 points)
│   │   └── WhyAiGramIsDifferent.css
│   ├── PreRegistrationForm/
│   │   ├── PreRegistrationForm.jsx  # Form with validation & success state
│   │   └── PreRegistrationForm.css
│   └── Footer/
│       ├── Footer.jsx              # Footer with links
│       └── Footer.css
├── styles/
│   ├── theme.css                   # CSS variables (colors, spacing, etc)
│   └── globals.css                 # Global styles & animations
├── App.jsx                         # Main app wrapper
├── App.css                         # App layout styles
├── main.jsx                        # React entry point
└── index.css                       # Root element styles
```

---

## 🚀 Key Features

### **Section 1: Hero Section**
- Large, eye-catching title with neon gradient
- Compelling tagline and description
- Floating icons and decorative shapes
- Dual CTA buttons (primary + outline)
- Animated glow orbs in background

### **Section 2: What is AiGram?**
- 4 feature cards in responsive grid
- Icon + title + description per card
- Hover animations (glow, float, scale)
- Glassmorphism styling

### **Section 3: Experience Preview**
- Grid-based showcase of app screens
- Screen placeholders with emoji icons
- Hover effects on media containers
- Caption text: "Designed to feel like progress, not pressure"

### **Section 4: Why AiGram is Different**
- 4 key value propositions
- Numbered list with icons
- Hover state with slide animation
- Accent gradient line separator

### **Section 5: Pre-Registration Form**
- Full Name, Email, Phone inputs
- Real-time validation
- Success state with checkmark animation
- Privacy notice
- Form submission handling (simulated 1.5s delay)

### **Section 6: Footer**
- Brand logo & tagline
- Navigation links (Privacy, Terms, Contact)
- Auto-generated copyright year
- Minimal, clean design

---

## 🎯 Color System

All colors defined in `styles/theme.css` as CSS variables:

| Element | Color | Usage |
|---------|-------|-------|
| Primary Neon | `#00ff88` | CTAs, accents, glows |
| Accent Emerald | `#00d999` | Hover states, alternative accents |
| BG Primary | `#0a0e27` | Main background |
| BG Secondary | `#141829` | Card backgrounds |
| BG Tertiary | `#1a1f3a` | Elevated surfaces |
| Text Primary | `#ffffff` | Headings, main text |
| Text Secondary | `#a8aed9` | Body text, descriptions |
| Text Muted | `#6b7280` | Placeholders, secondary info |

---

## 📱 Responsive Design

**Mobile-First Approach**
- Breakpoints: 768px (tablet), 1200px (desktop)
- Flexible typography (clamp() functions)
- Touch-friendly form inputs (16px on mobile to prevent zoom)
- Stack layouts on mobile, side-by-side on desktop
- Adjusted animations and spacing for smaller screens

---

## ✨ Component Library

### **Button Component**
```jsx
<Button variant="primary|secondary|outline" size="sm|md|lg" fullWidth disabled>
  Click Me
</Button>
```

### **Card Component**
```jsx
<Card variant="default|glass|gradient" hoverable className="">
  Content goes here
</Card>
```

---

## 🎬 Animations

All animations defined in `styles/globals.css`:

- **fadeIn** - Opacity animation
- **slideUp** - Vertical entrance from below
- **slideInRight** - Horizontal entrance from right
- **float** - Vertical floating motion
- **glow** - Pulsing shadow/glow
- **pulse** - Opacity pulse

Transitions use CSS variables for consistency:
- `--transition-fast` (150ms)
- `--transition-normal` (300ms)
- `--transition-slow` (500ms)

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5174` with hot module replacement.

### Production Build
```bash
npm run build
```
Optimized bundle in `dist/` folder.

### Preview Build Locally
```bash
npm run preview
```

---

## 📦 Dependencies

**Core:**
- `react` (^19.2.0) - UI framework
- `react-dom` (^19.2.0) - DOM rendering
- `prop-types` - Component prop validation

**Dev:**
- `vite` (^7.3.1) - Build tool
- `@vitejs/plugin-react` - Fast refresh
- `eslint` - Code linting

---

## 🎨 Styling Architecture

### CSS Strategies
1. **CSS Variables** - Theming & consistency
2. **CSS Grid/Flexbox** - Layout
3. **CSS Animations** - Motion
4. **Glassmorphism** - Modern look
5. **Gradient Backgrounds** - Visual depth

### No Preprocessor
Pure CSS for simplicity and performance. Organized by component and section.

---

## 📋 Form Validation

The pre-registration form includes:
- Required field validation
- Email format validation
- Real-time error messages
- Success state with 5-second auto-reset
- Visual error states

---

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA roles and labels
- Focus visible states (neon green outline)
- Form labels properly associated with inputs
- High contrast text on dark backgrounds
- Keyboard navigation support

---

## 🚀 Performance

- Lightweight, no heavy dependencies
- Optimized CSS with variables
- Fast build with Vite (~775ms)
- Minimal JavaScript (React + form logic)
- CSS-driven animations (GPU accelerated)

---

## 🎯 Next Steps / Future Enhancements

1. **Backend Integration**
   - Connect form submission to API
   - Email confirmation flow
   - User database

2. **Analytics**
   - Track CTA clicks
   - Monitor form conversions
   - Page scroll tracking

3. **Dynamic Content**
   - CMS integration for text
   - Dynamic feature showcase
   - User testimonials section

4. **Internationalization (i18n)**
   - Multi-language support
   - Locale-based styling

5. **Advanced Features**
   - Video embedding in preview section
   - Testimonials carousel
   - FAQ section
   - Newsletter signup

---

## 📝 File Checklist

✅ Theme & Global Styles
✅ Shared Components (Button, Card)
✅ Hero Section
✅ What is AiGram Section
✅ Experience Preview
✅ Why AiGram is Different
✅ Pre-Registration Form (with validation)
✅ Footer
✅ App wrapper
✅ Responsive design
✅ Animations & interactions
✅ Production build verified

---

## 🤝 Contributing

This is a template landing page. Customize colors, copy, and sections in:
- `styles/theme.css` → Colors & design tokens
- Component JSX files → Content & structure
- Component CSS files → Styling & animations

---

## 📄 License

All rights reserved. AiGram © 2026.

---

**Built with** 🚀 React + Vite + Modern CSS
**Designed for** 🎯 Pre-registration conversion
**Optimized for** 📱 All devices

---

## 🎓 Learning This Codebase

**For Developers:**
1. Start in `App.jsx` to understand the page structure
2. Review `styles/theme.css` for the design system
3. Check individual components for patterns (Button, Card)
4. Inspect CSS files for animation examples
5. Test form validation in `PreRegistrationForm.jsx`

**Key Concepts:**
- Component composition
- CSS variables for theming
- Responsive design with clamp()
- Form handling with React hooks
- CSS animations & transitions
