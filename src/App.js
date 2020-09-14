import React, { useEffect } from "react";
import "./assets/scss/main.scss";
import Product from "./components/product";
import Filter from "./components/filter";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData } from "./fetch";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const { data, filtered } = useSelector(({ app }) => app);

  return (
    <div className="wrapper">
      {!data && <div className="loading">Загрузка..</div>}
      <div className="product-list">
        {filtered
          ? filtered.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                inFav={item.inFav}
                code={item.code}
                availability={item.availability}
                title={item.title}
                params={item.params}
              />
            ))
          : data &&
            data.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                inFav={item.inFav}
                code={item.code}
                availability={item.availability}
                title={item.title}
                params={item.params}
              />
            ))}
      </div>
      <div className="filter">
        <Filter />
      </div>
    </div>
  );
}
