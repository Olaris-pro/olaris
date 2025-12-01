# Olaris Website V2 - Setup & Deployment Guide

Complete guide to get your modern Olaris website up and running.

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js 20+** installed ([Download](https://nodejs.org/))
- **npm 10+** or **pnpm 9+** package manager
- **Git** for version control
- A code editor (VS Code recommended)

Check your versions:
```bash
node --version  # Should be v20.0.0 or higher
npm --version   # Should be 10.0.0 or higher
```

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

Since we created a new package.json (package-new.json), let's use it:

```bash
# Navigate to project directory
cd "/Users/alancarreras/untitled folder/olaris"

# Backup old package.json
mv package.json package-old.json

# Use new package.json
mv package-new.json package.json

# Install dependencies
npm install
# or if you prefer pnpm (faster)
npm install -g pnpm
pnpm install
```

This will install all modern dependencies (~2-3 minutes).

### Step 2: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit with your preferred editor
nano .env.local
# or
code .env.local
```

**Required variables** (most are already configured):
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_GA_ID` - Already set (G-BFJ8CC0RNJ)
- `NEXT_PUBLIC_FORMSPREE_ID` - Already set (mqaqazog)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Already set (dd7svdirf)

**Optional variables** (add if needed):
- PostHog analytics key
- Mailchimp API credentials
- Tawk.to chat IDs (already set)

### Step 3: Start Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see your beautiful new Olaris website! 🎉

---

## 🔧 Project Structure Overview

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with fonts & SEO
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation with dark mode
│   │   └── Footer.tsx     # Footer with newsletter
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Animated hero with video
│       ├── About.tsx      # Company introduction
│       ├── Services.tsx   # Service cards
│       ├── Projects.tsx   # Case studies
│       ├── Testimonials.tsx
│       └── Contact.tsx    # Contact form
├── lib/
│   ├── utils.ts           # Utility functions
│   └── seo.ts             # SEO configuration
├── types/
│   └── index.ts           # TypeScript types
└── styles/
    └── globals.css        # Global styles & Tailwind
```

---

## 🎨 Customization Guide

### Update Content

#### 1. Hero Section
Edit `src/components/sections/Hero.tsx`:
- Change heading text
- Update statistics
- Modify CTA button text

#### 2. Services
Edit `src/components/sections/Services.tsx`:
- Update the `services` array
- Add/remove services
- Change descriptions

#### 3. Projects
Edit `src/components/sections/Projects.tsx`:
- Update the `projects` array
- Add your project videos
- Modify metrics

#### 4. Contact Information
Edit `src/lib/seo.ts`:
- Update `siteConfig` object
- Change address, phone, email

### Update Branding

#### Logo
Replace the Cloudinary URL in:
- `src/components/layout/Header.tsx` (line ~39)
- Update with your own logo URL

#### Colors
Edit `src/styles/globals.css`:
- Modify CSS variables in `:root` and `.dark`
- Change primary, secondary colors

Or use Tailwind config:
Edit `tailwind.config.ts`:
- Modify color scheme
- Change fonts

### Fonts
Current fonts: Inter (body) + Manrope (headings)

To change:
1. Edit `src/app/layout.tsx`
2. Import different fonts from `next/font/google`
3. Update `--font-inter` and `--font-manrope` variables

---

## 📦 Build for Production

### Local Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

Visit http://localhost:3000 to test.

### Build Checks
- **TypeScript**: `npm run type-check`
- **Linting**: `npm run lint`
- **Format**: `npm run format`

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the Next.js team and offers the best experience.

#### Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### Deploy via GitHub

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Modern Olaris website"
git branch -M main
git remote add origin https://github.com/carrerasaj/olaris.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - just click "Deploy"
6. Add environment variables in Vercel dashboard

#### Custom Domain on Vercel

1. Go to Project Settings > Domains
2. Add your domain: `olaris.co.uk`
3. Follow DNS instructions
4. SSL certificate auto-provisioned

**Cost**: Free for hobby projects, $20/month for Pro

---

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --build

# Deploy to production
netlify deploy --prod
```

Add `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### Option 3: Docker + Your Own Server

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t olaris-website .
docker run -p 3000:3000 olaris-website
```

---

## 🔐 Environment Variables in Production

### Vercel
1. Go to Project Settings > Environment Variables
2. Add each variable from `.env.example`
3. Set for Production, Preview, Development as needed

### Netlify
```bash
netlify env:set NEXT_PUBLIC_GA_ID "G-BFJ8CC0RNJ"
# Repeat for each variable
```

### Docker
Create `.env.production`:
```bash
docker run --env-file .env.production -p 3000:3000 olaris-website
```

---

## 📊 Analytics Setup

### Google Analytics (Already Configured)
- ID: `G-BFJ8CC0RNJ`
- Already integrated in `src/app/layout.tsx`
- Events auto-tracked

### PostHog (Optional - Privacy-Focused)

1. Sign up at [posthog.com](https://posthog.com)
2. Get your project API key
3. Add to `.env.local`:
```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
```

4. Add to `src/app/layout.tsx`:
```tsx
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://app.posthog.com'
  })
}
```

---

## 📧 Contact Form Setup

Already configured with Formspree (form ID: `mqaqazog`).

### Alternative: Custom API Route

Create `src/app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Send email via your preferred service
  // (SendGrid, Resend, Mailgun, etc.)

  return NextResponse.json({ success: true })
}
```

Update form action in `src/components/sections/Contact.tsx`.

---

## 🔍 SEO Checklist

### Pre-Launch
- [ ] Update `src/lib/seo.ts` with your metadata
- [ ] Replace OG image (`/public/og-image.jpg`)
- [ ] Generate favicons (use [realfavicongenerator.net](https://realfavicongenerator.net))
- [ ] Create `sitemap.xml` (auto-generated by Next.js)
- [ ] Verify `robots.txt`

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership
- [ ] Set up Google Analytics
- [ ] Configure Vercel Analytics
- [ ] Test Core Web Vitals

---

## 🧪 Testing

### Unit Tests (Optional)
```bash
npm run test
```

### E2E Tests (Optional)
```bash
npm run test:e2e
```

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (including hash links)
- [ ] Contact form submits successfully
- [ ] Dark mode toggle functions
- [ ] Mobile responsive
- [ ] Videos load and play
- [ ] All links work
- [ ] No console errors

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: TypeScript errors
```bash
npm run type-check
```
Fix errors in highlighted files.

**Issue**: Missing dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

**Issue**: Cloudinary images blocked
- Check `next.config.mjs` has correct domain in `remotePatterns`
- Verify Cloudinary URLs are correct

### Forms Not Submitting

**Issue**: Formspree not working
- Verify form ID in `.env.local`
- Check browser console for errors
- Ensure CORS is enabled on Formspree

---

## 📈 Performance Optimization

### Image Optimization
All images use Next.js Image component:
- Auto WebP/AVIF conversion
- Responsive sizes
- Lazy loading
- Blur placeholders

### Video Optimization
- WebM format (better compression)
- MP4 fallback
- Lazy loading
- Poster images

### Code Splitting
Next.js automatically:
- Splits code by route
- Lazy loads components
- Tree-shakes unused code

### Lighthouse Scores
Target metrics:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Run audit:
```bash
npm run build
npm run start
# Open Lighthouse in Chrome DevTools
```

---

## 🔄 Maintenance

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update all (carefully)
npm update

# Or update one by one
npm install next@latest react@latest
```

### Security Audits

```bash
npm audit
npm audit fix
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel Guides](https://vercel.com/guides)

---

## 🆘 Support

Need help?
- **Email**: alan@olaris.co.uk
- **Next.js Discord**: [discord.gg/nextjs](https://discord.gg/nextjs)
- **GitHub Issues**: Create an issue in your repo

---

## ✅ Launch Checklist

Before going live:

### Content
- [ ] All text reviewed and approved
- [ ] Images optimized and uploaded
- [ ] Videos compressed and tested
- [ ] Contact information verified
- [ ] Legal pages (Privacy Policy, Terms) added

### Technical
- [ ] Environment variables configured
- [ ] Production build successful
- [ ] All forms tested
- [ ] Analytics tracking verified
- [ ] Mobile responsiveness checked
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility audit passed
- [ ] Lighthouse score > 90

### SEO
- [ ] Meta descriptions unique per page
- [ ] OG images created
- [ ] Sitemap generated
- [ ] Google Search Console verified
- [ ] Structured data validated

### Deployment
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] 301 redirects from old URLs
- [ ] Monitoring set up
- [ ] Backup strategy in place

---

**You're ready to launch! 🚀**

*Last updated: November 28, 2025*
