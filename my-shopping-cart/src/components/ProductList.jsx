import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../context/ProductContext';
import './ProductList.css';

const ProductList = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="product-list">
      <div className="product-grid">
        {state.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="totals">
        <p>Subtotal: <span>${state.totalAmount}.00</span></p>
        <p>Shipping : <span>FREE</span></p>
        <p>Total: <span>${state.totalAmount}.00</span></p>
      </div>
    </div>
  );
};

export default ProductList;
