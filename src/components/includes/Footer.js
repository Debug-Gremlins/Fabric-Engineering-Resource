import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { OverlayButton } from "../config/Palette";
import FooterLink from "../widgets/FooterLink";

function Footer() {
  return (
    <div>
      <FooterArea>
        <div className="container">
          <div className="row justify-content-between">
            <div className="footerlinkstyle">
              <FooterLink
                title="Individual Sections"
                subTitle=""
                link1={
                  <Link className="foot-link" to="/bce1-1">
                    BCE
                  </Link>
                }
                link2={
                  <Link className="foot-link" to="/chemistry1-1">
                    Chemistry
                  </Link>
                }
                link3={
                  <Link className="foot-link" to="/ntf1-1">
                    NTF
                  </Link>
                }
                link4={
                  <Link className="foot-link" to="/math1-1">
                    Mathematics
                  </Link>
                }
                link5={
                  <Link className="foot-link" to="/physics1-1">
                    Physics
                  </Link>
                }
              />
            </div>
            <div className="footerlinkstyle">
              <FooterLink
                title="Extras"
                subTitle=" "
                link1={
                  <Link className="foot-link" to="/accessories/#bsr">
                    Bus Route
                  </Link>
                }
                link2={
                  <Link className="foot-link" to="/accessories/#routine">
                    Routine
                  </Link>
                }
                link3={
                  <Link className="foot-link" to="/syllabus">
                    Syllabus
                  </Link>
                }
                link4={
                  <Link className="foot-link" to="/covid19updates">
                    Covid Updates
                  </Link>
                }
              />
            </div>{" "}
            <div className="footerlogostyle">
              <ul>
                <li>
                  <Link to="/">
                    <img className="rotating" src={Logo} alt="" srcSet />
                  </Link>
                </li>
                <li>
                  <span> Our Departmental Group : </span>
                  <h3>
                    <a
                      href="https://www.facebook.com/groups/fabricmanufacturingengineering46/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Fabric Engineering 46
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
            <div className="footerlinkstyle">
              <FooterLink
                title="Extras"
                subTitle=" "
                link1={
                  <Link className="foot-link" to="/accessories/#bsr">
                    Bus Route
                  </Link>
                }
                link2={
                  <Link className="foot-link" to="/accessories/#routine">
                    Routine
                  </Link>
                }
                link3={
                  <Link className="foot-link" to="/syllabus">
                    Syllabus
                  </Link>
                }
                link4={
                  <Link className="foot-link" to="/covid19updates">
                    Covid Updates
                  </Link>
                }
              />
            </div>{" "}
            <div className="footerlinkstyle">
              <FooterLink
                title="Developer Panel"
                subTitle="Suggest changes for deploying next version!"
                link1={
                  <Link className="foot-link" to="/developer">
                    Developer
                  </Link>
                }
                link2={
                  <a
                    className="foot-link"
                    href="mailto: arnob.tech.me@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mail
                  </a>
                }
                link3={
                  <a
                    className="foot-link"
                    href="https://github.com/Debug-Gremlins/Fabric-Engineering-Resource/blob/master/README.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Current Version &nbsp;
                    <img
                      src="https://img.shields.io/github/package-json/v/Debug-Gremlins/Fabric-Engineering-Resources?&labelColor=f4eee8&color=important&label=yarn Deployed&logo=Yarn&logoColor=blue&style=plastic"
                      alt="cq"
                      srcSet
                    />
                  </a>
                }
              />
            </div>{" "}
          </div>
          <div className="cpy-rgt">
            Copyright ©2021{" "}
            <span>
              <Link to="/">Fabric Engineering 46</Link>
            </span>{" "}
            All Rights Reserved
          </div>
          <OverlayButton className="footerOverlay">
            <a id="bottombce" href="#top">
              <i className="fa fa-arrow-circle-up" aria-hidden="true" />
              <span></span>
            </a>
          </OverlayButton>
        </div>
      </FooterArea>
    </div>
  );
}

export default Footer;

const FooterArea = styled.div`
  .footerlinkstyle,
  .footerlogostyle {
    width: 20%;
  }
  font-family: Ubuntu;
  padding: 90px 0px 10px;
  background: ${({ theme }) => theme.footerBG};
  position: relative;
  h3 {
    color: ${({ theme }) => theme.footerh3};
    font-size: 18px;
  }
  h4 {
    color: ${({ theme }) => theme.footerh4};
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.footerh5};
  }
  /* ul {
    text-align: left;
  } */
  ul li {
    line-height: 2;
    list-style-type: none;
  }
  ul li span {
    font-size: 16px;
    font-family: Ubuntu;
    color: ${({ theme }) => theme.footerSpan};
    display: inline-block;
    padding: 5px 0px;
  }
  ul li a {
    font-family: Poppins;
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.footerLinka};
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  ul li a:hover {
    opacity: 0.8;
  }
  .cpy-rgt {
    font-size: 20px;
    font-weight: 400;
    padding: 40px 0px 10px;
    color: ${({ theme }) => theme.footerCpyRgt};
    text-align: center;
  }
  .cpy-rgt span a {
    text-decoration: none;
    color: ${({ theme }) => theme.footerSpana};
    font-weight: 500;
  }
  .footerOverlay {
    margin: 0;
    bottom: 60px;
    right: 40px;
    position: absolute;
  }
  .foot-link {
    font-size: 16px;
    color: ${({ theme }) => theme.footerNav};
    margin: 5px 0px;
    font-weight: 400;
    padding: 0px;
    font-family: "Rubik";
  }
  .rotating {
    max-width: 100%;
  }

  @media (max-width: 991px) {
    .footerlinkstyle {
      width: 50%;
    }
    .footerlogostyle {
      width: 100%;
      text-align: center;
    }
    .rotating {
      max-width: 50% !important;
    }
  }
  @media (max-width: 767px) {
    .footerlinkstyle {
      width: 100%;
    }
    text-align: left;
    align-items: center;
    padding: 50px 0px 10px;
    .cpy-rgt {
      padding-top: 0px;
      font-size: 12px;
    }
    position: relative;
    ul li span {
      font-size: 18px;
    }
    ul li a {
      font-size: 15px;
    }
    ul li h4 {
      font-size: 17px;
    }
    ul li h5 {
      font-size: 16px;
    }
    .rotating {
      max-width: 50% !important;
    }
    .footerOverlay {
      bottom: 100px;
    }
  }
`;
