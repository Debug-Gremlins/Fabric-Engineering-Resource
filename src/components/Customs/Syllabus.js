import React from "react";
import { Component } from "react";
import data from "../../json/syllabus-data.json";
import styled from "styled-components";

class Syllabus extends Component {
  render() {
    return (
      <div>
        <SyllabusArea>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="sylb col-lg-9 col-md-12 col-sm-12">
                <div className=" card">
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
                          <td>
                            <div className="btn">
                              <a
                                href={row.driveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </SyllabusArea>
      </div>
    );
  }
}

export default Syllabus;

const SyllabusArea = styled.div`
  padding: 200px 0px 40px;
  .sylb .btn {
    margin: 5px 0px;
    border: 2px solid #093d68;
  }
  .sylb .btn a {
    color: #093d68;
  }

  .sylb .btn:hover {
    background-color: #093d68;
    border: 2px solid transparent;
  }

  .sylb .btn:hover a {
    color: #a89f9f;
  }

  .sylb section table tr {
    display: -ms-flexbox;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 25px;
  }

  .sylb section table tr td {
    padding: 20px 5px;
    width: 50%;
  }

  .sylb table tr td {
    justify-content: space-between;
    padding: 10px;
    font-weight: 300;
    height: auto;
  }

  .sylb .card {
    background-color: #ffffb299;
    align-items: inherit;
  }

  @media (max-width: 767px) {
    padding: 0;
    margin-top: 170px;

    table tr td:first-child,
    section table tr td:nth-child(2) {
      width: 50% !important;
    }

    h2 {
      font-size: 26px;
      font-weight: 400;
    }
    .sylb table tr td:first-child,
    .sylb table tr td:nth-child(2) {
      width: 50% !important;
    }

    .sylb h2 {
      font-size: 26px;
      font-weight: 400;
    }
    .card {
      text-align: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 30px 0px;
    }
  }
`;
