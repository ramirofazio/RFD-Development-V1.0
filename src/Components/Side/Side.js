import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";
import IconLinkedin from "../icons/linkedin";
import IconCalendly from "../icons/calendly";
import IconArrow from '../icons/arrow';


const StyledContainer = styled.div`
    display: flex;
    position:fixed;
    align-items: flex-end;
    width: 10%;
    height: 100%;
`;

const StyledSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 100%;
    justify-content: center;
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
    background-color: var(--primaryDarkColor);
    width: 2%;
    height: 35%;
    margin-top: 1rem;
`



const Side = () => (
    <StyledContainer>
        <StyledSubContainer>
            <StyledLink href="#home">
                <IconArrow />
            </StyledLink>
            <StyledLink href="https://calendly.com/ramifazio/30min" rel="noreferrer" target="_blank">
                <IconCalendly />
            </StyledLink>
            <StyledLink href="https://www.linkedin.com/in/ramiro-fazio-dattoli/" target="_blank" rel="noreferrer">
                <IconLinkedin />
            </StyledLink>
            <StyledLink href="https://github.com/ramirofazio" target="_blank" rel="noreferrer">
                <IconGitHub />
            </StyledLink>
            <StyledLine />
        </StyledSubContainer>
    </StyledContainer>

)

export default Side;