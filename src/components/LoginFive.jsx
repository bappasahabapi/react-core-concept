import React, { useState } from "react";

export default function LoginFive(){
  const [formData, setFormData] = useState({
    title: "Write here",
    text: "Write your comment",
    jsLibrary: "React",
    isChecked: true,
  });

  const handleChange = (e) => {
    const { type, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [type === "checkbox" ? "isChecked" : type.toLowerCase()]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData.title, formData.text, formData.jsLibrary, formData.isChecked);
  };

  return (
    <div>
      <h1 style={{color:'black', textAlign:'center'}}>Text Area Functional Component</h1>
      <form onSubmit={submitHandler}>
        <p>{formData.title}</p>
        <input
          type="text"
          placeholder="Enter any text"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          name="text"
          placeholder="This is a text area"
          value={formData.text}
          onChange={handleChange}
        />
        <br /> <br />
        <label>
          Select box
          <br />
          <select value={formData.jsLibrary} onChange={handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </label>
        <br /> <br />
        <input
          type="checkbox"
          checked={formData.isChecked}
          onChange={handleChange}
        />
        <br /> <br />
        <input type="submit" value="Submit-Button" />
      </form>
    </div>
  );
};

