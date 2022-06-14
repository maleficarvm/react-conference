import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    // const thesismessage = this.props.data.thesismessage;
    // const pandemicmessage = this.props.data.pandemicmessage;
    const govmessage = this.props.data.govmessage;
    const orgmessage = this.props.data.orgmessage;
    const sertmessage = this.props.data.sertmessage;
    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.description}>
    //       <p className="info">
    //         <span>&bull;&nbsp;</span>
    //         <em className="date">{education.description}</em>
    //       </p>
    //     </div>
    //   );
    // });

    // const work = this.props.data.work.map(function (work) {
    //   return (
    //     <div key={work.description}>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });

    // const dates = this.props.data.dates.map(function (dates) {
    //   return (
    //     <div key={dates.date}>
    //       <p className="date">
    //         <b>{dates.date}</b>
    //         <span>&nbsp;&mdash;&nbsp;</span>
    //         <em className="date">{dates.description}</em>
    //       </p>
    //     </div>
    //   );
    // });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>О ПРОШЕДШЕЙ КОНФЕРЕНЦИИ</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{govmessage}</p>
              {/* <div className="row item">
                <div className="twelve columns">
                  <b>{education}</b>
                </div>
              </div> */}
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>О ЛЕКЦИЯХ</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* {work} */}
              <p>{sertmessage}</p>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skills">
            <div className="three columns header-col">
              <h1>
                <span>ИТОГИ</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* {dates} */}
              <p>{orgmessage}</p>
              {/* <p>{sertmessage}</p>
              <p>
                {thesismessage}&nbsp;
                <a
                  href="http://www.tsnigri.ru/ru/informatsionnye-resursy/izdaniya/zhurnal-otechestvennaya-geologiya.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  «Отечественная геология»
                </a>{" "}
                и{" "}
                <a
                  href="http://www.tsnigri.ru/ru/informatsionnye-resursy/izdaniya/zhurnal-rudy-i-metally.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  «Руды и металлы».
                </a>
              </p>
              <p className="warning">{pandemicmessage}</p>
              <p className="warning">
                {govmessage}
                &nbsp;
                <a href="https://www.mos.ru/" target="_blank" rel="noreferrer">
                  правительства г. Москвы.
                </a>
              </p> */}
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
