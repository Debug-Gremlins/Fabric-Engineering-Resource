import React from 'react'

function CounterUp() {
    return (
      <div>
        <section
          className="counter-area"
          data-aos="fade-up"
          data-aos-duration={3000}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-4 col-md-4 col-sm-3 single-class">
                <div className="card">
                  <h1>BCE</h1>
                  <h2 className="count">20</h2>
                  <p>Lectures</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-3 single-class">
                <div className="card">
                  <h1>Chemistry</h1>
                  <h2 className="count">30</h2>
                  <p>Lectures</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-3 single-class">
                <div className="card">
                  <h1>Math</h1>
                  <h2 className="count">20</h2>
                  <p>Lectures</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-3 single-class">
                <div className="card">
                  <h1>NTF</h1>
                  <h2 className="count">30</h2>
                  <p>Lectures</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-3 single-class">
                <div className="card">
                  <h1>Physics</h1>
                  <h2 className="count">20</h2>
                  <p>Lectures</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default CounterUp
