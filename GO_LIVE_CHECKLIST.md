# Go Live Checklist - Replace Old olaris.co.uk Site

## Current Status
- ✅ New Next.js 15 site built and tested
- ✅ Styling working correctly
- ✅ Address updated to Aston location
- ✅ Repository: github.com/carrerasaj/olaris
- ✅ Test deployment working at Vercel preview URL

---

## Step 1: Add Environment Variables (5 minutes)

**In Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Add these variables (select **Production**, **Preview**, **Development** for each):

```env
NEXT_PUBLIC_SITE_URL=https://olaris.co.uk
NEXT_PUBLIC_SITE_NAME=Olaris Consulting Limited
NEXT_PUBLIC_GA_ID=G-BFJ8CC0RNJ
NEXT_PUBLIC_FORMSPREE_ID=mqaqazog
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dd7svdirf
NEXT_PUBLIC_TAWK_PROPERTY_ID=6805fb00f87931190c79f2dd
NEXT_PUBLIC_TAWK_WIDGET_ID=1ipblouqa
```

**After adding all variables:**
- [ ] Go to **Deployments** tab
- [ ] Click **⋯** (three dots) on latest deployment
- [ ] Click **"Redeploy"**
- [ ] Wait for build to complete (2-3 minutes)

---

## Step 2: Connect Your Domain to Vercel (10 minutes)

### In Vercel Dashboard:

1. **Navigate to** → **Settings** → **Domains**
2. **Click** "Add Domain"
3. **Enter** `olaris.co.uk`
4. **Click** "Add"

Vercel will detect if the domain is already in use and guide you through the process.

### Important: Remove Old Hosting First

If olaris.co.uk is currently hosted elsewhere (e.g., another Vercel project, Netlify, GitHub Pages, cPanel, etc.):

**Option A: If it's on another Vercel project**
- Go to the old Vercel project
- Settings → Domains
- Remove olaris.co.uk from that project
- Then add it to your new project

**Option B: If it's on different hosting (Netlify, etc.)**
- You can keep it there temporarily
- Update DNS to point to Vercel (next step)
- Old site will be replaced when DNS propagates

---

## Step 3: Update DNS Records (Required)

Go to your domain registrar (where you manage olaris.co.uk - likely GoDaddy, Namecheap, Cloudflare, etc.)

### DNS Configuration:

**Delete or update existing A/CNAME records for olaris.co.uk and www.olaris.co.uk**

**Then add these new records:**

### For Root Domain (olaris.co.uk):
```
Type: A
Name: @ (or leave blank, or "olaris.co.uk")
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

### For WWW Subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

### Notes:
- Some registrars show "@" for root domain, others show blank field
- TTL can be "Auto" or any value between 300-86400
- **DNS propagation takes 5-60 minutes** (usually 15 minutes)

---

## Step 4: Verify Deployment (5 minutes)

### After DNS Propagates:

1. **Visit** https://olaris.co.uk
   - [ ] Site loads with new design
   - [ ] All sections visible
   - [ ] Styling works correctly
   - [ ] Dark mode toggle works

2. **Check** https://www.olaris.co.uk
   - [ ] Redirects to https://olaris.co.uk

3. **Test Functionality**
   - [ ] Navigation works
   - [ ] Contact form displays
   - [ ] Mobile responsive
   - [ ] No console errors (F12 → Console)

4. **Verify SSL Certificate**
   - [ ] Padlock icon shows in browser
   - [ ] Certificate issued by Vercel

---

## Step 5: Post-Launch Tasks (Optional but Recommended)

### Immediate:
- [ ] Test contact form submission
- [ ] Verify Google Analytics tracking
- [ ] Check all links work
- [ ] Test on mobile device

### Within 24 Hours:
- [ ] Submit sitemap to Google Search Console
  - URL: https://olaris.co.uk/sitemap.xml
- [ ] Update any external links pointing to old site
- [ ] Monitor Vercel Analytics for traffic

### Within 1 Week:
- [ ] Run Lighthouse audit (target 95+ scores)
- [ ] Test page load speeds
- [ ] Verify SEO metadata in search results

---

## Rollback Plan (If Needed)

If anything goes wrong:

1. **Immediate Rollback**: Change DNS back to old hosting
2. **Vercel Issues**: Check deployment logs in Vercel dashboard
3. **DNS Issues**: Can take up to 48 hours to fully propagate (but usually 15 min)

---

## Quick Reference

**Current Deployment URL**: Check Vercel dashboard for preview URL
**GitHub Repo**: https://github.com/carrerasaj/olaris
**Branch**: main
**Latest Commit**: 7008caa (address update)

---

## Support Resources

**Vercel Documentation**: https://vercel.com/docs
**DNS Help**: https://vercel.com/docs/concepts/projects/domains
**Vercel Status**: https://www.vercel-status.com/

---

## Expected Timeline

- **Add Environment Variables**: 5 minutes
- **Redeploy**: 2-3 minutes (automatic)
- **Connect Domain in Vercel**: 2 minutes
- **Update DNS**: 5 minutes
- **DNS Propagation**: 15-60 minutes
- **Verification**: 5 minutes

**Total Time**: ~30-90 minutes (mostly waiting for DNS)

---

## What Happens During Transition

1. **Before DNS update**: Old site still live at olaris.co.uk
2. **During DNS propagation**: Some users see old site, some see new (temporary)
3. **After DNS propagation**: Everyone sees new Next.js site

**Note**: To minimize transition time, have all Vercel settings ready before updating DNS.

---

## Checklist Summary

- [ ] Environment variables added to Vercel
- [ ] Project redeployed with environment variables
- [ ] Domain added in Vercel (olaris.co.uk)
- [ ] Domain added in Vercel (www.olaris.co.uk)
- [ ] DNS A record updated (76.76.21.21)
- [ ] DNS CNAME record updated (cname.vercel-dns.com)
- [ ] Waited for DNS propagation
- [ ] Verified new site loads at olaris.co.uk
- [ ] SSL certificate active
- [ ] All functionality tested

---

**You're Ready to Go Live!** 🚀

Follow the steps above in order, and your beautiful new site will replace the old one.
