import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Store } from "../Store/Store";
import axios from "axios";
import { Row, Col, Breadcrumb, Alert } from "antd";
import Rating from "./Rating";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

const ProductDetails = ({ singleProduct, setIsModalVisible }) => {
  const {
    state: cstate,
    dispatch: cdispatch,
    userDispatch,
    userState,
  } = useContext(Store);
  const { state, dispatch } = useContext(Store);
  const [cuporError, setCuponError] = useState("");
  const [cuponCode, setCuponCode] = useState("");
  const [discount, seDiscount] = useState("");

  // const [singleProduct, setSingleProduct] = useState([])
  //     useEffect(async()=>{
  //         await axios.get(`http://localhost:8000/products/${params.slug}`).then((products)=>{
  //           setSingleProduct(products.data)
  //         })

  //     },[])

  // qunatity incress decress

  const addCart = async (id) => {
    try {
      const products = await axios.get(`${backendUrl}/products/${id}`);
      let newproduct = products.data;
      let exproduct = cstate.cartItems.find(
        (item) => item._id == newproduct._id
      );
      let quantity = exproduct ? newproduct.quantity : 1;
      cdispatch({
        type: "ADD_CART",
        payload: {
          ...newproduct,
          quantity,
          price: discount ? discount : newproduct.price,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setIsModalVisible(false);
  };

  const handleCupon = (e) => {
    setCuponCode(e.target.value);
  };

  // discounted_price = original_price - (original_price * discount / 100)

  const applyCupon = (e) => {
    e.preventDefault();

    if (!cuponCode && singleProduct.cupon.length > 1) {
      setCuponError("Give a cupon code!");
    } else if (cuponCode == singleProduct.cupon) {
      let discounted_price =
        singleProduct.price -
        (singleProduct.price * singleProduct.discount) / 100;

      seDiscount(discounted_price);
    } else {
      setCuponError("Cupon not found!");
    }
  };

  const quantity = (item, quantity) => {
    dispatch({ type: "ADD_CART", payload: { ...item, quantity } });
  };

  console.log(cuporError);

  return (
    <div className="single-product-details">
      <div className="single-product">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Products</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{singleProduct.productName}</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col span={12}>
            <div className="image">
              <div className="single-side-image">
                <img src={singleProduct.img} />
                <img src={singleProduct.img} />
                <img src={singleProduct.img} />
              </div>
              <div className="single-image">
                <img src={singleProduct.img} />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="single-details">
              <div className="shop-details-content">
                <h4 className="title">
                  {singleProduct.productName} Lorem Ipsam{" "}
                </h4>
                <div className="shop-details-meta">
                  <ul>
                    <li>Brand : {singleProduct.brand}</li>
                    <li className="shop-details-review">
                      <span>
                        Rating : <Rating rating={singleProduct.rating} />
                      </span>
                    </li>
                    <li>
                      ID : <span>{singleProduct._id}</span>
                    </li>
                  </ul>
                </div>
                <div className="shop-details-price">
                  {discount ? (
                    <h2 className="price">
                      <span className="discount-price">
                        Discount Price : ${discount}.00
                      </span>
                    </h2>
                  ) : (
                    <h2 className="price" strick>
                      Price: ${singleProduct.price}.00{" "}
                    </h2>
                  )}

                  <h5 className="stock-status">- IN Stock</h5>
                </div>
                <p>{singleProduct.description}</p>
                <div className="shop-details-list">
                  <ul>
                    <li>
                      Type : <span>Ice Cream</span>
                    </li>
                    <li>
                      XPD : <span>Aug 19.2021</span>
                    </li>
                    <li>
                      CO : <span>Ganic</span>
                    </li>
                  </ul>
                </div>
                <div className="shop-perched-info">
                  <div className="sd-cart-wrap">
                    <span className="minicart-inc-dec">
                      {singleProduct.quantity == 0 ? (
                        <button disabled>
                          <MinusOutlined />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            quantity(singleProduct, singleProduct.quantity - 1)
                          }
                        >
                          <MinusOutlined />
                        </button>
                      )}
                      <span className="inc-amount">
                        {singleProduct.quantity > 0
                          ? singleProduct.quantity
                          : 1}
                      </span>
                      <button
                        onClick={() =>
                          quantity(singleProduct, singleProduct.quantity + 1)
                        }
                      >
                        <PlusOutlined />
                      </button>
                    </span>
                  </div>
                  <a
                    href="#"
                    className="button"
                    onClick={() => addCart(singleProduct._id)}
                  >
                    add to cart
                  </a>
                </div>

                <div className="shop-cart-bottom">
                  {singleProduct.discount > 0 && (
                    <div className="cart-coupon pdetails">
                      <form>
                        <input
                          type="text"
                          placeholder="Enter Coupon Code..."
                          onChange={handleCupon}
                        />
                        <button className="button" onClick={applyCupon}>
                          Apply Coupon
                        </button>
                      </form>
                      {cuporError && (
                        <Alert message={cuporError} type="error" />
                      )}
                    </div>
                  )}
                </div>

                <div className="shop-details-bottom">
                  <h5 className="title">
                    <a href="#">
                      <i className="far fa-heart"></i> Add To Wishlist
                    </a>
                  </h5>
                  <ul>
                    <li>
                      <span>Tag : </span>
                      <a href="#">Green</a>
                    </li>
                    <li>
                      <span>CATEGORIES :</span>
                      <a href="#">Green,</a>
                      <a href="#">Vegetable,</a>
                      <a href="#">Fruts,</a>
                      <a href="#">Fresh</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
