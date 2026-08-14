import { BookOpen } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Books — Uyi-Osa Degarson', description: 'Ideas for the long road — writing on identity, faith, leadership, and the work of becoming.' };

export default function BooksPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Books"
      title="Books"
      tagline="Ideas for the long road. writing on identity, faith, leadership, and the work of becoming."
      description="Books are how ideas travel furthest. Each one is written to meet you at a turning point and give you language for what you already sense, about purpose, about faith, about the slow and sacred work of becoming the person you were made to be."
      icon={BookOpen}
      details={[
      ]}
    />
  );
}
