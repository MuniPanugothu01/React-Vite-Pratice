import React, { useReducer, useState } from 'react'

// InitialState to take as the empty array = []
const InitialState = [];

const Crud = () => {
    const [inpupt, setInput] = useState('');

// useReducer() function, reducer can return the array
const [state, dispatch] = useReducer(reducer, InitialState);


// handleInputval function
const handleInputval = (event) =>{
    setInput(event.target.value);
}

  return (
    <>
      <h1>TotoList with Crud Operation!</h1>
      <div style={{textAlign:'center'}}>
        <input type="text" placeholder='enter the text' value={inpupt} onChange={handleInputval} />
      </div>
    </>
  )
}

export default Crud;
