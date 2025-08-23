import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import CollectionPage from "./pages/CollectionPage";
import About from "./pages/About"
import ProductListing from "./components/ProductListing";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/collection",
    element: <CollectionPage />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/productListing",
    element: <ProductListing />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
