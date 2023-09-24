"use client";

import * as SC from "./Box.styles";

type Props = {
  children: React.ReactNode;
};

const Box: React.FC<Props> = ({ children }) => {
  return <SC.Box>{children}</SC.Box>;
};

export default Box;
