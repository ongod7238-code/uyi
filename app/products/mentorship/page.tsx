import { Users } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Mentorship — Uyi-Osa Degarson', description: 'A considered space for leaders, creatives and entrepreneurs who are ready to grow with intention.' };

export default function MentorshipPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Mentorship"
      title="Mentorship"
      tagline="A considered space for leaders, creatives and entrepreneurs ready to grow with intention."
      description="Mentorship is not a program — it is a relationship. It is a considered space for leaders, creatives, and entrepreneurs who are ready to grow with intention, think clearly about their next chapter, and build with the kind of conviction that endures."
      icon={Users}
      details={[
        { label: 'Format', text: 'One-to-one and cohort-based mentorship, structured around clarity, strategy, and accountability.' },
        { label: 'Focus', text: 'Personal growth, leadership development, creative direction, and building purpose-driven work.' },
        { label: 'Audience', text: 'Emerging and established leaders who want guided, intentional growth.' },
      ]}
    />
  );
}
