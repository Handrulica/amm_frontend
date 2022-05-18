import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/layout/MenuBar";
import Home from "./pages/Home";
import Swap from "./pages/Swap";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/swap"
          element={
            <Swap
              options={[
                {
                  fullName: "Andromeda",
                  abbreviation: "AND",
                  hzn: 0.46,
                  usd: 2.3,
                },
                {
                  fullName: "Serpes",
                  abbreviation: "SRP",
                  hzn: 0.79,
                  usd: 3.95,
                },
                {
                  fullName: "Tucano",
                  abbreviation: "TCN",
                  hzn: 0.91,
                  usd: 4.55,
                },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
