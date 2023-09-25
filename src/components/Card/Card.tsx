"use client";

import Image from "next/image";
import Avatar from "../../assets/images/image-example.jpeg";
import * as SC from "./Card.styles";

type Props = {
  name: string;
  status: string;
  specie: string;
  image?: string;
};

const Card: React.FC<Props> = ({ name, status, specie, image }) => {
  return (
    <SC.Wrapper>
      <SC.ImageWrapper>
        <Image src={Avatar} fill sizes="100" alt={name} />
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
