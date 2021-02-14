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

import logo from "./../../images/logo/logo.svg";
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
                Finance is supposed to facilitate life, not hold it back. Proper management of money, understanding what to do with it, and not having to think about it unless you want to are the way we see finance and banking. 
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                className="home-subtitle-lower">
                We're going to help you get there, investing in you every step of the way so money is there when you need it and working for you when you don't.
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                className="home-subtitle-lower">
                Innovation has far outpaced the quality of the financial services you use and we're starting from scratch to fix it. Join us for this and we promise as an organization that we will do everything we can to move you forward.
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                className="home-caption"
              >
                <a href="https://taxes.fromstandard.com" style={{color: "#283596", textDecoration: "none"}}>
                  The first step is taxes because free money is a great facilitator for financial success, but that's only beginning. Check it out here.{" "}
                </a>
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </ThemeProvider>
  );
}
export default Home;
