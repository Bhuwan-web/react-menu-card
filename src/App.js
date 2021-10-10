import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const categories = ["All"];
  items.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  const [foods, setFoods] = useState(items);
  const handleCategory = (e) => {
    const category = e.target.innerHTML.toLowerCase();
    if (category === "all") {
      setFoods(items);
    } else {
      const newFoods = items.filter((food) => food.category === category);
      setFoods(newFoods);
    }
  };
  return (
    <main className="menu">
      <section>
        <header className="title">
          <h2>Our Menus</h2>
          <p className="underline"></p>
        </header>
      </section>
      <ul className="btn-container">
        {categories.map((category) => {
          return (
            <Categories
              category={category}
              items={items}
              key={category}
              handleCategory={handleCategory}
            />
          );
        })}
      </ul>
      <ul className="section-center">
        {foods.map((food) => (
          <Menu food={food} key={food.id} />
        ))}
      </ul>
    </main>
  );
}

export default App;
