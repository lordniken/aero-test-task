import React, { useState } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { fetchFilter } from "../../store/thunks";
import { setFiltered } from "../../store/actions";
import { catList } from "./catSpecs";
import Category from "./Category";

export const Filter: React.FC = () => {
  const [selectedChkb, setSelectedChkb] = useState<string[]>([]);
  const dispatch = useDispatch();

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
        <Category
          title="Производитель"
          specs={catList}
          selectedChkb={selectedChkb}
          setSelectedChkb={setSelectedChkb}
        />
      </div>
    </div>
  );
};
