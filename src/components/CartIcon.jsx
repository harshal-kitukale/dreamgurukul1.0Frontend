import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to calculate total items in cart
  const getTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div>
      <FaShoppingCart size={24} />
      {getTotalItems() > 0 && (
        <div style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', textAlign: 'center', position: 'absolute', top: '5px', right: '5px' }}>
          {getTotalItems()}
        </div>
      )}
    </div>
  );
};

export default Cart;
