export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BuildItFast",
          "url": "https://builditfast.ai",
          "logo": "https://builditfast.ai/icon.svg",
          "description": "AI-powered MVP development in 2-4 weeks from $5,000",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Ukraine"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "sales@builditfast.ai",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://twitter.com/builditfast",
            "https://linkedin.com/company/builditfast"
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "5000",
            "highPrice": "25000",
            "offerCount": "3"
          }
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
            "name": "BuildItFast"
          },
          "areaServed": {
            "@type": "Country",
            "name": ["United States", "Ukraine", "European Union"]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "MVP Development Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Quick MVP",
                  "description": "Web application with up to 10 screen designs, basic authentication, and deployment. Perfect for idea validation."
                },
                "price": "5000",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full MVP",
                  "description": "Web + Mobile (PWA) with UI/UX design, payment system, user dashboard, testing, and CI/CD. Perfect for market launch."
                },
                "price": "15000",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Advanced MVP",
                  "description": "Web + Native Mobile with complete design system, admin panel, API integrations, full testing, and DevOps. Perfect for SaaS platforms."
                },
                "price": "25000",
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

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "BuildItFast",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Ukraine"
          },
          "priceRange": "$5,000 - $25,000"
        })
      }}
    />
  );
}
