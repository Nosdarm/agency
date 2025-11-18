"use client";

import { motion } from "framer-motion";
import { ClientPriceCard } from "./ClientPriceCard";

const packages = [
  {
    name: "Quick MVP",
    price: "$5,000",
    timeframe: "1-2 weeks",
    features: [
      "Web application",
      "Up to 10 screen designs",
      "Basic authentication",
      "Deployment",
      "Source code included",
    ],
    perfectFor: "Perfect for: idea validation, first prototype",
  },
  {
    name: "Full MVP",
    price: "$15,000",
    timeframe: "3-4 weeks",
    badge: "Most Popular",
    features: [
      "Web + Mobile (PWA)",
      "UI/UX design",
      "Payment system integration",
      "User dashboard",
      "Testing & CI/CD",
    ],
    perfectFor: "Perfect for: market launch, first customers",
    highlight: true,
  },
  {
    name: "Advanced MVP",
    price: "$25,000",
    timeframe: "5-8 weeks",
    features: [
      "Web + Native Mobile",
      "Complete design system",
      "Admin panel",
      "API & integrations",
      "Full testing & DevOps",
    ],
    perfectFor: "Perfect for: SaaS platforms, marketplaces",
  },
];

export function AnimatedPricing() {
  return (
    <motion.div
      className="mt-12 grid lg:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {packages.map((p) => (
        <motion.div
          key={p.name}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <ClientPriceCard
            name={p.name}
            price={p.price}
            timeframe={p.timeframe}
            features={p.features}
            highlight={(p as any).highlight || false}
            badge={(p as any).badge}
            perfectFor={p.perfectFor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
