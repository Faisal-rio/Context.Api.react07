import React, { createContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 999,
      quantity: 1,
      image: '/public/images/iphone13pro.jpg',
      description: 'The iPhone 13 Pro features a Super Retina XDR display, A15 Bionic chip, and Pro camera system with improved low-light performance.',
      sustainability: 'Made with recycled rare earth elements, and the packaging is 100% recycled paper.',
    },
    {
      id: 2,
      name: 'MacBook Pro 16-inch',
      price: 2399,
      quantity: 1,
      image: '/public/images/macbookpro16.jpg',
      description: 'The MacBook Pro 16-inch offers a powerful M1 Pro chip, a stunning Liquid Retina XDR display, and enhanced thermal design for superior performance.',
      sustainability: 'Crafted from 100% recycled aluminum, with energy-efficient components and packaging made from recycled materials.',
    },
    {
      id: 3,
      name: 'iPad Pro 12.9-inch',
      price: 1099,
      quantity: 1,
      image: '/public/images/ipadpro12.jpg',
      description: 'The iPad Pro 12.9-inch features a Liquid Retina display, M1 chip, and 5G connectivity, making it the ultimate tool for professional tasks.',
      sustainability: 'Contains recycled aluminum and rare earth elements, with a focus on reducing environmental impact throughout its lifecycle.',
    },
    {
      id: 4,
      name: 'Apple Watch Ultra',
      price: 799,
      quantity: 1,
      image: '/public/images/applewatchultra.jpg',
      description: 'The Apple Watch Ultra is designed for extreme sports and outdoor activities, featuring a rugged titanium case, large display, and advanced health sensors.',
      sustainability: 'Made from 95% recycled titanium and 100% recycled packaging materials.',
    },
    {
      id: 5,
      name: 'AirPods Max',
      price: 549,
      quantity: 1,
      image: '/public/images/airpodsmax.jpg',
      description: 'AirPods Max provides high-fidelity audio with active noise cancellation, a comfortable over-ear design, and spatial audio support.',
      sustainability: 'Crafted with recyclable materials, including recycled aluminum and stainless steel, with a focus on minimizing environmental impact.',
    },
    {
      id: 6,
      name: 'Apple TV 4K',
      price: 179,
      quantity: 1,
      image: '/public/images/appletv4k.jpg',
      description: 'Apple TV 4K offers immersive 4K HDR content, high-performance A12 Bionic chip, and an enhanced remote with Siri integration.',
      sustainability: 'Made with 100% recycled aluminum in the enclosure and the packaging is fully recyclable.',
    },
    {
      id: 7,
      name: 'HomePod mini',
      price: 99,
      quantity: 1,
      image: '/public/images/homepodmini.jpg',
      description: 'The HomePod mini delivers high-fidelity audio in a compact design, featuring deep bass and a 360-degree sound experience with Siri support.',
      sustainability: 'Contains 100% recycled rare earth elements in all magnets and 100% recycled fabric for the mesh.',
    },
  ],
  totalQuantity: 7,
  totalAmount: 7301,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
        ),
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + state.products.find(product => product.id === action.payload).price,
      };
    case 'DECREASE_QUANTITY':
      const product = state.products.find(product => product.id === action.payload);
      if (product.quantity === 1) return state;
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product
        ),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - product.price,
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  return (
    <ProductContext.Provider value={{ state, increaseQuantity, decreaseQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
