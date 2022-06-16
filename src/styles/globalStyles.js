import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-color: var(--baseColor);
`;

export const StyledCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 50vh;
`;

export const StyledLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    color: var(--secondaryColor);
    text-decoration: none;
    
`;
