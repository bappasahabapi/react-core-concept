import React from "react";

function Products({ id, name, desc, amount, price }) {


  return (
    <div style={{ height: '20 vh', width: '80%', background: '#80EEF3' }}>
      <h1>Products No: {id}</h1>
      <h5>name is : {name}</h5>
      <p>Description: {desc} </p>
      <p>Amount: {amount} </p>
      <span>price:{price} </span>

    </div>
  );
}

export default Products;
