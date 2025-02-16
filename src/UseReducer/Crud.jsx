import React, { useReducer, useState } from "react";

// InitialState to take as the empty array = []
const InitialState = [];

// reducer function()

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), input: action.playload }];

    default:
return state;
  }
}

const Crud = () => {
  const [inpupt, setInput] = useState("");

  // useReducer() function, reducer can return the array
  const [state, dispatch] = useReducer(reducer, InitialState);

  // handleInputval function
  const handleInputval = (event) => {
    setInput(event.target.value);
  };

  // map() method to display the data

  let Data = state.map((value, index) => {
    <tr key={value.id}>
      <td>{value.input}</td>
    </tr>;
  });

  return (
    <>
      <h1>TotoList with Crud Operation!</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="enter the text"
          value={inpupt}
          onChange={handleInputval}
        />

        <button
          onClick={handleADD}
        >
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </>
  );
};

export default Crud;
