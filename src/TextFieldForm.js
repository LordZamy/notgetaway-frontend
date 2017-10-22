import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {lightBlue300, blue300, lightGreen400} from 'material-ui/styles/colors';



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


const TextFieldForm = () => (
  <Paper zDepth={2}>
    <TextField  inputStyle={styles.textInputStyle} hintText="Toyota" hintStyle={styles.hintStyle} floatingLabelText="Car Company" floatingLabelStyle={styles.floatingLabelStyle} fullWidth={false} underlineShow={false} />
    <Divider />
    <TextField inputStyle={styles.textInputStyle} hintText="Prius" hintStyle={styles.hintStyle} floatingLabelText="Car Model" floatingLabelStyle={styles.floatingLabelStyle} fullWidth={false} underlineShow={false} />
    <Divider />
    <TextField inputStyle={styles.textInputStyle} hintText="LT0 1243" hintStyle={styles.hintStyle} floatingLabelText="Licence Plate" floatingLabelStyle={styles.floatingLabelStyle} fullWidth={false} underlineShow={false} />
    <Divider />
  </Paper>
);

export default TextFieldForm;
