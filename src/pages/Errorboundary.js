import "../App.css";
import React from "react";
import "../App.css";

function ErrorBoundary({ error }) {
  return (
    <div className="fullpage">
      <h1 className="errorheader">There is an Error!!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
