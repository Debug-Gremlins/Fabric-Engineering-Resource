import React, { Component } from "react";
import styled from "styled-components";
import { FcBinoculars } from "react-icons/fc";
import { IconContext } from "react-icons";
import bannerImg from "../../assets/topbnrbg.jpg";

class UpperBanner extends Component {
  render() {
    return (
      <div>
        <TopBannerArea>
          <div className="top-bnr-overlay">
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
                        <IconContext.Provider value={{ size: "25" }}>
                          Learn More <FcBinoculars />
                        </IconContext.Provider>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TopBannerArea>
      </div>
    );
  }
}

export default UpperBanner;

const TopBannerArea = styled.div`
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .top-bnr-overlay {
    height: inherit;
    background-color: rgba(18, 20, 20, 0.603);
  }
  .top-over-details-part {
    padding: 250px 0px;
  }

  .top-over-details-part h1 {
    font-family: "Ubuntu";
    color: #e0245e;
    font-size: 3rem;
  }

  .top-over-details-part p {
    padding-top: 15px;
    font-size: 18px;
    text-align: center;
  }
  .home-shield {
    position: absolute;
    bottom: 110px;
    right: 20px;
  }

  @media (max-width: 991px) {
    .home-shield {
      position: absolute;
      bottom: 55px;
      right: 20px;
    }
    .top-over-details-part {
      padding: 240px 0px 100px;
    }
  }

  @media (max-width: 767px) {
    .home-shield {
      position: absolute;
      bottom: 40px;
      right: 10px;
    }
    .top-over-details-part h1 {
      font-size: 1.1 rem;
    }
    .top-over-details-part p {
      font-size: 1rem;
    }
    .top-over-details-part {
      padding: 185px 0px 120px;
    }
    .top-over-details-part h1 {
      font-size: 30px;
    }

    .top-over-details-part p {
      font-size: 16px;
      text-align: justify;
      padding: 30px;
    }
  }
`;
