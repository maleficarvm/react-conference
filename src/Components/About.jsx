import React, { Component } from "react";
import Fade from "react-reveal";
import ReactPlayer from "react-player";
import Video from "./video/video.mp4";
import "./video/Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const tsnigrilogo = "images/tsnigrilogo.jpg";
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const building = this.props.data.address.building;
    const chief = this.props.data.chief;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;
    const youngVoice = this.props.data.youngvoice;
    const vkGroup = this.props.data.vkgroup;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={tsnigrilogo} alt="Pic" />
              <br />
              <br />
              <img className="profile-pic" src={profilepic} alt="Pic" />
            </div>
            <div className="nine columns main-col">
              <h2>Уважаемые коллеги!</h2>

              <p>{bio}</p>

              <div className="row">
                <div className="columns contact-details">
                  <h2>Контакты</h2>
                  <p className="address">
                    <span>{chief}</span>
                    <br />
                    <span>
                      {city}
                      <br />
                      {street} {building}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                    <br />
                    <FontAwesomeIcon icon={faTelegram} />
                    &nbsp;
                    <FontAwesomeIcon icon={faWhatsapp} />
                    &nbsp;
                    <span>+7 (925) 903-46-50</span>
                  </p>
                </div>

                <div className="columns download">
                  <p>
                    <a
                      href={vkGroup}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Сборник тезисов
                    </a>
                    <a
                      href={youngVoice}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <i className="fa fa-external-link" />
                      Голос молодежи
                    </a>
                    <a
                      href={vkGroup}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <i className="fa fa-external-link" />
                      Фотоотчет в группе VK
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns center">
              <div className="player-wrapper">
                <ReactPlayer
                  controls={true}
                  playing
                  loop
                  muted
                  url={Video}
                  type="video/mp4"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
