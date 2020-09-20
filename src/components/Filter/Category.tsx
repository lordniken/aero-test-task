import React from "react";
import CheckBox from "../Checkbox";
import { CategoryProps } from "./types";

const Category: React.FC<CategoryProps> = ({
  title,
  specs,
  selectedChkb,
  setSelectedChkb,
}) => {
  const checkboxHandler = (item: string) => {
    selectedChkb.find((i) => i === item)
      ? setSelectedChkb([...selectedChkb].filter((i) => i !== item))
      : setSelectedChkb([...selectedChkb, item]);
  };

  return (
    <div className="filter-category-wrapper">
      <span className="filter-category__title">{title}</span>
      <ul>
        {specs.map((item, index) => (
          <li key={index}>
            <CheckBox
              title={item}
              checked={!!selectedChkb.find((i) => i === item)}
              onChange={() => checkboxHandler(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
