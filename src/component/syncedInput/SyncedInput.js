import { useState } from "react";

export default function SyncedInputs() {

    const [text,setText]=useState('');

    function handleChange(e){
        setText(e.target.value);
    }

  return (
    <div style={{ border: "1px solid red " }}>
        <h3  style={{textAlign:'center'}}> Example-2: Synced Two Component</h3>
      <p>
        These two inputs are independent. <br />
        Make them stay in sync: <br />
        <b>Editing one input should update the other input with the same text, and
        vice versa.</b>
      </p>
      <div style={{paddingBottom:'15px', textAlign:'center'}}>
        <InputComponent 
        label="First Input: " 
        value={text}
        onChange={handleChange}

        
        /> 
        <br /><br />
        <InputComponent 
        label="Second Input: " 
        value={text}
        onChange={handleChange}
        />
      </div>
    </div>
  );
}

function InputComponent({label,value,onChange}) {
    // const [text,setText]=useState('');

    // function handleChange(e){
    //     setText(e.target.value);
    // }
  return (
    <label>
        {label}
        {/* {' '} */}
      <input 
      value={value}
      onChange={onChange}
      />
    </label>
  );
}
