import React from "react";
import Button from "./button";

const catList = [
  "Canon",
  "Olympus",
  "Fujifilm",
  "Pentax",
  "Nikon",
  "Sigma",
  "Panasonic",
  "Geleral Electrics",
  "Leica",
  "Zenit",
];

export default function Filter() {
  return (
    <>
      <div className="filter-buttons">
        <Button title="Показать результат" />
        <Button title="Очистить фильтр" color="secondary" />
      </div>
      <div className="filter-category">
        <span className="filter-category__title">Производитель</span>
        <ul>
          {catList.map((item, index) => (
            <li key={index}>
              <Checkbox title={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const Checkbox = ({ title }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="checkbox_title">{title}</span>
      <span className="checkmark" />
    </label>
  );
};
