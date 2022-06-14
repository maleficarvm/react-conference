import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import $ from "jquery";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Resume from "./Components/Resume.jsx";
import Contact from "./Components/Contact.jsx";
//import Register from "./Components/Register.jsx";
import Portfolio from "./Components/Portfolio.jsx";
//import Requirements from "./Components/Requirements.jsx";
import Notfound from "./Components/Notfound.jsx";
import Materials from "./Components/Materials.jsx";
import Photos from "./Components/Photos.jsx";
//import Register_bkp from "./Components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      siteData: {},
    };
  }

  getSiteData() {
    $.ajax({
      url: "./siteData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ siteData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getSiteData();
    console.info("Version 2.0.1");
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#0f0f0f" }}>
        <Routes>
          <Route
            path="/"
            element={[
              <Header data={this.state.siteData.main} key="1" />,
              <About data={this.state.siteData.main} key="2" />,
              <Resume data={this.state.siteData.resume} key="3" />,
              <Portfolio data={this.state.siteData.portfolio} key="4" />,
              <Contact data={this.state.siteData.main} key="5" />,
            ]}
          />
          {/* <Route
            path="/form"
            element={[
              <Register key="6" />,
              <Requirements data={this.state.siteData.resume} key="7" />,
            ]}
          /> */}
          <Route
            path="/materials"
            element={[
              <Photos key="8" />,
              <Materials data={this.state.siteData.resume} key="9" />,
            ]}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer data={this.state.siteData.main} />,
      </div>
    );
  }
}

export default App;
