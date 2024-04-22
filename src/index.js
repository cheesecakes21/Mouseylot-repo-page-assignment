import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorFetchingPage from "./pages/Errorboundary";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary
    FallbackComponent={<ErrorFetchingPage />}
    onError={() => {
      console.log("There was an error!");
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);
