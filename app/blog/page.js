import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import { blogPosts } from '@/data/siteData';

export const metadata = {
  title: 'Health Blog',
  description: 'Read trusted health articles from Astera Clinic specialists on preventive care and wellness.'
};

export default function BlogPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Clinic Blog"
        title="Health guidance from our specialists"
        description="Explore practical insights and preventive care advice for urban lifestyles in Chennai."
      />
      <div className="space-y-3 sm:space-y-4">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.06} className="glass-card p-4 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">{post.date}</p>
            <h2 className="mt-1 sm:mt-2 text-lg sm:text-xl font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600">{post.excerpt}</p>
            <button className="mt-3 sm:mt-4 rounded-lg sm:rounded-full border border-slate-300 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700">
              Coming Soon
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
