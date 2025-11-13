export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AICODE Studio",
          "url": "https://yourstudio.dev",
          "logo": "https://yourstudio.dev/logo.png",
          "description": "Разработка MVP с AI-ускорением для стартапов. Фикс-прайс от $5,900, сроки 3-5 недель",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "UA",
            "addressRegion": "Kharkiv"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "sales@yourstudio.dev",
            "availableLanguage": ["Russian", "English", "Ukrainian"]
          },
          "sameAs": [
            "https://linkedin.com/company/yourstudio",
            "https://github.com/yourstudio"
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
            "name": "AICODE Studio"
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
                  "name": "MVP Core",
                  "description": "Базовая разработка MVP с аутентификацией и 3-5 CRUD сущностями"
                },
                "price": "5900",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "MVP Plus",
                  "description": "Расширенный пакет MVP с дополнительными интеграциями"
                },
                "price": "7900",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Booster",
                  "description": "LLM-фича в существующий продукт с чатом, саммари и кластеризацией"
                },
                "price": "3000",
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
              "name": "Главная",
              "item": "https://yourstudio.dev"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Разработка MVP",
              "item": "https://yourstudio.dev/#pricing"
            }
          ]
        })
      }}
    />
  );
}
