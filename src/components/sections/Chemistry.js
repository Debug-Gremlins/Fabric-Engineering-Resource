import React from 'react'

function Chemistry() {
    return (
      <div>
        <section className="chem" data-aos="fade-up" data-aos-duration={3000}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="section-title">
                  <h1>Chemistry</h1>
                </div>
                <div className="overlaybttn">
                  <a id="topchem" href="#bottomchem">
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
                      <td>06 Oct, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Dilute Solution (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1q2C3Wrqt-ykPdWJrmYK95apoaWCNQKHG/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>06 Oct, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Dilute Solution (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1qAsxK2bjY9GaoodKGzKBDeJ7CH-whr7E/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>13 Oct, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Raoults Law</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1_fohdX4xDnc4YJAXIybEh0k-dJcKgZ2D/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>10 Nov, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Dilute Solution Properties</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1Q5b_fWfAiORCA4WAHIT1cC0oSdDg2ncm/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>19 Nov, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Chemical Kinetics</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1Q0N6iqA6Ynzay4QFW2ytaKyvXYKPaWe8/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>24 Nov, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Order of Reaction</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/16M6dQYhHHXzQsB7AKh17WIOudExL93jp/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>01 Dec, 2020</td>
                      <td>Samiul Sir</td>
                      <td>Arrhenius Equation</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/11VfCNhvUpjdZXdvVRq_HqsbOvED58l-V/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>12 Dec, 2020</td>
                      <td>Sadia Mam</td>
                      <td>Periodicity of Element (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1W2N5bp6PTxMUI6jT_FUX6aiDtccH8UDI/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>29 Dec, 2020</td>
                      <td>Sadia Mam</td>
                      <td>Periodicity of Element (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1Fm2oNIniZw-v8KwhvBW3zcd-6RBYSr4I/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>05 Jan, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Acid Base (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1QY0KtOfoS_Dew-OlqnmirO4F3s1KbRsC/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>12 Jan, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Acid Base (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/16jU8JDs6nYZY4-gPfEo2aecFTFtzFTs4/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>19 Jan, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Acid Base (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/18MoumrU1Izh073ur73uVZXZUaJ9AHSlo/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>28 Jan, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Analytical Analysis (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1SljKBJBRUB5_S5U93Pgqco2VOHVq1wQK/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>20 Feb, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Analytical Analysis(Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1VHLBt1npZldHuIhrCETQ55PQmnRnAS6v/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>2 Feb, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Photochemistry (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1qCgjmOEfJlyyNRLjU3XuXTRA6vjgrZp1/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>4 Feb, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Photochemistry (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1D70reGPGc91nzaMQIiSItfRQbiuZYHei/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>11 Feb, 2021</td>
                      <td>Sadia Mam</td>
                      <td>Photochemistry (Part 3)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1SZaWnnzc5sMucua_0UJDMrM_HbJslAQc/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>23 Feb, 2021</td>
                      <td>Farzana Mam</td>
                      <td>Complex Compound (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1T_T_k5_WWFCwsRz_Hfm8IIKcQaQAs1Jn/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>02 Mar, 2021</td>
                      <td>Farzana Mam</td>
                      <td>Complex Compound (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1S5pI9tMznR3RePYjYEd0pbyfTCZkQ9iZ/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>09 Mar, 2021</td>
                      <td>Farzana Mam</td>
                      <td>Effective Atomic Number</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1SsDtdjLkWbeN4XVGW_qPdJj8cJF-LqFs/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                    <tr>
                      <td>18 Mar, 2021</td>
                      <td>Farzana Mam</td>
                      <td>Warners Theory</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1BVAjQh5N84SQ8VxShpVMhS_OMVe1M-_s/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lecture Video
                        </a>
                      </td>
                      <td className="link">--</td>
                      <td className="link">--</td>
                    </tr>
                  </tbody>
                </table>
                <div className="overlaybttn">
                  <a id="bottomchem" href="#topchem">
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

export default Chemistry
