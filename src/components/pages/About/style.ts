import { theme } from "@/theme";
import styled from "@emotion/styled";

const AboutPageStyle = styled.div`
.about{
    &-title{
        margin-bottom: 32px;

        h4{
            color: ${theme.colors.secondary};
            text-transform: uppercase;
            margin: 18px 0 12px 0;
        }

         div{
            position: relative;
            width: max-content;
        
            h1{
                color: ${theme.colors.text};
                margin: 0;
                
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
        gap: 24px;

        &__image{
            width: calc(50% - 12px);
            position: relative;

            img{
                width: 100%;
                height: auto;
                border-radius: 8px;
            }
        }

        &__text{
            width: calc(50% - 12px);

            p{
                line-height: 1.6;
                margin: 0 0 16px 0;
            }
        }
    }
}
`;

export default AboutPageStyle;