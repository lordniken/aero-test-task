import React from "react";
import Rate from "./rate";
import productImg from "../assets/img/image.jpg";
import Button from "./button";
import { ReactComponent as CartIcon } from "../assets/svg/cart.svg";
import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";
import { ReactComponent as FavIcon } from "../assets/svg/favourite-active.svg";
import { ReactComponent as CompIcon } from "../assets/svg/comparsion.svg";

export default function Product() {
  return (
    <div className="product-item">
      <div className="product-item-header">
        <Rate rating={4} />
        <span className="product-item-header__id">Арт. 34534345</span>
      </div>
      <div className="product-item__img">
        <img src={productImg} alt={""} />
      </div>
      <div className="product-item__stock">
        <CheckIcon />
        <span>В наличии</span>
      </div>
      <div className="product-item__title">
        Canon PowerShot SX400 IS с улучшенной матрицей и объективом
      </div>
      <div className="product-item__features">
        <ul>
          <li>
            Физический размер<span>23.2 x 15.2 мм</span>
          </li>
          <li>
            Диафрагма<span>CMOS</span>
          </li>
          <li>
            Формат записи<span>RAW, JPEG, MP4 и другие</span>
          </li>
          <li>
            Фокусное расстояние<span>18-55 мм.</span>
          </li>
        </ul>
      </div>
      <div className="product-item__price">49 999 руб.</div>
      <div className="product-item__bonus">+490 бонусов</div>
      <div className="product-item-footer">
        <Button title="Купить" icon={<CartIcon />} />
        <ul className="product-item-footer__badges">
          <li>
            <Button icon={<FavIcon />} />
          </li>
          <li>
            <Button icon={<CompIcon />} />
          </li>
        </ul>
      </div>
    </div>
  );
}
