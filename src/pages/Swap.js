import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import defaultTheme from "../styling/defaultTheme";

const CustomInputLabel = styled(InputLabel)({
  color: defaultTheme.palette.secondary.main,
});

const CustomSelect = styled(Select)({
  color: defaultTheme.palette.secondary.main,
  ":before": {
    borderColor: defaultTheme.palette.secondary.main,
  },
  ":after": {
    borderColor: defaultTheme.palette.secondary.main,
  },
  "& .MuiSelect-icon": {
    fill: defaultTheme.palette.secondary.main,
  },
});

function Swap({ options }) {
  const [from, setFrom] = React.useState(options[0]);
  const [to, setTo] = React.useState(options[1]);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    if (from === to) setTo("");
  };
  const handleToChange = (e) => {
    setTo(e.target.value);
    if (from === to) setFrom("");
  };

  return (
    <Paper
      sx={{
        border: "1px solid " + defaultTheme.palette.secondary.main,
        p: "1rem",
        m: "2rem auto",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Typography color={"secondary"} m={"auto"} variant="h6">
          Swap
        </Typography>
        <Box
          m={"1rem 1rem"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box m={".5rem 0"}>
            <FormControl color="mainGreen" fullWidth>
              <CustomInputLabel>Currency From</CustomInputLabel>
              <CustomSelect
                defaultValue={from}
                placeholder="select currency"
                fullWidth
                onChange={handleFromChange}
                label="Currency From"
              >
                {options.map((o) => (
                  <MenuItem value={o}>{o}</MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </Box>
          <Box m={".5rem 0"}>
            <FormControl color="mainGreen" fullWidth>
              <CustomInputLabel>Currency To</CustomInputLabel>
              <CustomSelect
                defaultValue={to}
                placeholder="select currency"
                fullWidth
                onChange={handleToChange}
                label="Currency To"
              >
                {options.map((o) => (
                  <MenuItem value={o}>{o}</MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </Box>
        </Box>
      </ThemeProvider>
    </Paper>
  );
}

export default Swap;
