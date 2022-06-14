import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./video/banner_2.png";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import { Slide } from "react-reveal";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
//import LinearProgress from "@mui/material/LinearProgress";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from "@material-ui/core";

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
    fontSize: 18,
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  textAlign: "center",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
};

const label = {
  fontSize: 12,
  marginBottom: 5,
  color: "#647373",
};

const upload = {
  fontFamily: ["Montserrat"],
  color: "#647373",
};

const validate = (values) => {
  const errors = {};

  const message = "Поле обязательно для заполнения!";

  if (!values.name) {
    errors.name = message;
  }
  if (!values.organisation) {
    errors.organisation = message;
  }
  if (!values.address) {
    errors.address = message;
  }
  if (!values.email) {
    errors.email = message;
  }
  if (!values.phone) {
    errors.phone = message;
  }
  if (!values.report) {
    errors.report = message;
  }
  if (!values.participation) {
    errors.participation = message;
  }
  if (!values.coAuthors) {
    errors.coAuthors = message;
  }
  return errors;
};

export default function Register2() {
  // const valuesRef = useRef({});
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const send = (event) => {
    const thesis = new FormData();
    thesis.append("file", file);

    axios
      .post("http://localhost:4200/upload", thesis)
      .then((res) => {
        // console.log(res);
      })
      .catch((res) => console.log(res));
  };

  const onSubmit = async (values) => {
    //console.log(JSON.stringify(values));

    const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    values.time = currentTime;
    // console.log("Values: ", values);

    axios
      .post("http://localhost:4200/signup", values)
      .then((res) => {
        const response = res.data;
        // console.log(res);
        if (response.title === "Success") {
          handleOpen();
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Не удалось зарегистрироваться! Мы уже работаем над этим, попробуйте зарегистрироваться позже."
        );
        handleOnClick();
      });
  };

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
            <a href="#home">Регистрация</a>
          </li>

          <li>
            <a href="#resume">Требования</a>
          </li>

          <li>
            <Link to="/materials">Материалы</Link>
          </li>
        </ul>
      </nav>
      <section style={banner.container} id="home">
        <div style={{ padding: 16, margin: "auto", maxWidth: 800 }}>
          <CssBaseline />
          <div style={{ marginTop: 50 }}>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ form, handleSubmit, submitting, pristine }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Slide left duration={500}>
                    <Paper style={{ padding: 16 }}>
                      <Typography
                        variant="h4"
                        align="center"
                        component="h4"
                        gutterBottom
                      >
                        Регистрационная форма участника конференции
                      </Typography>
                      <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="name"
                            component={TextField}
                            multiline
                            label="ФИО (полностью) *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="graduate"
                            component={TextField}
                            multiline
                            label="Ученая степень, ученое звание"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="position"
                            component={TextField}
                            multiline
                            label="Должность"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="organisation"
                            component={TextField}
                            multiline
                            label="Название организации *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="address"
                            component={TextField}
                            multiline
                            label="Адрес организации *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="email"
                            component={TextField}
                            multiline
                            label="Email *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="phone"
                            component={TextField}
                            multiline
                            label="Контактный телефон *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="report"
                            component={TextField}
                            multiline
                            label="Название доклада *"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="participation"
                            component={Select}
                            label="Форма участия в конференции *"
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value="Устное выступление">
                              Устное выступление
                            </MenuItem>
                            <MenuItem value="Стендовый доклад">
                              Стендовый доклад
                            </MenuItem>
                            <MenuItem value="Онлайн выступление">
                              Онлайн выступление
                            </MenuItem>
                            <MenuItem value="Заочное участие">
                              Заочное участие
                            </MenuItem>
                            <MenuItem value="Слушатель">Слушатель</MenuItem>
                          </Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="coAuthors"
                            component={TextField}
                            multiline
                            label="Сведения о соавторах (ФИО, ученая степень, организация, должность соавтора) *"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <br />
                          <label style={label}>
                            Загрузить тезисы (макс. 20 мб)
                          </label>
                          <input
                            style={upload}
                            type="file"
                            name="file"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              setFile(file);
                            }}
                          ></input>
                        </Grid>

                        <Grid item style={{ marginTop: 16 }}>
                          <Button
                            size="large"
                            type="button"
                            variant="contained"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                          >
                            Очистить
                          </Button>
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                          <Button
                            style={{
                              backgroundColor: "#c1a365",
                            }}
                            size="large"
                            variant="contained"
                            color="default"
                            type="submit"
                            disabled={submitting}
                            onClick={send}
                          >
                            Зарегистрироваться
                          </Button>
                        </Grid>
                      </Grid>
                      {/* <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          style={{ color: "primary", margin: 20 }}
                        />
                      </Box> */}
                    </Paper>
                  </Slide>

                  <CssBaseline />

                  <Modal
                    open={open}
                    onClose={handleOnClick}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h5"
                      >
                        Спасибо за регистрацию!
                      </Typography>
                      <br />
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Следите за новостями о конференции на нашем сайте или в
                        группе VK
                      </Typography>
                      <br />
                      <Button
                        style={{
                          backgroundColor: "#c1a365",
                        }}
                        size="small"
                        type="button"
                        onClick={handleOnClick}
                      >
                        Закрыть
                      </Button>
                    </Box>
                  </Modal>

                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              )}
            />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
