import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem;
  border: solid 1px ${(props) => props.theme.colors.grey[0]};
  border-radius: 5px;
`;

export const Title = styled.h2<{ $align?: string }>`
  margin-bottom: 1rem;
  text-align: ${(props) => props.$align || "left"};

  @media (max-width: 768px) {
    text-align: left;
  }
`;
