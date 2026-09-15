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
    padding: 16px 0 56px;

    .experience-timeline {
      gap: 28px;
    }
  }
`;

export default ExperiencePageStyle;
