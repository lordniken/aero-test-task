import React from "react";
import classnames from "classnames";

export default function Button({ title, icon, filled = true, color, onClick }) {
  const buttonClasses = classnames({
    button: true,
    icon: !title,
    filled: filled && icon,
    grey: color === "secondary",
  });

  return (
    <div className={buttonClasses} onClick={onClick}>
      {icon && icon}
      {title && <span>{title}</span>}
    </div>
  );
}
