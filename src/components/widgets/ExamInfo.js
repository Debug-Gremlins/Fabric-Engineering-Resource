import React, { Component } from "react";
import dataImg from "../../assets/data.png";

export class ExamInfo extends Component {
  render() {
    return (
      <div>
        <section className="info">
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
        </section>
      </div>
    );
  }
}

export default ExamInfo;
