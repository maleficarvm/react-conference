import React from "react";
import Image from "./video/banner_3.png";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import { Button } from "@material-ui/core";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import itemData from "./photos/ItemData";

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

const onDownload = () => {
  const link = document.createElement("a");
  link.href = "http://localhost:3000/zip/photos.zip";
  link.click();
};

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
          <li>
            <Link to="/">На главную</Link>
          </li>
          <li>
            <a href="#home">Фото</a>
          </li>
          <li>
            <a href="#resume">Видео</a>
          </li>
          {/* <li>
            <Link to="/form">Регистрация</Link>
          </li> */}
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
            <Fade left duration={1200}>
              <h5 style={{ textTransform: "uppercase", marginTop: -40 }}>
                Фотоматериалы
              </h5>
              <div>
                <ImageList
                  sx={{ width: 1280, height: 700 }}
                  cols={5}
                  rowHeight={196}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        style={{ marginBottom: -35 }}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Fade>
            <Button
              size="medium"
              type="button"
              variant="contained"
              color="default"
              onClick={onDownload}
            >
              <i className="fa fa-download"></i>
              <span style={{ fontSize: 14, marginLeft: 10 }}>Скачать фото</span>
            </Button>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
