import { Box, Button, Paper, ThemeProvider, Typography } from "@mui/material";
import defaultTheme from "../../styling/defaultTheme";

const Card = ({ header, table }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "33%",
        p: "1rem",
        borderRadius: "20px",
        boxShadow: 7,
        backgroundColor: defaultTheme.palette.primary.light,
      }}
    >
      <Typography
        fontFamily={"'Inter', sans-serif"}
        align="center"
        variant="h4"
        color={defaultTheme.palette.info.light}
        fontWeight={500}
      >
        {header}
      </Typography>
      <Box m={"1rem"} display={"flex"} flexDirection={"column"}>
        {table.table.map((row, idx) => (
          <ThemeProvider theme={defaultTheme}>
            <Box
              key={header + "-table-row" + idx}
              display={"flex"}
              sx={{
                p: ".5rem",
                border: "1px solid " + defaultTheme.palette.secondary.main,
                borderRadius: "20px",
                m: ".5rem auto",
              }}
              justifyContent={"space-between"}
            >
              <Typography
                fontFamily={"'Inconsolata', monospace"}
                fontWeight={200}
                alignSelf={"flex-start"}
                m={"auto"}
                mr=".5rem"
                ml={"0"}
                variant="h5"
                color={"secondary"}
              >
                {row.row.key}:{" "}
              </Typography>
              <Typography
                fontFamily={"'Inconsolata', monospace"}
                fontWeight={200}
                alignSelf={"flex-end"}
                m={"auto"}
                ml=".5rem"
                mr={"0"}
                variant="h5"
                color={defaultTheme.palette.mainGreen.light}
              >
                {row.row.value}
              </Typography>
            </Box>
          </ThemeProvider>
        ))}
      </Box>
      <Button
        size="large"
        color="secondary"
        sx={{ alignSelf: "center" }}
        variant="contained"
      >
        BUY
      </Button>
    </Paper>
  );
};

export default Card;
