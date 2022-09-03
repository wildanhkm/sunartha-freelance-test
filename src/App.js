
import { Route, Routes } from "react-router-dom";
import Warehouse from "./Warehouse";
import Detail from "./Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Warehouse />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
