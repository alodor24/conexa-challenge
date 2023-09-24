"use client";

import * as SC from "./Container.styles";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <SC.Wrapper>{children}</SC.Wrapper>;
};

export default Container;
