import { createMuiTheme } from "@material-ui/core/styles";
import { getLocalStorageItemV2 } from "./services/localStorage/localStorage";

export const red = "rgb(140,26,0)";
export const black = "rgb(70,70,70)";
export const green = "rgb(0,70,10)";
export const golden = "rgb(249,168,37)";

const { useDarkTheme } = getLocalStorageItemV2({ name: "store" }).theme;

export default createMuiTheme({
  palette: {
    type: useDarkTheme ? "dark" : "light",
    primary: {
      main: useDarkTheme ? "#ffb300" : "#1f2165",
    },
    secondary: {
      main: useDarkTheme ? "#5f0937" : "#ffc000",
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: useDarkTheme ? "rgba(10,10,10, 0.2)" : "#fff",
      },
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
      fontSize: 12,
    },
    h5: {
      fontSize: 10,
    },
    h6: {
      fontSize: 7,
    },
  },
});
