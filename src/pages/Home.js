import { ThemeProvider } from "@mui/material";
import Cards from "../components/home/Cards";
import Title from "../components/home/Title";
import getTables from "../helpers";
import defaultTheme from "../styling/defaultTheme";

const tables = getTables();

export default function Home(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Title />
      <Cards
        nr={3}
        headers={["Andromeda", "Serpes", "Tucana"]}
        tables={tables}
      />
    </ThemeProvider>
  );
}
