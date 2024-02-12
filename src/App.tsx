import "./App.css";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import Homepage from "./pages/homepage/Homepage";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import TodosPage from "./pages/todosPage/TodosPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import NavbarFooterLayout from "./layouts/NavbarFooterLayout/NavbarFooterLayout";

import TodoListDetails from "./features/todoLists/components/TodoListDetails";
import SelectListMessage from "./features/todoLists/components/SelectListMessage";

import { useVerifyApiTokenAndGetUser } from "./features/authentication/api/verifyApiTokenAndGetUser";

function App() {
  useVerifyApiTokenAndGetUser();

  return (
    <Routes>
      {/* private routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="app" element={<TodosPage />}>
          <Route index element={<SelectListMessage />} />
          <Route path=":listId" element={<TodoListDetails />} />
        </Route>
      </Route>

      {/* public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<NavbarFooterLayout />}>
          <Route index element={<Homepage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
