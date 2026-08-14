import { Compass } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Discipleship — Uyi-Osa Degarson', description: 'Resources and frameworks to help believers know Christ, grow in faith, and serve others.' };

export default function DiscipleshipPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Discipleship"
      title="Discipleship"
      tagline="Resources and frameworks to help believers know Christ, grow in faith, and serve others."
      description="Discipleship is the slow, sacred work of becoming like Christ. These resources are designed to help believers know Him, grow in faith, obey God's Word, and serve others  providing frameworks and tools for the journey from new believer to mature disciple."
      icon={Compass}
      details={[
      ]}
    />
  );
}
