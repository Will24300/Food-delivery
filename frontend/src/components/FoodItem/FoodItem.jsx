import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItem, addItemToCart, removeItemToCart } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img">
        <img className="item-img" src={image} alt={description} />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addItemToCart(id)}
            src={assets.add_icon_white}
            alt="add button"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeItemToCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addItemToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-description">
        <div className="food-item-name-rating">
          <h2 className="item-name">{name}</h2>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="item-desc">{description}</p>
        <h2 className="item-price"> $ {price}</h2>
      </div>
    </div>
  );
};

export default FoodItem;
