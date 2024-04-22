import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import RepoDetails from "./pages/repodetails";

function App() {
  /* Page routing using react-router-dom */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error404 />,
    },
    {
      path: "/repodetails/:id",
      element: <RepoDetails />,
      errorElement: <Error404 />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
