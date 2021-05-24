import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

function NavigationBar() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="nav-link" to="/bce">
                        BCE
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/chemistry">
                        Chemistry
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/math">
                        MATH
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/ntf">
                        NTF
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/physics">
                        Physics
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/syllabus">
                    Syllabus
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 mr-auto list-unstyled  justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link" to="/accessories">
                    Accessories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/examinfo">
                    Exam Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/developer">
                    Developer
                  </Link>
                </li>
              </ul>
            </div>

            <Link className="navbar-brand navbar-logo" to="/" exact>
              <img className="rotate" src={Logo} alt="" srcSet />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavigationBar;
