import React, { useState } from 'react';
import './Game.css'; // Assuming the styles are in a separate CSS file

const TicTacToe = () => {
    const [boxes, setBoxes] = useState(Array(9).fill(''));
    const [turnO, setTurnO] = useState(true);
    const [messageHidden, setMessageHidden] = useState(true);
    const [winningMessage, setWinningMessage] = useState('');

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetGame = () => {
        setTurnO(true);
        setMessageHidden(true);
        setBoxes(Array(9).fill(''));
    };

    const handleBoxClick = (index) => {
        if (boxes[index] === '') {
            const newBoxes = [...boxes];
            newBoxes[index] = turnO ? '⭕' : '❎';
            setBoxes(newBoxes);
            setTurnO(!turnO);
            checkWinner(newBoxes);
        }
    };

    const checkWinner = (currentBoxes) => {
        for (const pattern of winPatterns) {
            const [position1, position2, position3] = pattern;
            if (
                currentBoxes[position1] !== '' &&
                currentBoxes[position1] === currentBoxes[position2] &&
                currentBoxes[position2] === currentBoxes[position3]
            ) {
                setWinningMessage(`Congratulations!!! Mr.${currentBoxes[position1]}`);
                setMessageHidden(false);
                // You can perform other actions or state updates here if needed
                return;
            }
        }
    };

    return (
        <div className="container">
            <div className={`msg-container ${messageHidden ? 'hide' : ''}`}>
                <p id="msg">{winningMessage}</p>
            </div>
            <div className="game">
                {boxes.map((value, index) => (
                    <button
                        key={index}
                        className="box"
                        onClick={() => handleBoxClick(index)}
                        disabled={value !== ''}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div >
                <button id="reset-btn" onClick={resetGame}>
                    Reset Game
                </button>

                <button id="new-btn" onClick={resetGame}>
                    New Game
                </button>
            </div>


        </div>
    );
};

export default TicTacToe;
