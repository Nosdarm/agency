# AICODE Studio Landing Page

SEO-optimized Next.js landing page for AICODE Studio MVP development services.

## Features

- ✅ **Server-Side Rendering (SSR)** with Next.js App Router
- ✅ **SEO Optimized** with comprehensive meta tags, OpenGraph, and Twitter Cards
- ✅ **Structured Data (JSON-LD)** for Organization, Service, and FAQ
- ✅ **Semantic HTML** with proper heading hierarchy
- ✅ **Performance Optimized** with font optimization and image support
- ✅ **Mobile-Friendly** with responsive design and touch targets
- ✅ **Accessibility** with proper ARIA labels and semantic markup
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Framer Motion** for animations

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Update the following in `.env.local`:
- `NEXT_PUBLIC_SITE_URL` - Your domain (e.g., https://yourstudio.dev)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Your contact email
- `NEXT_PUBLIC_CLUTCH_COMPANY_ID` - Your Clutch company ID (if using testimonials)

### 3. Update SEO Configuration

Before deploying, update these files with your actual information:

**`app/layout.tsx`:**
- Replace `https://yourstudio.dev` with your actual domain
- Update Google and Yandex verification codes
- Update social media handles (`@yourstudio`)

**`app/structured-data.tsx`:**
- Update organization details (address, contact info)
- Add your social media links (LinkedIn, GitHub, Clutch)

**`public/robots.txt`:**
- Update sitemap URL with your domain

**`app/sitemap.ts`:**
- Update `baseUrl` with your domain

### 4. Create Required Images

Create these images in the `public` folder:

- **`favicon.ico`** (32x32 or 16x16) - Browser tab icon
- **`icon.svg`** - Modern favicon for browsers that support SVG
- **`apple-touch-icon.png`** (180x180) - iOS home screen icon
- **`og-image.jpg`** (1200x630) - OpenGraph image for social media sharing
- **`logo.png`** - Your company logo

**Quick OG Image Creation:**
Use tools like:
- [Canva](https://www.canva.com/) - Free templates
- [Figma](https://www.figma.com/) - Design tool
- [OG Image Generator](https://og-image.vercel.app/) - Automated generation

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

## SEO Checklist

Before going live:

- [ ] Update all instances of `yourstudio.dev` with your actual domain
- [ ] Add Google Search Console verification code to `app/layout.tsx`
- [ ] Add Yandex Webmaster verification code (if targeting Russian market)
- [ ] Create and add all required images (favicon, og-image, etc.)
- [ ] Update contact email in `app/page.tsx` (line 304)
- [ ] Test meta tags with [OpenGraph Debugger](https://www.opengraph.xyz/)
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify mobile-friendliness with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)

## Next Steps for SEO

### 1. Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership using the code in `app/layout.tsx`
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 2. Create a Blog (Recommended)

For better organic traffic, create a blog:

```bash
mkdir -p app/blog/[slug]
```

See the SEO document for recommended blog topics and keywords.

### 3. Add Analytics

Install Google Analytics or Yandex Metrika:

```bash
npm install @next/third-parties
```

### 4. Monitor Performance

- Google Search Console - Track search rankings and clicks
- Google Analytics - Track user behavior
- Core Web Vitals - Monitor performance metrics

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

- **Netlify**: Similar to Vercel
- **Render**: Good for full-stack apps
- **Hetzner/DigitalOcean**: For self-hosting with Docker

## Project Structure

```
ai-studio-nextjs/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles
│   ├── structured-data.tsx  # JSON-LD schemas
│   └── sitemap.ts           # Dynamic sitemap
├── public/
│   ├── robots.txt           # Search engine directives
│   └── [images]             # Favicon, OG image, etc.
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Customization

### Colors

Update the brand gradient in `app/page.tsx`:

```typescript
const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500", // Change colors here
  ring: "ring-violet-500/40",
};
```

### Packages and Pricing

Update the `packages` array in `app/page.tsx`:

```typescript
const packages = [
  {
    name: "Your Package",
    price: "$X,XXX",
    features: ["Feature 1", "Feature 2"],
  },
  // ...
];
```

### FAQ

Update the `faqs` array in `app/page.tsx` - this also updates the FAQ structured data automatically.

## Support

For issues or questions, check the [SEO optimization document](../лендинг_ai_студии_react_tailwind.jsx) for detailed recommendations.

## License

MIT
