import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="text-center p-10">
      <h2>Welcome to Houseplant Store</h2>
      <p>We offer a wide variety of beautiful houseplants.</p>
      <Link to="/products">
        <button className="bg-green-500 text-white px-4 py-2">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
