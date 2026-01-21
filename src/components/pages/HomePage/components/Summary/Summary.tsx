import Button from '@/components/Button';
import { Facebook, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useScreenSize } from '@/context/ScreenContext';
import CardDeveloper from '@/components/pages/HomePage/components/CardDeveloper';

const Summary = () => {
  const isMobile = useScreenSize();

  return (
    <>
      <h3 className="summary-job">Hello, I'm</h3>

      <h1 className="summary-name" data-mobile={isMobile}>
        Website <br />
        <span>Developer</span>
      </h1>

      <p className="summary-description" data-mobile={isMobile}>
        I build accessible, pixel-perfect, secure, and performant web
        applications. Let's turn your vision into reality.
      </p>

      {isMobile && <CardDeveloper />}

      <Button size="large" className="summary-button" data-mobile={isMobile}>
        Download CV
      </Button>

      <div className="summary-social__media">
        <Link href="https://www.instagram.com/swizaesarreza/" target="_blank">
          <Instagram size={isMobile ? 24 : 32} />
        </Link>

        <Link href="">
          <Facebook size={isMobile ? 24 : 32} />
        </Link>

        <Link href="https://github.com/Swizaesar-reza-ryann" target="_blank">
          <Github size={isMobile ? 24 : 32} />
        </Link>
      </div>
    </>
  );
};

export default Summary;
