import React, { Component } from "react";
import "./HomeNav.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class HomeNavPart extends Component {
  render() {
    return (
      <div>
        <div className="top-banner">
          <div className="top-bnr-overlay">
            <header>
              <div className="container">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
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
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                      <ul className="mb-2 mb-lg-0 ml-auto list-unstyled d-flex justify-content-end">
                        <li className="nav-item">
                          <Link className="nav-link" to="/accessories">
                            Accessories
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
              </div>
            </header>
            <div className="home-shield row text-center justify-content-between">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a
                  href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/package-json/v/Debug-Gremlins/Fabric-Engineering-Resources?&labelColor=f4eee8&color=important&label=yarn Deployed&logo=Yarn&logoColor=blue&style=plastic"
                    alt="cq"
                    srcSet
                  />
                </a>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-9 col-sm-12 col-xsm-12">
                  <div className="top-over-details-part text-center">
                    <h1>Fabric Engineering</h1>
                    <p>
                      Fabric Engineering is one of the basic textile engineering
                      branches with its large application in weaving, knitting
                      and non-woven. The purpose of this department is to
                      develop engineers who, in combination of their knowledge,
                      skills and latest technologies, can face challenge of the
                      market and ensure product quality to meet the demand of
                      the time.
                    </p>
                    <div className="btn">
                      <a
                        href="https://www.butex.edu.bd/department-of-fabric-engineering-2/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#FFD2DA"
                fill-opacity="1"
                d="M0,128L80,154.7C160,181,320,235,480,245.3C640,256,800,224,960,208C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeNavPart;
