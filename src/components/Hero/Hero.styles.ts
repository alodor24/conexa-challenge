import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white[0]};
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 70/45;
`;
