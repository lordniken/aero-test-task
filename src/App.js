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

  const { data, errorText } = useSelector(({ app }) => app);

  return (
    <div className="wrapper">
      {/* todo - add error class */}
      {errorText && <div className="error">{errorText}</div>}
      {!data && !errorText && <div className="loading">Загрузка..</div>}
      <div className="product-list">
        {data &&
          data.map((item) => (
            <Product key={item.id} id={item.id} inFav={item.inFav} />
          ))}
      </div>
      <div className="filter">
        <Filter />
      </div>
    </div>
  );
}
