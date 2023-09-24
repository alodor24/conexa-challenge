"use client";

import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import * as SC from "./Hero.styles";

const Hero = () => {
  return (
    <SC.Wrapper>
      <SC.WrapperImage>
        <Image src={Logo} fill priority={true} alt="Rick and Morty logo" />
      </SC.WrapperImage>
    </SC.Wrapper>
  );
};

export default Hero;
