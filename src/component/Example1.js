import React from "react";
import { useState } from "react";

export default function Example1Todo() {
  const [todo, setTodo] = useState({
    title: " ",
    description: " ",
  });

//   const handleChangeInput = (e) => {};

  const { title, description } = todo;
  return (
    <div>
      <hr />
      <h4>Example1 too</h4>
      <p style={{ backgroundColor: "yellow" }}>Title:{title}</p>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <br />
      <textarea
        placeholder="enter your text"
        name="text"
        value={description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <hr />
    </div>
  );
}
