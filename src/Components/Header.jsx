import React, { Component } from "react";
import Fade from "react-reveal";
// import Countdown from "./UI/Countdown.jsx";
import { Link } from "react-router-dom";
// import RegisterForm from "./UI/Form";

class Header extends Component {
  state = {
    showModal: false,
  };
  // creating a toggle function that will be passed down to any children of this container that need to toggle the modal on or off
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const organization = this.props.data.organization;
    const domain = this.props.data.domain;
    const bgImage = "images/banner.png";

    return (
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <header id="home">
          <nav id="nav-wrap">
            <a
              className="mobile-btn"
              href="#nav-wrap"
              title="Показать навигацию"
            >
              Показать навигацию
            </a>
            <a className="mobile-btn" href="#home" title="Скрыть навигацию">
              Скрыть навигацию
            </a>

            <ul id="nav" className="nav">
              <li>
                <a href="#home">О конференции</a>
              </li>

              <li>
                <a href="#about">Контакты</a>
              </li>

              <li>
                <a href="#resume">Итоги</a>
              </li>

              <li>
                <a href="#portfolio">Наши лекторы</a>
              </li>

              <li>
                <a href="#contact">Как нас найти</a>
              </li>

              {/* <li>
                <Link to="/form">Регистрация</Link>
              </li> */}

              <li>
                <Link to="/materials">Материалы</Link>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <Fade bottom duration={1200}>
                <h3>{domain}</h3>
              </Fade>
              <Fade bottom duration={1200}>
                <h3>{organization}</h3>
              </Fade>
              <Fade bottom>
                <h2 className="responsive-headline">{name}</h2>
              </Fade>
              <Fade bottom duration={1200}>
                <h3>{description}</h3>
              </Fade>
              <Fade bottom duration={2000}>
                <ul className="social">
                  <a
                    href={project}
                    target="_blank"
                    rel="noreferrer"
                    className="button btn project-btn"
                  >
                    <i className="fa fa-search"></i>Перейти на сайт
                  </a>
                  <Link to="/materials">
                    <button
                      // onClick={this.toggleModal}
                      className="button btn github-btn"
                    >
                      <i className="fa fa-folder"></i>
                      Материалы
                    </button>
                  </Link>
                  {/* <Link to="/form">
                    <button className="button btn github-btn">
                      <i className="fa fa-check"></i>
                      Регистрация
                    </button>
                  </Link> */}
                </ul>
              </Fade>
              {/* <Fade bottom duration={2000}>
                <Countdown
                  timeTillDate="02 16 2023, 9:00 am"
                  timeFormat="MM DD YYYY, h:mm a"
                />
              </Fade> */}
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </section>
    );
  }
}

export default Header;
