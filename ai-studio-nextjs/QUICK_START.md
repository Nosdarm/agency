# Quick Start Guide

Get your SEO-optimized landing page running in 10 minutes!

## Step 1: Install & Run (2 minutes)

```bash
cd ai-studio-nextjs
npm install
npm run dev
```

Open http://localhost:3000 - you should see your landing page!

## Step 2: Update Your Information (5 minutes)

### A. Find & Replace Domain

**Option 1 - Windows PowerShell:**
```powershell
Get-ChildItem -Recurse -Include *.tsx,*.ts,*.txt | ForEach-Object {
  (Get-Content $_) -replace 'yourstudio.dev', 'YOUR-DOMAIN.com' | Set-Content $_
}
```

**Option 2 - Manual:**
Open each file and replace `yourstudio.dev` with your domain:
- `app/layout.tsx`
- `app/structured-data.tsx`
- `app/sitemap.ts`
- `public/robots.txt`

### B. Update Contact Email

Open `app/page.tsx` and find line 304:
```typescript
const to = "sales@yourstudio.dev";
```
Change to:
```typescript
const to = "sales@YOUR-DOMAIN.com";
```

Also update in `app/structured-data.tsx` line 16.

### C. Set Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com
NEXT_PUBLIC_CONTACT_EMAIL=sales@YOUR-DOMAIN.com
```

## Step 3: Customize Content (3 minutes)

### Update Company Name

If not "AICODE Studio", search for "AICODE Studio" and replace with your name in:
- `app/layout.tsx`
- `app/page.tsx`
- `app/structured-data.tsx`

### Update Pricing

Open `app/page.tsx`, find the `packages` array (around line 174):

```typescript
const packages = [
  {
    name: "MVP Core",
    price: "$5,900",  // ← Change price
    features: [
      "Feature 1",    // ← Change features
      "Feature 2",
    ],
  },
  // ...
];
```

### Update Social Links

`app/structured-data.tsx` (line 22):
```typescript
"sameAs": [
  "https://linkedin.com/company/YOUR-COMPANY",
  "https://github.com/YOUR-COMPANY"
]
```

## Step 4: Test Build

```bash
npm run build
npm start
```

If build succeeds, you're ready to deploy!

## Step 5: Deploy (Choose One)

### Option A: Vercel (Easiest - Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Add environment variables from `.env.local`
6. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Option B: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Deploy

### Option C: Your Own Server

```bash
# Build
npm run build

# Copy these to your server:
# - .next/
# - public/
# - package.json
# - node_modules/ (or run npm install on server)

# On server, run:
npm start
```

## After Deployment

### 1. Verify SEO (5 minutes)

Test your live site:

- **OpenGraph**: https://www.opengraph.xyz/
  - Paste your URL, check image appears

- **Structured Data**: https://search.google.com/test/rich-results
  - Paste your URL, should show Organization, Service, FAQ

- **Mobile**: https://search.google.com/test/mobile-friendly
  - Should pass all tests

### 2. Submit to Google (5 minutes)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify using the code in `app/layout.tsx` line 65
4. Submit sitemap: `https://YOUR-DOMAIN.com/sitemap.xml`

### 3. Create Images (30 minutes)

You need these in `/public`:

1. **favicon.ico** (32x32) - Use [favicon.io](https://favicon.io/)
2. **og-image.jpg** (1200x630) - Use [Canva](https://canva.com)
   - Template: Search "LinkedIn Post"
   - Resize to 1200x630
   - Add your logo + tagline
   - Export as JPG

Quick Canva setup:
- Create design → Custom size → 1200 x 630
- Add your logo
- Add text: "MVP Development in 3-5 weeks"
- Keep it simple!
- Download as JPG

## Common Issues

### Build fails with Tailwind error
```bash
npm install @tailwindcss/postcss
```

### Images don't show in social preview
- Image must be exactly 1200x630 pixels
- File size under 300KB
- Accessible at `https://YOUR-DOMAIN.com/og-image.jpg`
- Clear cache: https://developers.facebook.com/tools/debug/

### Site not indexed after 2 days
- Verify ownership in Google Search Console
- Submit sitemap manually
- Request indexing for main page

### Fonts not loading
- Check internet connection (fonts load from Google)
- Verify build completed successfully

## What's Included

✅ SEO Optimized
- All meta tags (title, description, keywords)
- OpenGraph for social sharing
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap & robots.txt

✅ Performance
- Server-side rendering
- Font optimization
- Image optimization ready
- Gzip compression

✅ Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

✅ Mobile-First
- Responsive design
- Touch-friendly buttons (48px min)
- No zoom on input (iOS)

## Next Steps

1. **Week 1**: Get indexed in Google
2. **Week 2**: Add blog section (see README.md)
3. **Week 3**: Create first 3 blog posts
4. **Month 2**: Start building backlinks

## File Structure

```
ai-studio-nextjs/
├── app/
│   ├── layout.tsx          # SEO metadata, fonts
│   ├── page.tsx            # Main landing page
│   ├── structured-data.tsx # JSON-LD schemas
│   ├── sitemap.ts          # Sitemap generator
│   └── globals.css         # Global styles
├── public/
│   └── robots.txt          # Crawl rules
├── .env.local              # Your environment variables
└── package.json
```

## Need More Help?

- 📖 Full documentation: `README.md`
- ✅ Detailed checklist: `SEO_CHECKLIST.md`
- 📝 Original requirements: See parent folder

## Support

Found a bug or have a question? Create an issue or check the README.md for detailed explanations.

---

**Remember:** This is a solid foundation. SEO takes time. Focus on:
1. ✅ Get the technical stuff right (you're doing this now)
2. 📝 Create valuable content (blog posts)
3. 🔗 Build authority (backlinks, testimonials)

Good luck! 🚀
