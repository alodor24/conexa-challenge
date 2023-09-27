"use client";

import Image from "next/image";
import Loading from "../../assets/images/loading.png";
import * as SC from "./Loader.styles";

const Loader = () => {
  return (
    <SC.Wrapper>
      <Image src={Loading} width={100} height={100} alt="Loading" />
    </SC.Wrapper>
  );
};

export default Loader;
