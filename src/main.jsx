import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root.jsx";
import Home from "./components/Home/Home.jsx";
import AllCrops from "./components/AllCrops/AllCrops.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import CropDetails from "./components/CropDetails/CropDetails.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import MyPost from "./components/MyPost/MyPost.jsx";
import MyInterest from "./components/MyInterest/MyInterest.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AddCrops from "./components/AddCrops/AddCrops.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allcrops",
        element: <AllCrops></AllCrops>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allcrops/:id",
        element: (
          <PrivateRoute>
            <CropDetails></CropDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "mypost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "myinterest",
        element: (
          <PrivateRoute>
            <MyInterest></MyInterest>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "addcrops",
        element: (
          <PrivateRoute>
            <AddCrops></AddCrops>
          </PrivateRoute>
        ),
      },
      {
        path: "forgotpaassword",
        element: (
          <PrivateRoute>
            <ForgotPassword></ForgotPassword>
          </PrivateRoute>
        ),
      },
      {
        path: "updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
