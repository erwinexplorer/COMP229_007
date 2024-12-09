import React from "react";

type IControl = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Control = React.forwardRef<HTMLInputElement, IControl>((props, ref) => {
  return <input {...props} ref={ref} className="form-input" />;
});

export default Control;
