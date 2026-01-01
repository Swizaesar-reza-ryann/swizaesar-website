import { theme } from "@/theme";
import styled from "@emotion/styled";

const HomePageStyle = styled.div`
 display: block;

 .summary{
    &-job{
        color: ${theme.colors.secondary};
        transform: translateX(-1000px);
        animation: slideIn 0.2s ease-out forwards;
    }

    &-name{
        font-size: 6rem;
        margin-top: 0px;
        line-height: 0.9;
        margin-bottom: 16px;
        background: linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.text});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: translateX(-1000px);
        animation: slideIn 0.4s ease-out forwards;

        span{
            -webkit-text-fill-color:  ${theme.colors.text};
        }
    }

    &-description{
        color: ${theme.colors.text};
        line-height: 1.5;
        font-size: 1.5rem;
        max-width: 920px;
        transform: translateX(-1000px);
        animation: slideIn 0.6s ease-out forwards;
    }

    &-button{
        transform: translateX(-1000px);
        animation: slideIn 0.8s ease-out forwards;
        font-weight: 600;
    }
 }

 @keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

export default HomePageStyle;