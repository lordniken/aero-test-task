import React from "react";
import { RateProps } from "./types";
import Star from "./Star";

const rate: React.FC<RateProps> = ({ rating }) => {
  const iconList = Array(5).fill(0);

  return (
    <div className="rate-items">
      {iconList.map((_, value) => (
        <Star key={value} inactive={value + 1 > rating} />
      ))}
    </div>
  );
};

export default rate;
