import React, { useState } from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { fetchFilter } from "../fetch";
import { setFiltered } from "../redux";

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
  const [selectedChkb, setSelectedChkb] = useState([]);
  const dispatch = useDispatch();

  const checkboxHandler = (item) => {
    selectedChkb.find((i) => i === item)
      ? setSelectedChkb([...selectedChkb].filter((i) => i !== item))
      : setSelectedChkb([...selectedChkb, item]);
  };

  const resultButtonHandler = () => {
    dispatch(fetchFilter(selectedChkb));
  };

  const resetButtonHandler = () => {
    setSelectedChkb([]);
    dispatch(setFiltered(null));
  };

  return (
    <div className="filter">
      <div className="filter-buttons">
        <Button
          title="Показать результат"
          onClick={resultButtonHandler}
          fullWidth
        />
        <Button
          title="Очистить фильтр"
          color="secondary"
          onClick={resetButtonHandler}
          fullWidth
        />
      </div>
      <div className="filter-category">
        <span className="filter-category__title">Производитель</span>
        <ul>
          {catList.map((item, index) => (
            <li key={index}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={!!selectedChkb.find((i) => i === item)}
                  onChange={() => checkboxHandler(item)}
                />
                <span className="checkbox_title">{item}</span>
                <span className="checkbox_mark" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
