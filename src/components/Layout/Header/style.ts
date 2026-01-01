
import { theme } from "@/theme";
import styled from "@emotion/styled";

const HeaderStyle = styled.nav`
  .header{
   &-list{
   max-width: 1200px;
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 16px;
      background-color: transparent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      width: 100%;

      a {
         padding: 0 16px;
      }
   }
  }
`;

export default HeaderStyle;