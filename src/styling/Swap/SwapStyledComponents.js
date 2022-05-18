import styled from "@emotion/styled";
import { Select, TextField } from "@mui/material";
import defaultTheme from "../defaultTheme";

export const WhiteBorderTextField = styled(TextField)({
    input: {
      color: defaultTheme.palette.mainGreen.light,
      fontSize:'1.5rem',
      fontFamily: "'Inconsolata', monospace",
    },
    label: {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      outline: "none",
      ":hover": {
        "& > fieldset": {
          borderColor: "transparent !important",
        },
      },
      fieldset: {
        borderColor: "transparent",
      },
    },
  });
  
export const CustomSelect = styled(Select)({
    fontSize: ".8rem",
    marginTop: ".2rem",
    fontWeight: "600",
    color: 'white',
    backgroundColor: defaultTheme.palette.mainGreen.main,
    borderRadius: "20px",
    ":before": {
      borderColor: defaultTheme.palette.primary.light,
    },
    ":after": {
      borderColor: defaultTheme.palette.primary.light,
    },
    "& .MuiSelect-icon": {
      fill: 'white',
    },
    "& .MuiOutlinedInput-root": {
      fieldset: {
        border: "none",
      },
    },
  });

  export const MainBoxContainerStyle={
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}

export const RootBoxContainerStyle = {
    display: 'flex', flexDirection: 'column',
    backgroundColor: defaultTheme.palette.primary.main,
    p: '.5rem',
    borderRadius: "20px",
    border: '1px solid transparent',
    ":hover": {
        borderColor: 'white'
    },
}

export const TextField_Select_ContainerStyle = {
    display: "flex",
    p: ".3rem",
    border: "1px solid transparent",
    ":hover": {
      borderColor: "transparent",
    },
  }

  export const mainContainerStyle = {
    m: "auto",
    p: "1rem",
    width: "40%",
    height: "fit-content",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(" +
      defaultTheme.palette.primary.light +
      "," +
      defaultTheme.palette.mainGreen.light +
      ")",
    justifyContent: "space-between",
  }