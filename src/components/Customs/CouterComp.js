import React, { Component } from "react";

class CouterComp extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h1>{this.props.title}</h1>
          <h2 className="count">{this.props.num}</h2>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}

export default CouterComp;
