import React, { useState } from "react";

export default function User() {
  const [userDetails, setUserDetails] = useState({
    userName: {
      firstName: "bapi",
      lastName: "saha",
    },
    age: 20,
    hobby: "Reading",
    address:{
        location:"thakurgaon",
        city:'D'
    },
  });


  const changeName = () => {
    setUserDetails({
         // copy all other object values
        ...userDetails,
        userName: {
              // recreate the nested object that contains the field to update
            ...userDetails.userName,
             // overwrite the value to update
            firstName: 'bappa',
        },
        address:{
            ...userDetails.address,
            location:'Dhaka'
        }
    });
};


  return (
    <div>
        <p>Example -3 </p>
      <h1>
        Hello {userDetails.userName.firstName} {userDetails.userName.lastName},form 
        <mark>
        {userDetails.address.location}
        </mark>
      </h1>
   
      <p>
        {userDetails.age} || {userDetails.hobby}
      </p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
