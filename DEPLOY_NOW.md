# 🚀 Deploy Your Olaris Website NOW - Quick Guide

Your modern Olaris website code is **ready and pushed to GitHub!** Follow these simple steps to deploy it to Vercel.

---

## ✅ What's Been Done

- [x] Modern Next.js 15 app built
- [x] All components created
- [x] Configuration files ready
- [x] Code committed to Git
- [x] **Pushed to GitHub** ✅

---

## 🎯 Deploy in 10 Minutes (3 Easy Steps)

### Step 1: Go to Vercel (2 minutes)

1. Open your browser and go to: **https://vercel.com**
2. Click **"Login"** or **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your repositories

### Step 2: Import Your Project (3 minutes)

1. Once logged in, click **"Add New..."** button (top right)
2. Select **"Project"**
3. Find and select your **"olaris"** repository
   - It should appear in the list automatically
   - If not, click "Adjust GitHub App Permissions" to grant access
4. Click **"Import"**

### Step 3: Configure & Deploy (5 minutes)

Vercel will show the deployment configuration screen:

1. **Project Name**: `olaris-consulting` (or keep default)
2. **Framework Preset**: Next.js (auto-detected ✅)
3. **Root Directory**: `./` (leave as is)
4. **Build Command**: `npm run build` (auto-filled ✅)
5. **Output Directory**: `.next` (auto-filled ✅)

**Click "Deploy"** - That's it! 🎉

Vercel will now:
- Install all dependencies
- Build your Next.js app
- Deploy to production
- Give you a live URL

---

## 📝 Add Environment Variables (While Building)

While your site is building (takes 2-3 minutes), add environment variables:

1. In Vercel dashboard, go to your project
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in left sidebar
4. Add these variables one by one:

```
NEXT_PUBLIC_SITE_URL = https://olaris.co.uk
NEXT_PUBLIC_SITE_NAME = Olaris Consulting Limited
NEXT_PUBLIC_GA_ID = G-BFJ8CC0RNJ
NEXT_PUBLIC_FORMSPREE_ID = mqaqazog
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = dd7svdirf
NEXT_PUBLIC_TAWK_PROPERTY_ID = 6805fb00f87931190c79f2dd
NEXT_PUBLIC_TAWK_WIDGET_ID = 1ipblouqa
```

**For each variable:**
- Enter **Name** (e.g., `NEXT_PUBLIC_SITE_URL`)
- Enter **Value** (e.g., `https://olaris.co.uk`)
- Select **Production**, **Preview**, **Development** (all three)
- Click **"Save"**

5. After adding all variables, go to **"Deployments"** tab
6. Click the **3 dots** next to your latest deployment
7. Click **"Redeploy"** to use the new environment variables

---

## 🌐 Add Your Custom Domain (Optional - 10 minutes)

After deployment succeeds:

1. In Vercel, go to **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter: `olaris.co.uk`
4. Click **"Add"**
5. Vercel will show you DNS records to add

### DNS Configuration

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

6. Wait 5-30 minutes for DNS propagation
7. Vercel will automatically issue SSL certificate
8. Your site will be live at `https://olaris.co.uk` 🎉

---

## ✅ Verify Your Deployment

Once deployment is complete:

### 1. Check Build Status
- In Vercel dashboard, go to **"Deployments"**
- Latest deployment should show ✅ **"Ready"**
- Click on it to see the live URL

### 2. Test Your Live Site

Visit your Vercel URL (e.g., `olaris-consulting.vercel.app`) and check:

- [ ] Homepage loads correctly
- [ ] All sections visible (Hero, About, Services, Projects, Testimonials, Contact)
- [ ] Navigation works smoothly
- [ ] Dark mode toggle functions
- [ ] Contact form opens and validates
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] Videos play in background
- [ ] No console errors (press F12 → Console tab)

### 3. Performance Check

