import React from "react";
import { ReactComponent as Star } from "../assets/svg/star.svg";
import classnames from "classnames";

export default function rate({ rating }) {
  const iconList = Array(5).fill(0);

  return (
    <div className="rate-items">
      {iconList.map((_, value) => (
        <a href="#" key={value}>
          <Star
            className={classnames({
              "rate-items__star": true,
              inactive: value + 1 > rating,
            })}
          />
        </a>
      ))}
    </div>
  );
}
