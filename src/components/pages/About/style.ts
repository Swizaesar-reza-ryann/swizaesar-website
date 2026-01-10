import { theme } from "@/theme";
import styled from "@emotion/styled";

const AboutPageStyle = styled.div`
.about{
    &-title{
        h4{
            color: ${theme.colors.secondary};
            text-transform: uppercase;
            margin: 18px 0;
        }

         div{
            position: relative;
            width: max-content;
        
            h1{
                color: ${theme.colors.text};
                
            }

            &::after{
                content: '';
                position: absolute;
                width: 50%;
                height: 4px;
                background: ${theme.colors.secondary};
                bottom: -8px;
                border-radius: 4px;
            }
        }
    }

    &-content{
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &__image{
            width: 50%;
        }

        &__text{
            width: 50%;

            p{
                line-height: 1.6;
                margin: 16px 0;
            }
        }
    }
}
`;

export default AboutPageStyle;