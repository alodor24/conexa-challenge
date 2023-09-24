import { Roboto } from "next/font/google";

const theme = {
  colors: {
    black: ["#000"],
    white: ["#fff"],
    grey: ["#263238"],
  },
  transition: ["all ease-in-out .3s"],
};

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default theme;
