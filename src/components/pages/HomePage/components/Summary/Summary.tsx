import Button from '@/components/Button';

const Summary = () => {
  return (
    <div className="summary">
      <h3 className="summary-job">Front End Developer (Website)</h3>

      <h1 className="summary-name">
        Swizaesar <br />
        <span>Reza Ryann</span>
      </h1>

      <p className="summary-description">
        Front End Developer with experience since 2019, using React.js since
        2020. Experienced in building responsive and scalable web applications
        with React.js, Next.js, and TypeScript, including state management, API
        integration, unit testing, and performance optimization. Experienced in
        using Ant Design and Tailwind to ensure high-quality UI/UX and
        maintainable code.
      </p>

      <Button size="large" className="summary-button">
        Download CV
      </Button>
    </div>
  );
};

export default Summary;
