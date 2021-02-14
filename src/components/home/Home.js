import "./home.css";
import "../../styles.css";

import {
  ThemeProvider,
  AppBar,
  Zoom,
  Typography,
  Button,
  Fade,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core/";
import { EmbeddedEmailInput } from "../inputs/Inputs.js";
import { primaryTheme, fadeDefault } from "../../utils/constants.js";
import { useHistory, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect, forwardRef } from "react";

import logo from "./../../images/logo/logo-white.svg";
import ButtonGroup from "antd/lib/button/button-group";

function Home(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  let referById = "";

  return (
    <ThemeProvider theme={primaryTheme}>
      <div className="page-root row-container">
        <Fade in {...fadeDefault}>
          <div className="home-c0 column-container">
            <div className="home-c1 row-container">
              <img src={logo} style={{marginBottom: "50px"}}/>
              <Typography
                variant="body1"
                color="secondary"
                className="home-subtitle-lower">
                Finance facilitates life.
              </Typography>
            </div>
          </div>
        </Fade>
      </div>
    </ThemeProvider>
  );
}
export default Home;
