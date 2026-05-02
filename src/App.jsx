import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./paginas/Inicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;