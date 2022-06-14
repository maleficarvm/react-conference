import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  render() {
    const url = "http://localhost:3000/zip/";

    if (!this.props.data) return null;

    const precious = this.props.data.precious.map(function (precious) {
      return (
        <div key={precious.name}>
          <p>
            <a href={`${url}${precious.link}`} download>
              {precious.name}
            </a>
            {precious.description}
          </p>
        </div>
      );
    });

    const base = this.props.data.base.map(function (base) {
      return (
        <div key={base.name}>
          <p>
            <a href={`${url}${base.link}`} download>
              {base.name}
            </a>
            {base.description}
          </p>
        </div>
      );
    });

    const diamonds = this.props.data.diamonds.map(function (diamonds) {
      return (
        <div key={diamonds.name}>
          <p>
            <a href={`${url}${diamonds.link}`} download>
              {diamonds.name}
            </a>
            {diamonds.description}
          </p>
        </div>
      );
    });

    const gis = this.props.data.gis.map(function (gis) {
      return (
        <div key={gis.name}>
          <p>
            <a href={`${url}${gis.link}`} download>
              {gis.name}
            </a>
            {gis.description}
          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        <h1>Видеоматериалы</h1>
        <br />
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Секция благородных металлов</span>
              </h1>
            </div>
            <div className="nine columns main-col">{precious}</div>
            <div className="nine columns main-col">
              {/* <a href="/#" download="precious">
                Скачать архив
              </a> */}
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Секция цветных металлов</span>
              </h1>
            </div>
            <div className="nine columns main-col">{base}</div>
            <div className="nine columns main-col">
              {/* <a href="/#" download="base">
                Скачать архив
              </a> */}
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Секция алмазов</span>
              </h1>
            </div>
            <div className="nine columns main-col">{diamonds}</div>
            <div className="nine columns main-col">
              {/* <a href="/#" download="diamonds">
                Скачать архив
              </a> */}
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Секция ГИС, геофизики, экономики и технологии</span>
              </h1>
            </div>
            <div className="nine columns main-col">{gis}</div>
            <div className="nine columns main-col">
              {/* <a href="/#" download="gis">
                Скачать архив
              </a> */}
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
