
import { theme } from "@/theme";
import styled from "@emotion/styled";

const HeaderStyle = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 16px;
   background-color: ${theme.colors.primary};
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   position: fixed;
   top: 0;
   width: 100%;

   a {
      padding: 0 16px;
   }
`;

export default HeaderStyle;