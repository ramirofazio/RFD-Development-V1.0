import React from "react";
import styled from "styled-components";

const StyledLoadingContainer = styled.div``;
const StyledLoading = styled.div``;
const StyledLoadingText = styled.div``;

function LoadingPage() {
  return (
    <StyledLoadingContainer>
      <StyledLoading></StyledLoading>
      <StyledLoadingText>loading</StyledLoadingText>
    </StyledLoadingContainer>
  );
}

export default LoadingPage;
