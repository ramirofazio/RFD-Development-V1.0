import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";
import IconLinkedin from "../icons/linkedin";
import IconCalendly from "../icons/calendly";
import IconLine from "../icons/line";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:fixed;    
    width: 10%;
    padding: 1rem;
    height: 100%;

`;
const StyledLink = styled.a`
  ${mixins.link}
  width: 15%;
  color: var(--primaryDarkColor);

  margin: 2rem ;

  transition: all .3s ease;
  &:hover {
    transform: translateY(-5px);
    color: var(--secondaryColor);
  }
`;

const StyledLine = styled.div`
  ${mixins.link}

    width: 15%;
    color: var(--primaryDarkColor);
    transform: rotateX('angle');

    outline: 1px solid red;
    
`



const Side = () => (
    <StyledContainer>
        <StyledLink
            href="https://calendly.com/ramifazio/30min"
            rel="noreferrer"
            target="_blank"
        >
            <IconCalendly />
        </StyledLink>
        <StyledLink href={"https://github.com/ramirofazio"} target="_blank" rel="noreferrer">
            <IconLinkedin />
        </StyledLink>
        <StyledLink href={"https://github.com/ramirofazio"} target="_blank" rel="noreferrer">
            <IconGitHub />
        </StyledLink>
        <StyledLine>
            <IconLine />
            <IconLine />
            <IconLine />
            <IconLine />
        </StyledLine>
    </StyledContainer>

)

export default Side;