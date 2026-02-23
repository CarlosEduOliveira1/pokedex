import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
