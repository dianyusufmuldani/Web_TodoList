import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
