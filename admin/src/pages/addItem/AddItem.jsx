import React, { useState } from "react";
import "./addItem.scss";
import Upload from "../../assets/upload_area.png";
import apiRequest from "../../helper/apiRequest";

const AddItem = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "Salad",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    const res = apiRequest.post("/food/add", {
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
      image: image,
    });
    console.log(res);
  };

  return (
    <div className="addProduct">
      <div className="uploadImage">
        <label htmlFor="image">
          <p>Select Image</p>
          <img src={image ? URL.createObjectURL(image) : Upload} alt="" />
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          hidden
          id="image"
        />
      </div>
      <div className="productName">
        <p> Name</p>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          id=""
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div className="productDescription">
        <p> Description</p>
        <textarea
          name="description"
          value={data.description}
          rows={8}
          id=""
          placeholder="Write content here"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="productCategoryAndPrice">
        <div className="productCategory">
          <p>Category</p>
          <select name="" id="" onChange={handleChange}>
            <option value="Salad">Salad</option>
            <option value="Rools">Rools</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="productPrice">
          <p>Price</p>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="addBtn" onClick={handleSubmit}>
        Add
      </div>
    </div>
  );
};

export default AddItem;
