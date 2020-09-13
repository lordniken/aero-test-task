import React from "react";
import { ReactComponent as Star } from "../assets/svg/star.svg";

export default function rate({ rating }) {
  const iconList = Array(5).fill(0);
  return (
    <div className="rate-items">
      {iconList.map((_, value) => (
        <Star
          className={[
            "rate-items__star",
            value + 1 > rating ? "inactive" : "",
          ].join(" ")}
          key={value}
        />
      ))}
    </div>
  );
}
