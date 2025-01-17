import React, { useContext } from "react";
import "./foodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../StoreContext/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h1 className="food-display-title">Top dishes near you</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category)
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
