import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  ThemeProvider,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { primaryTheme } from "../../utils/constants.js";
import "./inputs.css";
import "../../styles.css";

const InputTypes = {
  TextInput,
  EmbeddedEmailInput
};

export const Input = (props) => {
  let SelectedInput = InputTypes[props.type];
  return <SelectedInput {...props} />;
};

export function TextInput(props) {
  const checkValid = (val) => {
    if (val.length > 6) {
      try {
        props.setValid(true);
      } catch {}
    } else {
      try {
        props.setValid(false);
      } catch {}
    }
  };

  const ValidationTextField = props.invalid ? (
    <TextField
      error
      helperText={props.helperText}
      type={props.type}
      label={props.label}
      className="form-item-text-field"
      variant="outlined"
      value={props.value}
      onKeyPress={(e, valid) => props.onKeyPress(e, valid)}
      InputProps={{ disableUnderline: true }}
      onChange={(e) => {
        props.onChange(e.target.value, { stateName: props.stateName });
        checkValid(e.target.value);
      }}
    />
  ) : (
    <TextField
      type={props.type}
      className="form-item-text-field"
      variant={props.invalid ? "standard" : "outlined"}
      value={props.value}
      placeholder={props.placeholder}
      style={{
        paddingLeft: "3px",
      }}
      onKeyPress={(e, val) => props.onKeyPress(e, val)}
      InputProps={{ disableUnderline: true }}
      onChange={(e) => {
        props.onChange(e.target.value, { stateName: props.stateName });
        checkValid(e.target.value);
      }}
    />
  );
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className="embedded-email-input-container form-item-container column-container">
        {ValidationTextField}
      </div>
    </ThemeProvider>
  );
}

export function EmbeddedEmailInput(props) {
  const [valid, setValid] = useState(false);

  const checkValid = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const ButtonText = (
    <span className="home-button-text">
      {" "}
      <span className="home-mobile-button-text"> Estimate </span>
      <span className="home-web-button-text"> Estimate my refund</span>
    </span>
  );

  const ValidationTextField = props.invalid ? (
    <TextField
      error
      helperText="Please enter a valid email."
      type="email"
      label="Enter email"
      className="form-item-text-field embedded-email-input-field"
      variant="outlined"
      value={props.emailValue}
      onKeyPress={(e) => props.onKeyPress(e, valid)}
      InputProps={{ disableUnderline: true }}
      onChange={(e) => {
        props.setEmail(e.target.value);
        checkValid(e.target.value);
      }}
    />
  ) : (
    <TextField
      type="email"
      label="Enter email"
      className="form-item-text-field embedded-email-input-field"
      variant="outlined"
      value={props.emailValue}
      onKeyPress={(e) => props.onKeyPress(e, valid)}
      InputProps={{ disableUnderline: true }}
      onChange={(e) => {
        props.setEmail(e.target.value);
        checkValid(e.target.value);
      }}
    />
  );
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className="embedded-email-input-container form-item-container column-container">
        {ValidationTextField}
        <Button
          className="embedded-email-input-button"
          variant="contained"
          color="secondary"
          onClick={valid ? props.navTo : props.invalidClick}
        >
          {props.loading ? <CircularProgress /> : ButtonText}
        </Button>
      </div>
    </ThemeProvider>
  );
}
