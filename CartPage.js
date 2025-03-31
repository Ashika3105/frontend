import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-5">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Your cart is empty.</p> : 
        items.map((item) => (
          <div key={item.id} className="flex justify-between p-2 border">
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>🗑</button>
          </div>
        ))
      }
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
