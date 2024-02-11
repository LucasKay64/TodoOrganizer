import "./App.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import TodosPage from "./pages/todosPage/TodosPage";

import NavbarFooterLayout from "./layouts/navbarFooterLayout/NavbarFooterLayout";

import TodoListDetails from "./features/todoLists/components/TodoListDetails";
import SelectListMessage from "./features/todoLists/components/SelectListMessage";

function App() {
  return (
    <Routes>
      {/* private routes */}
      <Route path="app" element={<TodosPage />}>
        <Route index element={<SelectListMessage />} />
        <Route path=":listId" element={<TodoListDetails />} />
      </Route>

      {/* public routes */}
      <Route path="/" element={<NavbarFooterLayout />}>
        <Route index element={<Homepage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
