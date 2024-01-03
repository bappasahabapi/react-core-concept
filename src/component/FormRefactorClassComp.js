import React, { Component } from "react";

class FormRefactorClassComp extends Component {
  state = {
    title: "Write here",
    text: "Write your comment",
    jsLibrary: "React",
    isChecked: true,
  };

  handleChange = (e) => {
        // this.setState({
    //     title:e.target.value
    // })
    const { type, value, checked } = e.target;

    this.setState({
      [type === "checkbox" ? "isChecked" : type.toLowerCase()]: type === "checkbox" ? checked : value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, jsLibrary, isChecked } = this.state;
    console.log(title, text, jsLibrary, isChecked);
  };

  render() {
    const { title, text, jsLibrary, isChecked } = this.state;

    return (
      <div>
        <h1>Text Area Class Component</h1>
        <form onSubmit={this.submitHandler}>
          <p>{title}</p>
          <input
            type="text"
            placeholder="Enter any text"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            placeholder="This is a text area"
            value={text}
            onChange={this.handleChange}
          />
          <br /> <br />
          <label>
            Select box
            <br />
            <select value={jsLibrary} onChange={this.handleChange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </label>
          <br /> <br />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Submit-Button" /> */}
        </form>
      </div>
    );
  }
}

export default FormRefactorClassComp;
