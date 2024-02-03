import "./App.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import NavbarFooterLayout from "./layouts/navbarFooterLayout/navbarFooterLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarFooterLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
