import React from "react";
import Rate from "./rate";
import productImg from "../assets/img/image.jpg";
import Button from "./button";
import { ReactComponent as CartIcon } from "../assets/svg/cart.svg";
import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";
import Badges from "./badges";

export default function Product({
  id,
  inFav,
  code,
  availability,
  title,
  params,
}) {
  return (
    <div className="product-item">
      <div className="product-item-header">
        <Rate rating={3} />
        <span className="product-item-header__id">Арт. {code}</span>
      </div>
      <div className="product-item__img">
        <img src={productImg} alt={""} />
      </div>
      <div className="product-item__stock">
        {availability && <CheckIcon />}
        <span>{availability ? "В наличии" : "Нет в наличии"}</span>
      </div>
      <div className="product-item__title">{title}</div>
      <div className="product-item__features">
        <ul>
          {params.map(({ name, value }, index) => (
            <li key={index}>
              {name}
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-item__price">49 999 руб.</div>
      <div className="product-item__bonus">+490 бонусов</div>
      <div className="product-item-footer">
        <Button title="Купить" icon={<CartIcon />} />
        <Badges id={id} inFav={inFav} />
      </div>
    </div>
  );
}
