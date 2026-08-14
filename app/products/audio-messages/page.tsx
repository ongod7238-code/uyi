import { Headphones } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Audio Messages — Uyi-Osa Degarson', description: 'Teachings, reflections and practical wisdom for the moments you need a little more clarity.' };

export default function AudioPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Audio Messages"
      title="Audio Messages"
      tagline="Teachings and reflections for the moments you need a little more clarity."
      description="Audio meets you where you are — on a walk, in the car, in the quiet of an early morning. These messages are short teachings and reflections on Scripture, faith, and the practical wisdom needed to follow Christ with intention in everyday life."
      icon={Headphones}
      details={[
        { label: 'Format', text: 'Short-form teachings and reflections, typically 10–25 minutes, made for listening on the go.' },
        { label: 'Topics', text: 'Identity, faith, obedience, purpose, leadership, and the practices that keep a life anchored.' },
        { label: 'Audience', text: 'Anyone seeking clarity and encouragement in their walk with Christ.' },
      ]}
    />
  );
}
