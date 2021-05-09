import React from 'react'

function Math() {
    return (
      <div>
        <section className="math" data-aos="fade-up" data-aos-duration={3000}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="section-title">
                  <h1>Mathematics</h1>
                </div>
                <div className="overlaybttn">
                  <a id="topmath" href="#bottommath">
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
                      <td>07 Oct, 2020</td>
                      <td>Anup Sir</td>
                      <td>Mean Value Theorem</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1j1RsiV8ulW1DbfEsqopN27x7BC7mzfCP/view"
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
                      <td>07 Oct, 2020</td>
                      <td>Anup Sir</td>
                      <td>Rolle's Theorem</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1GK-NzbKdagLGFm1BQIhHa3-kSAsUHhkR/view"
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
                      <td>14 Oct, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Linerar Algebra (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1FjkCgErNl3NYTt7wNPztnU-LR5AcWxxv/view"
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
                      <td>11 Nov, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Gaussian Elimination</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1n76i1i248WlA7_XkidHa2Evu38O-URR-/view"
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
                      <td>18 Nov, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Matrix (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1rOQCdbMb5RE1N8OtyAZmAk6Ii_Tietbl/view"
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
                      <td>25 Nov, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Canonical form of Matrix</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1I3iG-PbkMqcWdyBA3b0yjs2EVhN2t5kQ/view"
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
                      <td>02 Dec, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Eigenvalues &amp; Eigenvectors</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1NQKtTSRW0nUW4rJql0dqgMlJINXaUwu6/view"
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
                      <td>09 Dec, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Rank of Matrix</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1nNP0pJtxRs006TwyXxqgjej1cipDuXjc/view"
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
                      <td>30 Dec, 2020</td>
                      <td>Anwar Sir</td>
                      <td>Coordinate Geometry (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1Z6E_sGM6-x-BbWPHqckk-DYkUp610u2Y/view"
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
                      <td>06 Jan, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Coordinate Geometry (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1RJ5mV_hCfVVAr5F0QmG94DpYcbq5_jn2/view"
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
                      <td>13 Jan, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Pair of Straight Lines</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/18qrma8StI_BR5sr41vt5AVv6UOnFmWxj/view"
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
                      <td>13 Jan, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Δ Analysis</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/16i7pru5FWvJwlEmnAMNG6siqEfngPTyy/view"
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
                      <td>20 Jan, 2021</td>
                      <td>Anwar Sir</td>
                      <td>2D Conics</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/15wwZTX5O4_WyK9e232Odz2FGfSu8ez0f/view"
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
                      <td>27 Jan, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Direction Cosine</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1ljhQ9U66atC7Xcy6oWTNnKCX-QjSUj1j/view"
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
                      <td>03 Feb, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Plane</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1mLM20I2shA7wXg4Ws-_Lfa4sA6BVbbmS/view"
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
                      <td>10 Feb, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Straight Line</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1MtEht0AY9hr6K_ddNFZjTorODDtTMjNE/view"
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
                      <td>17 Feb, 2021</td>
                      <td>Anwar Sir</td>
                      <td>Straight Line Review</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1wSDPjXMC-_iGffXGVuH3odjXIvSvE0Ph/view"
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
                      <td>18 Apr, 2021</td>
                      <td>Anup Sir</td>
                      <td>Integration (Part 1)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1e2YMEZTQtLVwH4352Ksfgr2PEuCUp5JC/view"
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
                      <td>19 Apr, 2021</td>
                      <td>Anup Sir</td>
                      <td>Integration (Part 2)</td>
                      <td className="link">
                        <a
                          href="https://drive.google.com/file/d/1A28QgB-esUhBQf0d3_wxPDf1jdtdK3cb/view"
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
                  <a id="bottommath" href="#topmath">
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

export default Math
