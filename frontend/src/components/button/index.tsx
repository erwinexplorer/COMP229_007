import React from "react";
import "./styles.scss";

type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  return (
    <button className="button" ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default Button;
