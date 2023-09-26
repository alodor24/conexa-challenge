import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
`;

export const Button = styled.button<{ $isDisabled?: boolean }>`
  width: 50px;
  height: 50px;
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.black[0]};
  font-size: 24px;
  font-weight: bolder;
  background-color: ${(props) =>
    props.$isDisabled
      ? props.theme.colors.white[1]
      : props.theme.colors.cyan[0]};
  border: none;
`;
