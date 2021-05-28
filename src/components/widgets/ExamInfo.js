import React, { Component } from "react";
import dataImg from "../../assets/data.png";
import styled from "styled-components";

export class ExamInfo extends Component {
  render() {
    return (
      <div>
        <InfoArea>
          <div className="container">
            <div className="row text-center align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={dataImg} alt="dataImg" srcSet />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1>
                  CT & Term Exam related updates! <br></br>Content coming soon🖤
                </h1>
              </div>
            </div>
          </div>
        </InfoArea>
      </div>
    );
  }
}

export default ExamInfo;

const InfoArea = styled.div`
  padding: 200px 0px 100px;
  img {
    max-width: 80%;
  }
  h1 {
    font-size: 24px;
    text-align: center;
    color: brown;
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    padding: 180px 0px 50px;
    h1 {
      padding-top: 40px;
      font-size: 20px;
    }
  }
`;
