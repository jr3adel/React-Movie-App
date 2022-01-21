import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../context/LangContext";

export default function Navbar() {
  // context declaration
  const {lang , setLang}=useContext(LanguageContext)
  let changeLang = () => {
    lang === "en" ? setLang("ar") : setLang("en");
  };
  const selector = useSelector((state) => state.favorites);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <div className="container-fluid ">
          <Link className="navbar-brand text-light" to="/">
            Movie 
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link active text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/Favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/Upcoming">
                  Upcoming
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <button className="btn btn-primary" type="submit" onClick={changeLang}>{lang}</button>
                </li>
              <li className="m-2 nav-item badge rounded-bill bg-warning">
                 {selector.length}
                </li>
                <li className="nav-item">
                  <Link className=" nav-link text-light" to="/Form">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Registration">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
