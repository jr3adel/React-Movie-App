import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-12 text-center">
            <li className="nav-item col-md-3">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/Movies"
              >
                Movies
              </Link>
            </li>
            <li className="nav-item col-md-3 ">
              <Link className="nav-link text-light" to="/Favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item col-md-3">
              <Link className="nav-link text-light" to="/Form">
                Login
              </Link>
            </li>
            <li className="nav-item col-md-3">
              <Link className="nav-link text-light" to="/Registration">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
