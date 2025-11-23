# Portfolio Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import from Git"
3. Connect your GitHub account and select this repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Your site will be live with automatic HTTPS and a custom domain option

### Option 2: Vercel
1. Visit [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project" and import from GitHub
3. Vercel auto-detects Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click "Deploy"

### Option 3: GitHub Pages
1. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && npx gh-pages -d dist"
   }
   ```
2. Run: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

## Local Testing
```bash
npm run build
npx serve dist
```

## Environment Variables (Optional)
If you want the contact form to work with a backend service:
- `VITE_FORMSPREE_FORM_ID` - Your Formspree form ID
- `VITE_FORMSPREE_ENDPOINT` - Custom form endpoint

Add these in your hosting platform's environment variables section.

## Site Features
- ✅ Responsive design
- ✅ Dark/light theme toggle
- ✅ Skills showcase with icons
- ✅ Education section with coursework
- ✅ Project portfolio grid
- ✅ Gmail compose contact link
- ✅ Social media links
- ✅ Optimized build (4.97KB CSS, 200KB JS)

Your portfolio is ready to deploy! 🚀
