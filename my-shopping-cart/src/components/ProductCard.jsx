import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-sustainability">{product.sustainability}</p>
        <div className="quantity-controls">
          <button className="quantity-button" onClick={() => decreaseQuantity(product.id)}>-</button>
          <span className="quantity-display">{product.quantity}</span>
          <button className="quantity-button" onClick={() => increaseQuantity(product.id)}>+</button>
        </div>
        <div className="product-price">
          <span className="price">${product.price * product.quantity}.00</span>
          <button className="remove-button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
