import React, { useEffect, useState } from "react";
import "./listItem.scss";
import apiRequest from "../../helper/apiRequest";
import {toast } from 'react-toastify';

const ListItem = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await apiRequest.get("/food/list");
    console.log(res.data);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      console.log("data not found");
    }
  };

  const deleteItem = async (id) => {
    const res = await apiRequest.post("/food/delete", { id });
    console.log(res.data);
    if (res.data.success) {
      toast.success("Item deleted successfully")
      fetchList();
      // setList(list.filter((item) => item._id!== id));
    } else {
      console.log("Failed to delete item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="listSection">
      <div className="listTitle">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {list.map((item, i) => {
        return (
          <div key={i}>
            <div className="listTitle listItems">
              <img src={`http://localhost:5000/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.category}</p>
              <p>$ {item.price} </p>
              <p
                className="removelistItem"
                onClick={() => deleteItem(item._id)}
              >
                X
              </p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
