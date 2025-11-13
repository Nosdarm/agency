export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BuildItFast.ai",
          "url": "https://builditfast.ai",
          "logo": "https://builditfast.ai/logo.png",
          "description": "Launch production-ready MVPs in 21 days. Fixed price from $15,000. We build SaaS platforms, mobile apps, and web applications that scale.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "hello@builditfast.ai",
            "availableLanguage": ["English", "Russian", "Ukrainian"]
          },
          "sameAs": [
            "https://t.me/builditfast",
            "https://github.com/builditfast"
          ]
        })
      }}
    />
  );
}

export function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "MVP Development",
          "provider": {
            "@type": "Organization",
            "name": "BuildItFast.ai"
          },
          "areaServed": {
            "@type": "Country",
            "name": ["United States", "Canada", "United Kingdom", "European Union"]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "MVP Development Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Startup MVP",
                  "description": "Up to 10 key features, Web OR Mobile, basic analytics, 2-3 weeks development, 30 days support"
                },
                "priceRange": "$15000-$25000",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Scale-Ready Platform",
                  "description": "Up to 20 features, Web + Mobile, payments & subscriptions, admin panel, 3-5 weeks development, 60 days support"
                },
                "priceRange": "$25000-$45000",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Enterprise Foundation",
                  "description": "Unlimited scope, multi-platform, integrations & API, compliance ready, 4-8 weeks, 90 days support"
                },
                "price": "45000",
                "priceCurrency": "USD"
              }
            ]
          }
        })
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })
      }}
    />
  );
}

export function BreadcrumbSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://builditfast.ai"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "MVP Development",
              "item": "https://builditfast.ai/#pricing"
            }
          ]
        })
      }}
    />
  );
}
