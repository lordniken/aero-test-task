import React from "react";
import Button from "./button";
import { ReactComponent as FavIcon } from "../assets/svg/favourite-active.svg";
import { ReactComponent as CompIcon } from "../assets/svg/comparsion.svg";
import { useDispatch } from "react-redux";
import { fetchFavState } from "../fetch";

export default function Badges({ id, inFav }) {
  const dispatch = useDispatch();

  const handleFavClick = () => {
    dispatch(fetchFavState(id));
  };

  return (
    <ul className="product-item-footer__badges">
      <li>
        <Button icon={<FavIcon />} filled={inFav} onClick={handleFavClick} />
      </li>
      <li>
        <Button icon={<CompIcon />} />
      </li>
    </ul>
  );
}
