import React from "react";

import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Col className="mb-2" lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div
          className="product__card-bottom
          d-flex
          align-items-center
          justify-content-between p-2"
        >
          <span className="price">${item.price}</span>
          <motion.span whileHover={{ scale: 1.2 }}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;