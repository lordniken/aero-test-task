import React from "react";
import classnames from "classnames";

export default function Button({ title, icon, filled = true, color }) {
  const buttonClasses = classnames({
    button: true,
    icon: !title,
    filled: filled && icon,
    grey: color === "secondary",
  });

  return (
    <div className={buttonClasses}>
      {icon}
      {title && <span>{title}</span>}
    </div>
  );
}
