import { Video } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Videos — Uyi-Osa Degarson', description: 'Teachings, conversations, and visual stories made to meet you wherever you are.' };

export default function VideosPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Videos"
      title="Videos"
      tagline="Teachings, conversations, and visual stories made to meet you wherever you are."
      description="Video brings teaching to life, combining word, image, and story in a way that lands differently than text or audio alone. These are teachings, conversations, and visual stories designed to meet you wherever you are on the journey."
      icon={Video}
      details={[
      ]}
    />
  );
}
