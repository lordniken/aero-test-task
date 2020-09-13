import React from "react";
import "./assets/scss/main.scss";
import Product from "./components/product";
import Filter from "./components/filter";

export default function App() {
  return (
    <div className="wrapper">
      <div className="product-list">
        {[1, 2, 3].map((item) => (
          <Product key={item} />
        ))}
      </div>
      <div className="filter">
        <Filter />
      </div>
    </div>
  );
}
