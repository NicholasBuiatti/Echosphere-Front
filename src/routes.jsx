import { Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import PersonalProfile from "./pages/PersonalProfile";
// import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";

export const routes = [
  { id: 1, path: "/login", element: <Login />, label: "Login" },
  { id: 2, path: "/register", element: <Register />, label: "Register" },
  { id: 3, path: "/homepage", element: <Homepage />, label: "Homepage" },
  {
    id: 4,
    path: "/personal-profile",
    element: <PersonalProfile />,
    label: "Personal Profile",
  },
  { id: 5, path: "/", element: <Navigate to="/login" replace /> },
  { id: 6, path: "*", element: <Error /> },
];
