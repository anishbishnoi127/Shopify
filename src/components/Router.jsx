import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import FeaturedProducts from './FeaturedProducts';

const AppRouter = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    // console.log("updatedCart from Router", updatedCart)
    // console.log("product from Router", product)
    // console.log("quantity from Router", quantity)

    const cartProductId = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    cartProductId !== -1
      ? (updatedCart[cartProductId].quantity += quantity)
      : updatedCart.push({ ...product, quantity });

    setCart(updatedCart);
  };

  const increaseQuantity = (productID) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  console.log("cart after update from router", cart);

  const decreaseQuantity = (productID) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productID && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<FeaturedProducts />} /> */}
        <Route path="/" element={<HomePage addToCart={addToCart} cart={cart}/>} />
        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} cart={cart}/>}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
