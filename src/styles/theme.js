import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006A6A",
    },
    secondary: {
      main: "#ff4081",
    },
    onPrimary: {
      main: "#ffffff",
    },
    onSecondary: {
      main: "#000000",
    },
    surface: {
      main: "#F4FBFA",
    },
    background: {
      default: "#F4FBFA",
    },
    onSurface: {
      main: "#161D1D",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      color: "#161D1D",
    },
    h2: {
      color: "#161D1D",
    },
    h3: {
      color: "#161D1D",
    },
    h4: {
      color: "#161D1D",
    },
    h5: {
      color: "#161D1D",
    },
    h6: {
      color: "#161D1D",
    },
    body1: {
      color: "#333",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      color: "#666",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    caption: {
      color: "#999",
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },
    subtitle1: {
      color: "#004d40",
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      color: "#ff4081",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      color: "#ffffff",
      fontSize: "0.875rem",
      fontWeight: 700,
    },
    onPrimary: {
      color: "#ffffff",
    },
    onSecondary: {
      color: "#ffffff",
    },
    onSurface: {
      color: "#161D1D",
    },
    footerHeading: {
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: 700,
    },
    footerText: {
      color: "#ffffff",
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
});

export default theme;
