import { css } from 'styled-components'

const mixins = {
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: var(--baseColor);
    `,
    carouselContainer: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 50vh;
    `,
    link: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--secondaryColor);
        text-decoration: none;`
}


export default mixins;