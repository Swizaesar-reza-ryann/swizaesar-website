import dynamic from 'next/dynamic';

const HeaderLazy = dynamic(() => import('./Header'), { ssr: false });
export default HeaderLazy;
