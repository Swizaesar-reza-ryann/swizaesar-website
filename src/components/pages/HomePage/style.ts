import { theme } from "@/theme";
import styled from "@emotion/styled";

const HomePageStyle = styled.div`
 display: block;

 .summary{
    &-job{
        color: ${theme.colors.secondary};
    }

    &-name{
        font-size: 6rem;
        margin-top: 0px;
        line-height: 0.9;
        margin-bottom: 16px;
        background: linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.text});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        span{
            -webkit-text-fill-color:  ${theme.colors.text};
        }
    }

    &-description{
        color: ${theme.colors.text};
        line-height: 1.5;
        font-size: 1.5rem;
        max-width: 920px;
    }
 }
`;

export default HomePageStyle;