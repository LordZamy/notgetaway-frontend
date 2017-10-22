import React from 'react';
import { CirclePicker, MaterialPicker } from 'react-color';

class ColorPicker extends React.Component {


  render(){
      return(
        <div style={{padding:'1em'}}>
            <CirclePicker/>
        </div>
      )
  }
}

export default ColorPicker;
