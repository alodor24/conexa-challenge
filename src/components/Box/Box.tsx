"use client";

import * as SC from "./Box.styles";

type Props = {
  children: React.ReactNode;
  title?: string;
  align?: string;
};

const Box: React.FC<Props> = ({ children, title, align }) => {
  return (
    <SC.Box>
      <SC.Title $align={align}>{title}</SC.Title>
      {children}
    </SC.Box>
  );
};

export default Box;
