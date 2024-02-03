import "./App.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import SignInPage from "./pages/signInPage/signInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";

import NavbarFooterLayout from "./layouts/navbarFooterLayout/NavbarFooterLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarFooterLayout />}>
        <Route index element={<Homepage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
