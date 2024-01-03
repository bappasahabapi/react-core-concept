import React, { useState } from 'react';

const FunctionalInputBox = () => {
    const [title, setTitle] = useState('Write here');

    const handleChange = (event) => {
        console.log(event.target.value);

        // Change state to display the updated value
        setTitle(event.target.value);
    };

    return (
        <div>
             <h1>Functional Component</h1>
            <form>
                <input
                    type='text'
                    placeholder='enter any text'
                    value={title}
                    onChange={handleChange}
                />
                <p>{title}</p>
            </form>
        </div>
    );
};

export default FunctionalInputBox;
