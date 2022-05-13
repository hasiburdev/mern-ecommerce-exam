import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Form,Input,Button,} from 'antd';

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [cupon, setCupon] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [sold, setSold] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState("");
  const [shipping, setShipping] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = () => {
    console.log("hello");
    axios
      .post(`${backendUrl}/api/all_products`, {
        pname: productName,
        pdetails: details,
        price: price,
        stock: stock,
        description: description,
        category: category,
        discount: discount,
        cupon: cupon,
        review: review,
        rating: rating,
        sold: sold,
        slug: slug,
        img: img,
        shipping: shipping,
      })
      .then(function (response) {
        setProductName("");
        setDetails("");
        setPrice("");
        setStock("");
        setCupon("");
        setDescription("");
        setDiscount("");
        setReview("");
        setRating("");
        setSold("");
        setSlug("");
        setImg("");
        setShipping("");
        setCategory("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(productName);
  return (
    <div className="forms">
      <input
        name="productName"
        value={productName}
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        placeholder="product name"
      />
      <input
        name="details"
        value={details}
        type="details"
        onChange={(e) => setDetails(e.target.value)}
        placeholder="details"
      />
      <input
        name="price"
        value={price}
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <input
        name="stock"
        value={stock}
        type="number"
        onChange={(e) => setStock(e.target.value)}
        placeholder="stock"
      />
      <input
        name="cupon"
        value={cupon}
        type="text"
        onChange={(e) => setCupon(e.target.value)}
        placeholder="cupon"
      />
      <input
        name="description"
        value={description}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <input
        name="discount"
        value={discount}
        type="number"
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="discount"
      />
      <input
        name="category"
        value={category}
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="category"
      />
      <input
        name="review"
        value={review}
        type="text"
        onChange={(e) => setReview(e.target.value)}
        placeholder="review"
      />
      <input
        name="rating"
        value={rating}
        type="number"
        onChange={(e) => setRating(e.target.value)}
        placeholder="rating"
      />
      <input
        name="sold"
        value={sold}
        type="number"
        onChange={(e) => setSold(e.target.value)}
        placeholder="sold"
      />
      <input
        name="slug"
        value={slug}
        type="text"
        onChange={(e) => setSlug(e.target.value)}
        placeholder="slug"
      />
      <input
        name="img"
        value={img}
        type="text"
        onChange={(e) => setImg(e.target.value)}
        placeholder="img"
      />
      <input
        name="shipping"
        value={shipping}
        type="number"
        onChange={(e) => setShipping(e.target.value)}
        placeholder="shipping"
      />

      <button onClick={addProduct}> submit </button>
    </div>
  );
};

export default Admin;
