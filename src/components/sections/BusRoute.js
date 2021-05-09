import React from 'react'
import AzimpurBus from '../../assets/Azimpur Route.png'
import UttaraBus from '../../assets/Uttara Route.png'
import MirpurBus from '../../assets/Mirpur Route.png'
import PurandhkBus from '../../assets/Jatrabari Route.png'

function BusRoute() {
    return (
      <div>
        <section
          id="bsr"
          className="bus-route"
          data-aos="fade-up"
          data-aos-duration={3000}
        >
          <div className="container text-center">
            <div className="section-title">
              <h1>Bus Routes</h1>
            </div>
            <div className="row">
              <div
                className="card bus1 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h2>Uttara Route</h2>
                <img src={  UttaraBus} alt="" srcSet />
              </div>
              <div
                className="card bus2 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h2>Mirpur Route</h2>
                <img src={MirpurBus} alt="" srcSet />
              </div>
              <div
                className="card bus3 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h2>Azimpur Route</h2>
                <img src={AzimpurBus} alt="" srcSet />
              </div>
              <div
                className="card bus4 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={3000}
              >
                <h2>Jatra Bari Route</h2>
                <img src={PurandhkBus} alt="" srcSet />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default BusRoute
