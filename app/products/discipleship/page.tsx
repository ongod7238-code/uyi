import { Compass } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Discipleship — Uyi-Osa Degarson', description: 'Resources and frameworks to help believers know Christ, grow in faith, and serve others.' };

export default function DiscipleshipPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Discipleship"
      title="Discipleship"
      tagline="Resources and frameworks to help believers know Christ, grow in faith, and serve others."
      description="Discipleship is the slow, sacred work of becoming like Christ. These resources are designed to help believers know Him, grow in faith, obey God's Word, and serve others — providing frameworks and tools for the journey from new believer to mature disciple."
      icon={Compass}
      details={[
        { label: 'Framework', text: 'A five-step path: know Christ, grow faith, obey God, serve others, and multiply disciples.' },
        { label: 'Resources', text: 'Study guides, teaching series, reflection prompts, and practical tools for personal and group use.' },
        { label: 'Audience', text: 'Believers at every stage — from those just beginning to leaders raising the next generation.' },
      ]}
    />
  );
}
