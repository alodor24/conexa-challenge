import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.grey[1]};
`;

export const GridWrapper = styled.section<{ $columns?: number }>`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 2}, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.ul`
  margin-left: 1rem;

  li:not(li:last-child) {
    margin-bottom: 0.5rem;
  }
`;
