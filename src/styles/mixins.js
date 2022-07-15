import { css } from 'styled-components'

const mixins = {
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        
    `,
    principalContainer: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 200vh;
    `,
    link: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;`,
    h1: css`
         text-align: center;
        color: var(--secondaryColor);
        font-family: var(--secondaryFont);
        font-size: 4rem;
        font-weight: 200;
        border-bottom: 1px solid var(--secondaryColor);

        &:hover {
          pointer-events: none;
          cursor: default;
        }
    `,
    transparentContainer: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        height: 80%;
        border-radius: 10px;
        padding: 10px;
        background-color: var(--baseLightColor);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
            
        @media (max-width: 500px) {
          width: 90%;
          height: 80%;
        }
    `,
    fadeInAnimation: css`
    animation: fadeIn 1s ease-in;

        @keyframes fadeIn {
            0%{
                opacity: 0;
                transform: translateY(-5px) translateX(-5px);
            }
            25% {
                opacity: 0.25;
                transform: translateY(-2.5px) translateX(-2.5px);
            }
            50% {
                opacity: 0.5;
                transform: translateY(-1.8px) translateX(-1.8px);
            }
            100% {
                opacity: 1;
                transform: translateY(0px) translateX(0px);
            }
            
        }`,
}


export default mixins;