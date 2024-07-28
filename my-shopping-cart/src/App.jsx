

import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './styles/global.css';
import './components/ProductList.css';
import './components/ProductCard.css';

const App = () => {
  return (
    <ProductProvider>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </ProductProvider>
  );
};

export default App;
