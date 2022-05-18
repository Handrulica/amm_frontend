import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#191b1f",
    },
    secondary: {
      main: "#e80371",
    },
    mainGreen:{
        main: '#2e7d2c',
        light: '#82d280'
    },
    defaultWhite:{
      main:'#fefefe'
    }
  },
});

export default defaultTheme;
