import React from "react";
import classnames from "classnames";

export default function Button({
  title,
  icon,
  filled = true,
  fullWidth = false,
  color,
  disabled = false,
  onClick,
}) {
  const buttonClasses = classnames({
    button: true,
    icon: !title,
    filled: filled && icon && !title,
    "full-width": fullWidth,
    grey: color === "secondary",
    disabled,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && title ? (
        <div className="button-icon-container">{icon}</div>
      ) : (
        icon
      )}
      {title && <span>{title}</span>}
    </button>
  );
}
