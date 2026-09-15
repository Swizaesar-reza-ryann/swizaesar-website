import styled from '@emotion/styled';

const ExperiencePageStyle = styled.div`
  padding: 24px 0 72px;
  max-width: 860px;
  margin: 0 auto;

  .experience-timeline {
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    /* Clear fixed language switcher */
    padding: 40px 0 32px;

    .experience-timeline {
      gap: 20px;
      margin-top: 4px;
    }
  }
`;

export default ExperiencePageStyle;
