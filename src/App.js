import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import MenuBar from "./components/layout/MenuBar";
import Home from "./pages/Home";
import Swap from "./pages/Swap";


function App() {
  return (
    <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap options={['Andromeda','Serpes', 'Tucano']}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
