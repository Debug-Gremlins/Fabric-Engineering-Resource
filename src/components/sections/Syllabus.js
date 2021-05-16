import React from "react";
import data from "../../json/syllabus-data.json";

function Syllabus() {
  return (
    <div>
      <section className="sylb">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="card">
                <table>
                  <tr>
                    <td>
                      <h2>Level-Term</h2>
                    </td>
                    <td>
                      <h2>Syllabus</h2>
                    </td>
                  </tr>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.key}>
                        <td>
                          <h5>{row.levelterm}</h5>
                        </td>
                        <div className="btn">
                          <a
                            href={row.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        </div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Syllabus;
