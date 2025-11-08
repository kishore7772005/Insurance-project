import React, { useContext } from "react";
import { ProductContext } from "../../ContextProvider";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ProductContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.title}</h5>
                <p className="mb-0">Premium: ₹ {item.price}</p>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h5>Total: ₹ {total}</h5>
            <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
    