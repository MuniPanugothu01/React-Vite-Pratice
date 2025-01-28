import React, { useState } from "react";

const TodoList = () => {
  const [input, setinput] = useState("");
  // to store the values while entering in input box
  const [store, setStore] = useState([]);

  const handleInput = (event) => {
    setinput(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    setStore([...store, input]);
  };

  //   handleDelete button
  const handleDelete = (item, index) => {
    let Updated = store.filter((value, index) => {
      return value != item;
    });
    setStore(Updated);
  };
  console.log(store);

  var data = store.map((item, index) => {
    return (
      <div key={index}>
        <li >
          {item}{" "}
          <button
            onClick={() => {
              handleDelete(item, index);
            }}
          >
            delete
          </button>
        </li>
      </div>
    );
  });

  return (
    <>
      <form action="" onSubmit={Submit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          placeholder="enter the character"
        />
        <input type="submit" value="register" />
      </form>

      <ul>{data}</ul>
    </>
  );
};

export default TodoList;
