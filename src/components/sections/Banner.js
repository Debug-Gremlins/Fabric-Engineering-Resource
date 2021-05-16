import React from "react";
import Bannerimg from "../../assets/banner.png";

function Banner() {
  return (
    <div>
      <section
        className="banner"
        style={{ backgroundImage: `url(${Bannerimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xsm-6" />
            <div className="banner-overlay text-left col-lg-6 col-md-6 col-sm-6 col-xsm-6">
              <h1>Free E-books</h1>
              <p>
                Textile Study Center is a virtual topic based library that will
                cover all textile topics. Textile students from any university
                can contribute here.They have categorized all the topics
                according to BUTEX syllabus.
              </p>
              <div className="btn">
                <a
                  href="https://textilestudycenter.com/textile-books-free-donwload/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="bnrwave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#c300ff40"
            fill-opacity="0.3"
            d="M0,320L48,277.3C96,235,192,149,288,106.7C384,64,480,64,576,106.7C672,149,768,235,864,261.3C960,288,1056,256,1152,218.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

export default Banner;
