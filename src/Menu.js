import React from "react";

const Menu = ({ food }) => {
  const { title, price, img, desc } = food;
  return (
    <li className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="price">$ {price}</span>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </li>
  );
};

export default Menu;
