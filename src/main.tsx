import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <div style={{ marginTop: 20 }}>
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
