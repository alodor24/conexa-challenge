import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.grey[0]};
`;
