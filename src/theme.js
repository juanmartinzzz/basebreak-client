import { createMuiTheme } from "@material-ui/core/styles";

export const red = "rgb(140,26,0)";
export const black = "rgb(70,70,70)";
export const green = "rgb(0,70,10)";
export const golden = "rgb(249,168,37)";

export default createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#ffc000",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Julius Sans One"].join(","),
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 14,
    },
  },
});
