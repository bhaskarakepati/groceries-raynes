import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./product-list.styles.scss";
import { Card, Button, Container } from "react-bootstrap";
import Product from "../../product/product.component";

const ProductList = (props) => {
  useEffect(() => {
    console.log("props:" + props);
  });
  return (
    <div className="product-container ">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
