import { Roboto } from "next/font/google";

const theme = {
  colors: {
    black: ["#000"],
    white: ["#fff"],
    grey: ["#263238", "#b0bec5", "#455a64"],
    green: ["#64dd17"],
    red: ["#b71c1c"],
    orange: ["#e65100"],
  },
  transition: ["all ease-in-out .3s"],
  boxShadow: [
    "0 2px 5px 0 rgba(38, 50, 56, 0.7)",
    "0 4px 5px 0 rgba(178, 255, 89, 0.9)",
  ],
};

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default theme;
