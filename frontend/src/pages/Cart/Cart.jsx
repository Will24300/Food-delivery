import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../StoreContext/StoreContext";

const Cart = () => {
  const { cartItem, food_list, removeItemToCart } = useContext(StoreContext);

  return (
    <div>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <>
              <div className="cart-item-title cart-items-item" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p className="cross" onClick={() => removeItemToCart(item._id)}>
                  x
                </p>
              </div>
              <hr />
            </>
          );
        }
      })}
    </div>
  );
};

export default Cart;
