import React from "react";

function Physics() {
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
              {/* table starts here */}
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
                  <tr>
                    <td>01 Oct, 2020</td>
                    <td>Harun Sir</td>
                    <td>Fly Wheel</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1Ng3E55FjfAGMIRgjp0BCG6nT8Zq-weBu/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01 Oct, 2020</td>
                    <td>Harun Sir</td>
                    <td>Concept of Inertia</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1K2_9bngfjFfFWkYp3oT4pACOgjEpIs1l/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>12 Nov, 2020</td>
                    <td>Harun Sir</td>
                    <td>Moment of Inertia</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/15r_u5Q7k9K04qIgBZR_Aif-rrDJiv66W/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>26 Nov, 2020</td>
                    <td>Harun Sir</td>
                    <td>Elasticity (Part 1)</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1ejTl2ONkDBS5Tuxzy6yK6zhuBJ01LmKu/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Dec, 2020</td>
                    <td>Harun Sir</td>
                    <td>Three Modulases</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1pfrBVEhOiSnhqenrL6ovg3E2GyMrrzRf/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>07 Jan, 2021</td>
                    <td>Harun Sir</td>
                    <td>Bending of Beams</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1G8-UqWqwDrP79TuO-jBuFpLTtH-gaQ4z/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>21 Jan, 2021</td>
                    <td>Harun Sir</td>
                    <td>Elasticity Math</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1aMh3Q3VvcyPfAYG-4LbeaiMV3rbfJr6o/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>04 Feb, 2021</td>
                    <td>Harun Sir</td>
                    <td>Fluid Mechanics (Part 1)</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1lV6KuPJisxUnjSUAsCtSlAqkb2HjVv18/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>25 Mar, 2021</td>
                    <td>Hedayet Sir</td>
                    <td>Polarization (Part 1)</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/1BUK8IFFVRR5s-zLzKnAMmTeuVWmXP22J/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>17 Apr, 2021</td>
                    <td>Hedayet Sir</td>
                    <td>Polarization (Part 2)</td>
                    <td className="link">
                      <a
                        href="https://drive.google.com/file/d/18lHBZLOZjepNacd9GDso_RJvQkhk-WhZ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lecture Video
                      </a>
                    </td>
                  </tr>
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

export default Physics;
