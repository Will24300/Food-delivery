import React from "react";
import "./exploreOurmenu.css";
import { menu_list } from "../../assets/assets";

const ExploreOurMenu = ({ category, setCategory }) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h2 className="menuTitle" id="menuTitle">
        Explore our menu
      </h2>
      <p className="menuDesc">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="menuList">
        {menu_list.map((item, index) => {
          return (
            <div
              className="menu-item-list"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreOurMenu;
