import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ColorPicker from './ColorPicker.js';
import {lightBlue300, blue300, lightGreen400} from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';



const styles = {
  hintStyle: {
    marginLeft: 20,
    color: lightBlue300,
    TextField
  },
  floatingLabelStyle: {
    marginLeft: 20,
    color: blue300,
  },
  textInputStyle: {
    marginLeft:20,
    color: lightGreen400,

  }
};

const dataSource = [
  {
    text: 'Prius',
    value: (
      <MenuItem
        primaryText="Toyota"
        secondaryText="Prius"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const TextFieldForm = () => (
  <div className="div-form">
    <Paper zDepth={2} className="form-container">
      <TextField inputStyle={styles.textInputStyle} hintText="Toyota" hintStyle={styles.hintStyle} floatingLabelText="Manufacturer:" floatingLabelStyle={styles.floatingLabelStyle} maxLength={38} fullWidth={true} underlineShow={false} />
      <Divider />
      <TextField inputStyle={styles.textInputStyle} hintText="Prius" hintStyle={styles.hintStyle} floatingLabelText="Model:" floatingLabelStyle={styles.floatingLabelStyle} maxLength={38} fullWidth={true} underlineShow={false} />
      <Divider />
      <TextField inputStyle={styles.textInputStyle} hintText="LT0 1243" hintStyle={styles.hintStyle} floatingLabelText="Licence Plate:" floatingLabelStyle={styles.floatingLabelStyle} maxLength={38} fullWidth={true} underlineShow={false} />
      <Divider />
    </Paper>
    <Paper zDepth={2} className="color-container">
      <ColorPicker/>
    </Paper>
  </div>
);

export default TextFieldForm;
