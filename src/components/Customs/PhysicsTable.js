import React from "react";
import { Component } from "react";
import data from "../../json/physics-data.json";

class Physics extends Component {
  render() {
    return (
      <div>
        <section className="phy" data-aos="fade-up" data-aos-duration={3000}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="section-title">
                  <h1>Physics</h1>
                </div>
                <div className="overlaybttn">
                  <a id="topphy" href="#bottomphy">
                    <i className="fa fa-arrow-circle-down" aria-hidden="true" />
                    <span>Bottom</span>
                  </a>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Lecturer</th>
                      <th>Discussed Topics</th>
                      <th colSpan={3}>Resources</th>
                    </tr>
                  </tbody>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.key}>
                        <td>{row.Date}</td>
                        <td>{row.Lecturer}</td>
                        <td>{row.DiscussedTopics}</td>
                        <td className="link">
                          <a
                            href={row.DriveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Lecture Video
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="overlaybttn">
                  <a id="bottomphy" href="#topphy">
                    <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                    <span>Top</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Physics;
