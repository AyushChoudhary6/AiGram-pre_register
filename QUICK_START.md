# AiGram Landing Page - Quick Start Guide

Get up and running in 5 minutes.

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
**Opens automatically at:** `http://localhost:5174`

### 3. Make Changes
Edit files and watch them live reload:
- Page content: Edit files in `src/components/`
- Colors/theme: Edit `src/styles/theme.css`
- Global styles: Edit `src/styles/globals.css`

---

## 🎨 Common Edits

### Change Tagline
`src/components/HeroSection/HeroSection.jsx`
```jsx
<p className="hero__tagline">Your new tagline here</p>
```

### Change Button Text
Find any `<Button>` component and update text:
```jsx
<Button variant="primary" size="lg">
  New Button Text
</Button>
```

### Change Colors
`src/styles/theme.css`
```css
--color-primary-neon: #YOUR_COLOR;
--color-accent-emerald: #YOUR_COLOR_2;
--color-bg-primary: #YOUR_BG_COLOR;
```

### Change Section Title
Each section component has a `__title` class:
```jsx
<h2 className="what-is-aigram__title">New Title</h2>
```

---

## 🚀 Build for Production

### Local Test
```bash
npm run build
npm run preview
```

### Deploy
Choose your platform:

**Vercel** (Recommended for Vite projects)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
1. Update `vite.config.js`: Add `base: '/repo-name/'`
2. Build: `npm run build`
3. Push `dist/` folder to `gh-pages` branch

**Traditional Hosting (Bluehost, GoDaddy, etc.)**
1. Run: `npm run build`
2. Upload entire `dist/` folder to hosting
3. Set root directory to `dist/` folder in hosting panel

---

## 📝 Content to Update

Before launching, customize these:

- [ ] Hero tagline & description
- [ ] Feature names and descriptions (What is AiGram section)
- [ ] Why you're different (4 value points)
- [ ] Form privacy message
- [ ] Footer copyright year (auto updates)
- [ ] Footer links (Privacy, Terms, Contact URLs)
- [ ] Replace emoji icons with real ones (optional)

---

## 🎯 Form Submission

Currently, the form is **simulated**. To make it real:

`src/components/PreRegistrationForm/PreRegistrationForm.jsx`

Replace the `handleSubmit` function:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  setLoading(true);
  
  // Replace with your API endpoint
  const response = await fetch('https://your-api.com/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  setLoading(false);
  
  if (response.ok) {
    setSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '' });
  } else {
    setError(data.message || 'Something went wrong');
  }
};
```

---

## 🔍 File Structure Quick Reference

```
src/
├── components/          ← All page sections
│   ├── HeroSection/     ← Change hero content here
│   ├── WhatIsAiGram/    ← Change features here
│   ├── Footer/          ← Change footer links here
│   └── ...other sections
├── styles/
│   ├── theme.css        ← Change colors here
│   └── globals.css      ← Global styles/animations
└── App.jsx              ← Main page structure
```

---

## 🎨 Color Palette Quick Reference

Located in `src/styles/theme.css`:

```css
--color-primary-neon: #00ff88;      /* Main green - CTAs, accents */
--color-accent-emerald: #00d999;    /* Secondary green - hover states */
--color-bg-primary: #0a0e27;        /* Dark background */
--color-text-primary: #ffffff;      /* White text */
--color-text-secondary: #a8aed9;    /* Light gray text */
```

---

## 🧪 Testing Checklist

Before launch:
- [ ] Taglines are correct
- [ ] All links work (footer, CTAs jump to form)
- [ ] Form submits correctly
- [ ] Responsive on mobile (use browser dev tools)
- [ ] All text is visible on dark background
- [ ] Buttons have proper hover states
- [ ] No console errors (F12 to check)

---

## 📊 Performance

Current build size:
- **HTML:** 0.46 KB
- **CSS:** 22.18 KB (4.28 KB gzipped)
- **JS:** 205.45 KB (64.18 KB gzipped)

**Load time:** < 1 second on decent connection

---

## 🛠️ Troubleshooting

**Dev server won't start?**
```bash
# Kill existing process
npx kill-port 5173
npm run dev
```

**Colors not updating?**
- Clear cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Or hard refresh the page

**Build fails?**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Form not working?**
- Check browser console (F12) for errors
- Verify API endpoint is correct if custom API added
- Test on different browser

---

## 📞 Support Resources

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Deploy to Vercel:** https://vercel.com/docs

---

## 🚀 Next Steps

1. **Customize content** - Update all text to match your brand
2. **Add real API** - Connect form to backend
3. **Add images** - Replace emoji with actual screenshots
4. **Test thoroughly** - Check on mobile devices
5. **Deploy** - Push to production
6. **Monitor** - Track form submissions and engagement

---

## 📈 Analytics Integration

To add Google Analytics:

`src/main.jsx`
```jsx
// Add before React render
import('https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
```

---

**Ready to launch? You've got this!** 🚀
