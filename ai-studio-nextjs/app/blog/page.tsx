import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "MVP Development Blog | BuildItFast",
  description: "Expert insights on MVP development, startup strategies, and AI-powered development. Learn how to build and launch your product faster.",
  openGraph: {
    title: "MVP Development Blog | BuildItFast",
    description: "Expert insights on MVP development and startup strategies",
    url: "https://builditfast.ai/blog",
    type: "website",
  },
};

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const blogPosts = [
  {
    slug: "how-much-does-mvp-development-cost",
    title: "How Much Does MVP Development Cost in 2025? Complete Pricing Guide",
    excerpt: "MVP development costs range from $5,000 to $150,000 depending on complexity. Learn exact pricing for web, mobile, and SaaS MVPs with detailed breakdowns and cost-saving strategies.",
    date: "2025-01-15",
    readTime: "12 min",
    category: "Pricing",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-16`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            MVP Development Blog
          </h1>
          <p className="mt-5 sm:mt-6 text-neutral-300 text-base sm:text-lg">
            Expert insights on MVP development, startup strategies, and AI-powered development
          </p>
        </div>
      </section>

      <section className={`${SECTION_CLASSES} py-16`}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.05] transition"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime} read
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-violet-300 transition">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-neutral-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
