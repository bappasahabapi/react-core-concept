import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { converter, toCelsius, toFahrenheit } from "./Converter";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onTemperatureChange = (e, scale) => {
    // console.log(e,scale)
    this.setState({
      //update new temperature
      temperature: e.target.value,
      scale,
    });
    console.log()
  };



  render() {
    const { temperature, scale } = this.state;
    console.log(scale,temperature)

    const celsius = scale === "f" ? converter(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? converter(temperature, toFahrenheit) : temperature;

    return (
      <div style={{ border: "1px solid blue" }}>
        <h3 style={{ textAlign: "center" }}>
          Example-4: Celsius to Fahrenheit
        </h3>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureHandleChange={this.onTemperatureChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureHandleChange={this.onTemperatureChange}
        />

        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </div>
    );
  }
}
