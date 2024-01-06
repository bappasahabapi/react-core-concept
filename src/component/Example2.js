import React, { useState } from 'react'

function Counter() {

    const [count, setCount]=useState(0);


    // This part not working means not add 5 per click
    let i =0;
    const addFive=()=>{
        while(i<5){
            setCount(count+1);
            i++;
        }
    }


    //  good practice
    let j =0;
    const addTen=()=>{
        while(j<10){
            setCount(
                (prevState)=>prevState+1
            );
            j++;
        }
    }


    return (
        <div>
            {count}
            <p>
                <button
                
                type='button'
                onClick={()=>setCount((prevState)=>prevState+1)}
                >
                    Add 1
                </button>
            </p>
            <p>
                <button
                
                type='button'
                onClick={addFive}
                >
                    Add 5
                </button>
            </p>
            <p>
                <button
                
                type='button'
                onClick={addTen}
                >
                    Add 10
                </button>
            </p>
        </div>
    )
}

export default Counter
