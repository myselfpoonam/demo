import React, { useState } from "react";
// import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mycart from "./components/Mycart";
import Description from "./components/Description";

const App = () => {
  const [cartItems, setCartItem] = useState([]);
  const addToCart = (datas) => {
    setCartItem((prev) => [...prev, datas]);
    alert("Items added");
  };

  const removeItems = (itemId) => {
    const updateCart = cartItems.filter((item) => item.id !== itemId);
    setCartItem(updateCart);
    alert("Remove items");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home addToCart={addToCart} />} />
        <Route
          path="/mycart"
          element={<Mycart cartItems={cartItems} removeItems={removeItems} />}
        />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default App;
