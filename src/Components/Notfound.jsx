import React from "react";
import Image from "./video/banner_3.png";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import { Typography } from "@material-ui/core";

const banner = {
  container: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 32,
    color: "#fff",
  },
});

export default function Notfound() {
  return (
    <ThemeProvider theme={theme}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Показать навигацию">
          Показать навигацию
        </a>
        <a className="mobile-btn" href="#home" title="Скрыть навигацию">
          Скрыть навигацию
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <Link to="/">На главную</Link>
          </li>
        </ul>
      </nav>
      <section style={banner.container} id="home">
        <div style={{ padding: 16, margin: "auto", height: 950 }}>
          <div
            className="banner-text"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Fade bottom duration={1200}>
              <Typography
                component={"span"}
                variant={"h3"}
                style={theme.typography}
              >
                <p>404: СТРАНИЦА НЕ СУЩЕСТВУЕТ!</p>
              </Typography>
              <Link to="/">На главную</Link>
            </Fade>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
