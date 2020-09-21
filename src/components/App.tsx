import React, { useEffect } from "react";
import "../assets/scss/main.scss";
import Product from "./Product";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData } from "../store/thunks/app";
import { IStore } from "../store/types";
import { IProduct } from "./Product/types";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const { data, filtered } = useSelector(({ app }: IStore) => app);
  const productList: IProduct[] | null =
    (filtered && filtered.length > 0 && filtered) || data;

  return (
    <div className="wrapper">
      {!data && <div className="loading">Загрузка..</div>}
      <div className="product-list">
        {productList &&
          productList.map((item: IProduct) => (
            <React.Fragment key={item.id}>
              <Product
                id={item.id}
                imgUrl={item.imgUrl}
                inFav={item.inFav}
                code={item.code}
                availability={item.availability}
                title={item.title}
                params={item.params}
                rating={item.rating}
                price={item.price}
              />
            </React.Fragment>
          ))}
      </div>
      <Filter />
    </div>
  );
};

export default App;
