import React from "react";
import { ReactComponent as StarIcon } from "../../assets/svg/star.svg";
import classnames from "classnames";
import { StarProps } from "./types";

const Star: React.FC<StarProps> = ({ inactive }) => {
  return (
    <StarIcon
      className={classnames({
        "rate-items__star": true,
        inactive,
      })}
    />
  );
};

export default Star;
