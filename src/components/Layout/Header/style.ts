// @/components/Layout/Header/style.ts
import { theme } from "@/theme";
import styled from "@emotion/styled";

const HeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background: transparent;
  padding: 16px 0;

  &.scrolled {
    background: rgba(9, 9, 11, 0.8);
    backdrop-filter: blur(10px);
    padding: 8px 0;
  }

  .header {
    &-list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;

      a {
        padding: 8px 16px;
        color: ${theme.colors.text};
        text-decoration: none;
        font-weight: 500;
        position: relative;
        transition: color 0.3s ease;
        opacity: 0.8;

        &:hover {
          color: ${theme.colors.secondary};
          opacity: 1;
        }

        &.active {
          color: ${theme.colors.secondary};
          opacity: 1;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: ${theme.colors.secondary};
          }
        }
      }

      button {
        margin-left: 16px;
      }
    }
  }
`;

export default HeaderStyle;