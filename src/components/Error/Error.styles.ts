import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.grey[1]};
`;
