import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {


  render() {
    return (
      <div style={{ border: "1px solid blue" }}>
       <h3 style={{ textAlign: "center" }}>
          Example-4: Celsius to Fahrenheit
        </h3>
        <TemperatureInput scale='c'/>
        <TemperatureInput scale='f'/>
        {/* <BoilingVerdict celsius={parseFloat(temperature)}/> */}
      </div>
    );
  }
}
