import React, { useState } from 'react'
import "./style.css"

function Square({ value, onSquareClick }) {

  return <button
    className='square'
    onClick={onSquareClick}
  >
    {value}
  </button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // X



  function handleClick(i) {
    if(squares[i] || CheckWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();  // create a new array of 9 null elements

    if(squares[i]) return;   

    if (xIsNext) { nextSquares[i] = "X" } else { nextSquares[i] = 'O' }

    console.log(nextSquares)
    setSquares(nextSquares);
    console.log(nextSquares)

    setXIsNext(!xIsNext)
    console.log(setXIsNext(!xIsNext))
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
};



function CheckWinner(squares){

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < winPatterns.length; i++){
    console.log(winPatterns.length)

    const [a,b,c]=winPatterns[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

 
  }
  return null;
  
}

