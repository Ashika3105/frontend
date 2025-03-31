import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="flex justify-between p-4 bg-green-700 text-white">
      <h1 className="text-xl">Houseplant Store</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |
        <Link to="/cart">🛒 {totalQuantity}</Link>
      </nav>
    </header>
  );
};

export default Header;
