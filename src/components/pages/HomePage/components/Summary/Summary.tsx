import Button from '@/components/Button';

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
    </>
  );
};

export default Summary;
