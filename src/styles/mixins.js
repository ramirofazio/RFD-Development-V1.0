import { css } from 'styled-components'

const mixins = {
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: var(--baseColor);
    `,
    link: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;`
}


export default mixins;