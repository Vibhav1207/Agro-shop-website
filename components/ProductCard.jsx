import React from "react";
import styles from "../styles/animations.css";

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <img src={product.image} alt={product.name} />
    <h3 className={styles.gradientText}>{product.name}</h3>
  </div>
);

export default ProductCard;
