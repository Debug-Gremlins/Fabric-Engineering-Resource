import React from 'react'
import vct1 from "../../assets/stock1.png";
import vct2 from "../../assets/stock2.png";
import vct3 from "../../assets/bus.png";
import vct4 from "../../assets/syl.png";

function Vector() {
    return (
      <div>
        <section className="vct">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <img src={vct1} alt="" srcSet />
              </div>
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h1>Fabric Engineering</h1>
                <hr />
                <p>
                  Fabric Engineering is one of the basic textile engineering
                  branches with its large application in weaving, knitting and
                  non-woven. The purpose of this department is to develop
                  engineers who, in combination of their knowledge, skills and
                  latest technologies, can face challenge of the market and
                  ensure product quality to meet the demand of the time.
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
        </section>
        <section className="vct2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h1>Resources</h1>
                <hr />
                <p>
                  As the pandemic is going on the classes have been replaced by
                  online. Unlike physical classes the online classes necessary
                  stuffs are provided by teachers. To keep these stuffs in a
                  secured place Resources section has been utilized. Resources
                  section will provide the online stuffs in real time data
                  sequentially!
                </p>
              </div>
              <div
                className="col-lg-6 text-right"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <img src={vct2} alt="" srcSet />
              </div>
            </div>
          </div>
        </section>
        <section className="vct3">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <img src={vct3} alt="" srcSet />
              </div>
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h1>Bus Routes</h1>
                <hr />
                <p>
                  Bangladesh University of Textiles (BUTEX) has 4 buses for 4
                  different routes! Bus Route section provides the routes and
                  time schedule of those buses.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="vct4">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h1>Syllabus</h1>
                <hr />
                <p>
                  Fabric Engineering Department's Level &amp; Term-wise syllabus
                  are provided into Syllabus Page!
                </p>
              </div>
              <div
                className="col-lg-6 text-left"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <img src={vct4} alt="" srcSet />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Vector
