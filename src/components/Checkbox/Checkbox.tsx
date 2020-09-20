import React from "react";
import { CheckboxProps } from "./types";

export const CheckBox: React.FC<CheckboxProps> = ({
  title,
  checked = false,
  onChange,
}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkbox_title">{title}</span>
      <span className="checkbox_mark" />
    </label>
  );
};
