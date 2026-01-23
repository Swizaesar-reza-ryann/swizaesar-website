// @/components/pages/HomePage/components/Summary/Lazy.tsx
import dynamic from 'next/dynamic';

const SummaryLazy = dynamic(() => import('./Summary'), { ssr: true });

export default SummaryLazy;
