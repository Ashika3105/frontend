import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, image: "snake-plant.jpg" },
  { id: 2, name: "Aloe Vera", price: 10, image: "aloe-vera.jpg" },
  { id: 3, name: "Peace Lily", price: 20, image: "peace-lily.jpg" },
  { id: 4, name: "Fiddle Leaf Fig", price: 30, image: "fiddle-leaf.jpg" },
  { id: 5, name: "Spider Plant", price: 12, image: "spider-plant.jpg" },
  { id: 6, name: "Cactus", price: 8, image: "cactus.jpg" },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      {plants.map((plant) => (
        <div key={plant.id} className="border p-4">
          <img src={plant.image} alt={plant.name} width="100" />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button
            className="bg-green-500 text-white px-4 py-2"
            onClick={() => dispatch(addToCart(plant))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
