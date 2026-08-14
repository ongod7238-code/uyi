import { Music2 } from 'lucide-react';
import { ProductCategoryPage } from '@/components/product-category-page';

export const metadata = { title: 'Songs — Uyi-Osa Degarson', description: 'Worship that creates room for the presence of God and reminds us what is true.' };

export default function SongsPage() {
  return (
    <ProductCategoryPage
      eyebrow="02 / Products / Songs"
      title="Songs"
      tagline="Worship that creates room for the presence of God."
      description="Songs carry truth in a way nothing else can. These are worship songs written to turn the heart toward God — to create room for His presence, to remind us what is true when circumstances are loud, and to give language to devotion."
      icon={Music2}
      details={[
        { label: 'Style', text: 'Contemporary worship rooted in Scripture, written for both personal devotion and congregational use.' },
        { label: 'Purpose', text: 'To lead people into the presence of God and anchor them in truth through melody.' },
        { label: 'Audience', text: 'Worshippers, worship leaders, and anyone who encounters God through music.' },
      ]}
    />
  );
}
