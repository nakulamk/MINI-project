import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <button className="btn btn-secondary">
        <Link to="/dashboard">Resgister</Link>
      </button>
    </div>
  );
};

export default Register;
