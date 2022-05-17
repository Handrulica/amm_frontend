import { AppBar, Box, Button, ThemeProvider } from "@mui/material"
import defaultTheme from "../../styling/defaultTheme"
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const buttonStyle = {
  fontSize: "1.1rem",
  fontWeight: "400",
  p: "1rem",
};


const MenuBar = () =>{
    return (
        <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          backgroundColor: "#191b1f",
          justifyContent: "flex-end",
          alignItems:'center'
        }}
      >
        <Box sx={{ mr: "0" }}>
          <ThemeProvider theme={defaultTheme}>
            <Button
              sx={buttonStyle}
              color="success"
              LinkComponent={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{ ...buttonStyle }}
              color="secondary"
              LinkComponent={Link}
              to="/swap"
            >
              Swap
            </Button>
            <Button color="info" href="https://github.com/Handrulica/amm_frontend">
              <GitHubIcon fontSize="large" />
            </Button>
          </ThemeProvider>
        </Box>
      </AppBar>
    )
}

export default MenuBar