import Button from '@/components/Button';
import { Facebook, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

const Summary = () => {
  return (
    <>
      <h3 className="summary-job">Hello, I'm</h3>

      <h1 className="summary-name">
        Website <br />
        <span>Developer</span>
      </h1>

      <p className="summary-description">
        I build accessible, pixel-perfect, secure, and performant web applications. Let's turn your vision into reality.
      </p>

      <Button size="large" className="summary-button">
        Download CV
      </Button>

      <div className='summary-social__media'>
        <Link href="https://www.instagram.com/swizaesarreza/" target='_blank'>
          <Instagram size={32} />
        </Link>

        <Link href="">  
          <Facebook size={32} />
        </Link>

        <Link href="https://github.com/Swizaesar-reza-ryann" target='_blank'>
          <Github size={32} />
        </Link>
      </div>
    </>
  );
};

export default Summary;
