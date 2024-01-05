import React from "react";

const scaleName={
    c:'Celsius',
    f:'Fahrenheit'
}

export default class TemperatureInput extends React.Component {
  state = {
    temperature: "",
  };

  onTemperatureHandleChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      
        <fieldset>
          <legend>
            Enter Temperature in <b>{scaleName[scale]}:</b>{" "}
          </legend>
          <input
            placeholder="enter temperature 110"
            type="text"
            value={temperature}
            onChange={this.onTemperatureHandleChange}
          />
        </fieldset>
    );
  }
}
