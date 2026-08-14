import { Mic2 } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Podcasts — Uyi-Osa Degarson', description: 'Unhurried conversations about purpose, creativity, business and building a life that lasts.' };

export default function PodcastsPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Podcasts"
      title="Podcasts"
      tagline="Unhurried conversations about purpose, creativity, and building a life that lasts."
      description="Podcasts make room for the long conversation, the kind that does not fit in a post or a soundbite. These are unhurried discussions about faith, creativity, business, leadership, and the slow, intentional work of building something that matters."
      icon={Mic2}
      details={[
      ]}
    />
  );
}
