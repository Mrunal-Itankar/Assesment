import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navBar">
        <div className="row container-fluid">
        <h1 className="appLogo col"><i><Link className="link" to="/">
        Our Recipe App
            </Link></i></h1>
        <ul className="col d-flex my-2 align-center">
          <li className="mx-2">
            <Link className="link" to="/">
              Category
            </Link>
          </li>
          <li className="mx-2">
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="mx-2">
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
