import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem;
  border: solid 1px ${(props) => props.theme.colors.grey[0]};
  border-radius: 5px;
`;
