import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    const rules = this.props.data.rules.map(function (rules) {
      return (
        <div key={rules.description}>
          <p className="info">
            <span>&bull;&nbsp;</span>
            <em className="date">{rules.description}</em>
          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Требования к тезисам</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{rules}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
