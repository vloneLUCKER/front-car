import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./Pages/App.jsx";
import News from "./Pages/News.jsx";
import { RouterProvider } from "react-router";
import Models from "./Pages/Models.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/news", element: <News /> },
  { path: "/models", element: <Models /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
