# Deploying Olaris V2 to Vercel - Step by Step

## 🚀 Quick Deployment Guide

Since Node.js isn't available in the current environment, we'll deploy directly through Vercel's web interface or you can use your local terminal.

---

## Option 1: Deploy via Vercel Web Interface (Easiest - 10 minutes)

### Step 1: Push Code to GitHub

Open your terminal (Terminal.app on Mac) and run:

```bash
cd "/Users/alancarreras/untitled folder/olaris"

# Check current status
git statugit statuss

# Add all new files
git add .

# Commit the changes
git commit -m "feat: Modern website rebuild with Next.js 15

- Implemented Next.js 15 with App Router
- Added TypeScript throughout
- Created modern UI with Tailwind CSS v4
- Implemented Framer Motion animations
- Added SEO optimization with structured data
- Created responsive design with dark mode
- Implemented contact form with validation
- Added accessibility features (WCAG 2.1 AA)
- Performance optimized (target Lighthouse 95+)
- Created comprehensive documentation

🤖 Generated with Claude Code"

# Push to GitHub
git push origin main
```

If you get an error about upstream not set:
```bash
git push --set-upstream origin main
```

### Step 2: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New"** → **"Project"**
4. **Import** your `olaris` repository
5. Vercel will auto-detect Next.js - **just click "Deploy"**

That's it! Vercel will:
- ✅ Install dependencies automatically
- ✅ Build your Next.js app
- ✅ Deploy to production
- ✅ Give you a URL like `olaris-xyz.vercel.app`

### Step 3: Add Environment Variables

While the first build is running:

1. Go to **Project Settings** → **Environment Variables**
2. Add these variables (one by one):

```
NEXT_PUBLIC_SITE_URL = https://olaris.co.uk
NEXT_PUBLIC_SITE_NAME = Olaris Consulting Limited
NEXT_PUBLIC_GA_ID = G-BFJ8CC0RNJ
NEXT_PUBLIC_FORMSPREE_ID = mqaqazog
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = dd7svdirf
NEXT_PUBLIC_TAWK_PROPERTY_ID = 6805fb00f87931190c79f2dd
NEXT_PUBLIC_TAWK_WIDGET_ID = 1ipblouqa
```

3. Click **Save** for each
4. **Redeploy** the project to use the new variables

### Step 4: Configure Custom Domain

1. Go to **Project Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `olaris.co.uk` and `www.olaris.co.uk`
4. Follow the DNS instructions provided by Vercel

**DNS Records to add** (at your domain registrar):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Wait for DNS propagation (usually 5-30 minutes)
6. Vercel will automatically issue SSL certificate

---

## Option 2: Deploy via Vercel CLI (Advanced - 5 minutes)

If you have Node.js installed locally:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the email verification link.

### Step 3: Deploy

```bash
cd "/Users/alancarreras/untitled folder/olaris"

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Answer the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Your account
- **Link to existing project?** No (or Yes if you have one)
- **Project name?** olaris-consulting
- **Directory?** `./` (press Enter)
- **Override settings?** No (press Enter)

### Step 4: Add Environment Variables via CLI

```bash
vercel env add NEXT_PUBLIC_SITE_URL production
# Enter: https://olaris.co.uk

vercel env add NEXT_PUBLIC_GA_ID production
# Enter: G-BFJ8CC0RNJ

# Repeat for each environment variable from .env.example
```

### Step 5: Add Custom Domain

```bash
vercel domains add olaris.co.uk
vercel domains add www.olaris.co.uk
```

Follow the DNS instructions provided.

---

## Option 3: Deploy from Oracle Server

If you want to deploy from your Oracle server where Covase is hosted:

```bash
# SSH into your server
ssh opc@your-oracle-server

# Clone the repository
cd /home/opc
git clone https://github.com/carrerasaj/olaris.git
cd olaris

# Install dependencies
npm install

# Build the project
npm run build

# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel --prod
```

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [x] package.json is updated (done ✅)
- [x] tsconfig.json is configured (done ✅)
- [x] next.config.mjs exists (done ✅)
- [x] tailwind.config.ts exists (done ✅)
- [x] All components created (done ✅)
- [x] Environment variables prepared (done ✅)
- [ ] Git repository is clean
- [ ] Latest changes committed
- [ ] Changes pushed to GitHub

---

## 🔍 Verify Deployment

After deployment is complete:

### 1. Check Build Logs
- In Vercel dashboard, go to **Deployments**
- Click on the latest deployment
- Review build logs for any errors

### 2. Test the Live Site
Visit your Vercel URL and check:
- [ ] Homepage loads correctly
- [ ] All sections visible (Hero, About, Services, Projects, Testimonials, Contact)
- [ ] Navigation works
- [ ] Dark mode toggle functions
- [ ] Contact form submits
- [ ] Mobile responsive
- [ ] No console errors (F12 → Console)

### 3. Test Performance
- Open Chrome DevTools → Lighthouse
- Run audit
- Target scores: 95+ across all categories

### 4. Verify SEO
- View page source (Ctrl+U)
- Check meta tags are present
- Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 🐛 Troubleshooting

### Build Fails with "Module not found"

**Solution**: Ensure all imports use correct paths
```bash
# Check for broken imports
grep -r "from '@/" src/
```

### "Cannot find module 'next'"

**Solution**: Dependencies not installed
```bash
npm install
```

### Environment Variables Not Working

**Solution**:
1. Verify variable names start with `NEXT_PUBLIC_` for client-side
2. Redeploy after adding variables
3. Check variables are in "Production" environment

### CSS Not Loading

**Solution**:
1. Check Tailwind config is correct
2. Verify `globals.css` is imported in layout
3. Clear Vercel cache and redeploy

### Images Not Displaying

**Solution**:
1. Check `next.config.mjs` has correct remote patterns for Cloudinary
2. Verify image URLs are correct
3. Check browser console for CORS errors

---

## 📊 Post-Deployment Tasks

### 1. Set Up Monitoring

**Vercel Analytics** (Automatic):
- Go to **Analytics** tab in Vercel dashboard
- Enable if not already active

**Google Search Console**:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `olaris.co.uk`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://olaris.co.uk/sitemap.xml`

### 2. Update DNS

Point your domain to Vercel:
```
# At your domain registrar (e.g., GoDaddy, Namecheap)

A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

### 3. Test Custom Domain

After DNS propagation:
1. Visit `https://olaris.co.uk`
2. Verify SSL certificate (padlock icon)
3. Check redirect from `www` works
4. Test all functionality again

### 4. Set Up Redirects

If you have old URLs to preserve, add to `next.config.mjs`:
```javascript
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ]
}
```

---

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ Build completes without errors
- ✅ Site accessible at Vercel URL
- ✅ All pages load correctly
- ✅ Forms submit successfully
- ✅ Dark mode works
- ✅ Mobile responsive
- ✅ Lighthouse score 90+
- ✅ No console errors
- ✅ Images load properly
- ✅ Custom domain working (after DNS)
- ✅ SSL certificate active

---

## 📞 Need Help?

### Common Commands

```bash
# Check build locally
npm run build

# Run production build locally
npm run start

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# View Vercel logs
vercel logs [deployment-url]

# List Vercel projects
vercel list

# View project info
vercel inspect [deployment-url]
```

### Resources
- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Support**: support@vercel.com
- **Status**: https://www.vercel-status.com/

---

## 🚀 Quick Command Summary

```bash
# Complete deployment in one go
cd "/Users/alancarreras/untitled folder/olaris"
git add .
git commit -m "feat: Modern website rebuild with Next.js 15"
git push origin main

# Then go to vercel.com and import the project
# Or use CLI:
vercel --prod
```

---

**You're almost live! Follow Option 1 for the easiest path. The whole process should take about 10-15 minutes.** 🎉

*Last Updated: November 28, 2025*
