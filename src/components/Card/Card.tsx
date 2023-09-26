"use client";

import Image from "next/image";
import * as SC from "./Card.styles";

type Props = {
  name: string;
  status: string;
  specie: string;
  image: string;
  onClick?: () => void;
  isActive: boolean;
};

const Card: React.FC<Props> = ({
  name,
  status,
  specie,
  image,
  onClick,
  isActive = false,
}) => {
  return (
    <SC.Wrapper onClick={onClick} $isActive={isActive}>
      <SC.ImageWrapper>
        <Image src={image} fill sizes="100" alt={name} />
      </SC.ImageWrapper>
      <SC.ContentWrapper>
        <SC.Name>{name}</SC.Name>
        <SC.Detail>
          <SC.Status $status={status} />
          {status} - {specie}
        </SC.Detail>
      </SC.ContentWrapper>
    </SC.Wrapper>
  );
};

export default Card;
