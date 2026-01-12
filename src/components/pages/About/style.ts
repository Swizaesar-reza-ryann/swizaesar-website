import { theme } from '@/theme';
import styled from '@emotion/styled';

const AboutPageStyle = styled.div`
.about{
    &-title{
        margin-bottom: 32px;


        h4{
            color: ${theme.colors.secondary};
            text-transform: uppercase;
            margin: 18px 0 12px 0;
            transform: translateX(-1000px);
            animation: slideIn 0.2s ease-out forwards;
        }

         div{
            position: relative;
            width: max-content;
        
            h1{
                color: ${theme.colors.text};
                margin: 0;
                transform: translateX(-1000px);
                animation: slideIn 0.4s ease-out forwards;
                
            }

            &::after{
                transform: translateX(-1000px);
                animation: slideIn 0.4s ease-out forwards;
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
            transform: translateX(1500px);
            animation: slideIn 0.6s ease-out forwards;

            img{
                width: 100%;
                height: auto;
                border-radius: 8px;
            }
        }

        &__text{
            width: calc(50% - 12px);
            transform: translateX(-1000px);
            animation: slideIn 0.6s ease-out forwards;

            p{
                line-height: 1.6;
                margin: 0 0 16px 0;
            }

            h4{
                margin-top: 32px;
            }
        }
    }

    @keyframes slideIn {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export default AboutPageStyle;
