import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureHandleChange,
}) {

  console.log(scale,temperature)
  return (
    <fieldset>
      <legend>
        Enter Temperature in <b>{scaleName[scale]}:</b>{" "}
      </legend>
      <input
        placeholder="enter temperature 110"
        type="text"
        value={temperature}
        onChange={(e)=>onTemperatureHandleChange(e,scale)}
        // onChange={onTemperatureHandleChange}
      />
    </fieldset>
  );
}
