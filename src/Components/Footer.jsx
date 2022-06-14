import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer style={{ backgroundColor: "#0f0f0f" }}>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>ФГБУ&nbsp;«ЦНИГРИ»&nbsp;{new Date().getFullYear()} </li>
                <li>
                  Разработка сайта -{" "}
                  <a
                    title="Tsnigri"
                    href="http://www.tsnigri.ru/ru/about/structura/n-issledovatelskie-podrazdeleniya/nauchno-informatsionnoe-otdelenie/otgeoinfors.html"
                  >
                    Отдел ГИС ФГБУ «ЦНИГРИ»
                  </a>
                  &nbsp;и&nbsp;
                  <a
                    title="Github"
                    href="https://github.com/nordicgiant2/react-nice-resume"
                  >
                    Github Community
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="К началу" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
