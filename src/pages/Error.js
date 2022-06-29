import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>OOps wrong page</h1>
        <h3>Go back <Link to="/" className="btn btn-primary"> Home</Link></h3>
       
      </div>
    </section>
  );
};

export default Error;
