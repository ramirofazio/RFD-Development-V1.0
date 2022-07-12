import { css } from 'styled-components'

const mixins = {
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
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
}


export default mixins;