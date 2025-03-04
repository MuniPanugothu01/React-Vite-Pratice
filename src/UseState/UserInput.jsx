import React, { useState } from "react";

const UserInput = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  // storing the data in array
  const [storeData, setStoreData] = useState([]);

  const handleInput1 = (event) => {
    setInput1(event.target.value);
  };
  const handleInput2 = (event) => {
    setInput2(event.target.value);
  };

  // form submit

  const handleSubmit = (event) => {
    event.preventDefault();
    setStoreData([...storeData, { name: input1, age: input2 }]);
    setInput1("");
    setInput2("");
  };

  //   handleDelte function
  let handleDelete = (item, index) => {
    let inputDelete = storeData.filter((value, index) => {
      return value != item;
    });
    setStoreData(inputDelete);
  };

  //   handleEdit function
  const handleEdit = (item, index) => {
    let newName = prompt("enter the name", storeData[index].name);
    let newAge = prompt("enter the age!", storeData[index].age);
    if (
      newAge !== null &&
      newName !== null &&
      newName.trim() !== "" &&
      newAge.trim() !== ""
    ) {
      let updatedList = [...storeData];
      updatedList.splice(index, 1, { name: newName, age: newAge });
      setStoreData(updatedList);
    }
  };

  let Data = storeData.map((item, index) => {
    return (
      <div key={index}>
        <tr>
          <td> Name: {item.name}</td>
          <td> Age:{item.age}</td>
          <td>
            <button
              onClick={() => {
                handleDelete(item, index);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleEdit(item, index);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </div>
    );
  });
  return (
    <>
      <h1>TODO List</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">Enter the name: </label>
        <input
          type="text"
          name="fname"
          onChange={handleInput1}
          value={input1}
        />
        <label htmlFor="age">Enter the age:</label>
        <input
          type="number"
          name="age"
          onChange={handleInput2}
          value={input2}
        />
        <input type="submit" value="Submit" />
      </form>

      <table>
        <tr>
          <thead>
            <th>UserName</th>
            <th>UserAge</th>
            <th>Buttons</th>
          </thead>
          <tbody>{Data}</tbody>
        </tr>
      </table>
    </>
  );
};

export default UserInput;
