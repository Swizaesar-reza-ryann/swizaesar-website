import { theme } from "@/theme";
import styled from "@emotion/styled";

const HomePageStyle = styled.div`
 display: flex;

  .flex-content {
   width: 50%;
   min-height: 700px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   &.profile{
    background: ${theme.colors.text}
   }
  }

  .summary{
    text-align: center;
  }
`;

export default HomePageStyle;