Open Chrome DevTools:
1. Press **F12**
2. Click **"Lighthouse"** tab
3. Click **"Generate report"**
4. Target scores: **95+** across all categories

---

## 🎉 Success! What You Get

Your live site includes:

✨ **Modern Design**
- Glass morphism navigation
- Parallax video hero
- Smooth scroll animations
- Dark mode support

⚡ **High Performance**
- Next.js 15 optimizations
- Image optimization
- Code splitting
- Fast load times

🔍 **SEO Optimized**
- Structured data
- Meta tags
- Social media cards
- Sitemap auto-generated

📱 **Mobile Perfect**
- Responsive design
- Touch-friendly
- Fast on mobile

🎯 **Engagement Features**
- Interactive service cards
- Video case studies
- Contact form with validation
- Newsletter signup

---

## 🐛 Troubleshooting

### Build Fails

**Problem**: "Cannot find module"
**Solution**: This shouldn't happen as we've set everything up correctly. If it does:
1. Go to **Settings** → **General**
2. Check **Node.js Version**: Should be `20.x`
3. Check **Install Command**: Should be `npm install`
4. Click **"Redeploy"**

### Site Shows Blank Page

**Problem**: White/blank screen
**Solution**:
1. Check browser console (F12) for errors
2. Verify all environment variables are added
3. Redeploy after adding variables

### Images Not Loading

**Problem**: Images don't appear
**Solution**: Already configured! Cloudinary URLs are set in `next.config.mjs`

---

## 📊 After Deployment

### Set Up Monitoring

1. **Vercel Analytics** (Free & Automatic)
   - Go to **"Analytics"** tab in Vercel
   - View real-time visitor data
   - Monitor Core Web Vitals

2. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Add property: `olaris.co.uk`
   - Verify ownership (DNS method recommended)
   - Submit sitemap: `https://olaris.co.uk/sitemap.xml`

### Update Content

To update your site content:
1. Edit files locally in VS Code
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push origin main`
4. Vercel automatically deploys! (takes 2-3 minutes)

---

## 💡 Pro Tips

1. **Auto-Deploy**: Every push to `main` branch auto-deploys
2. **Preview Deploys**: Branches get preview URLs automatically
3. **Rollback**: Can rollback to any previous deployment instantly
4. **Analytics**: Check Vercel Analytics for visitor insights
5. **Logs**: View build/runtime logs in Vercel dashboard

---

## 🎯 Your Deployment Checklist

- [ ] Logged into Vercel with GitHub
- [ ] Imported olaris repository
- [ ] Clicked Deploy (first deployment)
- [ ] Added all environment variables
- [ ] Redeployed with environment variables
- [ ] Tested live site functionality
- [ ] Added custom domain (optional)
- [ ] Configured DNS records
- [ ] Verified SSL certificate
- [ ] Ran Lighthouse audit
- [ ] Set up Google Search Console

---

## 📞 Need Help?

### Quick Commands (If Using CLI)

If you prefer command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd "/Users/alancarreras/untitled folder/olaris"
vercel --prod
```

### Resources
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Support**: Your detailed guides in the repo:
  - [SETUP_GUIDE.md](SETUP_GUIDE.md)
  - [VERCEL_DEPLOYMENT_STEPS.md](VERCEL_DEPLOYMENT_STEPS.md)

---

## 🚀 Ready to Go Live!

Your modern, high-performance Olaris website is ready to deploy. The entire process takes about 10-15 minutes.

**Start here**: https://vercel.com

---

**Built with:**
- Next.js 15
- TypeScript
- Tailwind CSS v4
- Framer Motion
- And lots of ❤️

**Generated with Claude Code**
*November 28, 2025*

---

## 🎊 After You Deploy

Share your success! Tweet us:
- @vercel - "Just deployed my new site with Next.js 15 on Vercel!"
- @nextjs - "Loving the new App Router!"

**Your new website is going to look amazing! 🌟**
