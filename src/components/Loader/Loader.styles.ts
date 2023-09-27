import styled, { keyframes } from "styled-components";

const SpinAnimation = keyframes`
  0% {
    opacity: 0.7;
    rotate: -360deg;
  }

  100% {
    opacity: 0.3;
    transform: scale(0.8);
    rotate: 360deg;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  img {
    animation-name: ${SpinAnimation};
    animation-direction: alternate;
    animation-duration: 1.7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;
