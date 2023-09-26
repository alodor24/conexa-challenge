import styled, { css } from "styled-components";

const Activated = css`
  box-shadow: ${(props) => props.theme.boxShadow[1]};
  transform: scale(0.98);
`;

export const Wrapper = styled.article<{ $isActive?: boolean }>`
  min-height: 7rem;
  background-color: ${(props) => props.theme.colors.grey[2]};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 40% 60%;
  box-shadow: ${(props) => props.theme.boxShadow[0]};
  cursor: pointer;
  transition: ${(props) => props.theme.transition[0]};

  ${(props) =>
    props.$isActive &&
    css`
      ${Activated}
    `};

  &:hover {
    ${Activated}
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h4`
  margin-bottom: 0.3rem;
`;

export const Status = styled.span<{ $status?: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$status === "Alive"
      ? props.theme.colors.green[0]
      : props.$status === "Dead"
      ? props.theme.colors.red[0]
      : props.theme.colors.orange[0]};
`;

export const Detail = styled.p`
  font-size: 14px;
`;
