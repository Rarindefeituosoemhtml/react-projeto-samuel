import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Camisas from "./Pages/PageCamisas/Camisas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/camisas" element={<Camisas />} />
    </Routes>
  );
}

export default App;
