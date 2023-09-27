"use client";

import Image from "next/image";
import ErrorIcon from "../../assets/images/error-icon.svg";
import * as SC from "./Error.styles";

const Error = () => {
  return (
    <SC.Wrapper>
      <Image src={ErrorIcon} alt="Error icon" width={100} height={100} />
      <SC.Text>Algo ha salido mal</SC.Text>
    </SC.Wrapper>
  );
};

export default Error;
