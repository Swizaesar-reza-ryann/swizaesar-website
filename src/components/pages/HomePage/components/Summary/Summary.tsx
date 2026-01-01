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
        Frontend Developer with experience building modern web applications
        using React, Next.js, and TypeScript. Skilled in developing responsive,
        high-performance, and scalable user interfaces, while applying best
        practices such as clean code, state management, and robust error
        handling. Strong understanding of SSR/CSR, hydration, API integration,
        and performance optimization (Core Web Vitals). Experienced in
        collaborating with backend, product, and design teams to deliver
        impactful user-centric solutions.
      </p>

      <Button size="large">Download CV</Button>
    </div>
  );
};

export default Summary;
