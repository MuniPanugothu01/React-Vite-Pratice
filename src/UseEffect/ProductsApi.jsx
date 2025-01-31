import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsApi = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setStore(response.data);
    });
  }, []);

  // map method to use the display the products
  let Data = store.map((val, index) => {
    return (
      <tr key={val.id}>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.price}</td>
        <td>
          <Link to={`/products/${val.id}`}>
            <button>View</button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>FakeStore Data!</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </>
  );
};

export default ProductsApi;
