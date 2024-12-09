import React from "react";

type ILabel = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, ILabel>((props, ref) => {
  return (
    <label className="form-label" ref={ref} {...props}>
      {props.children}
    </label>
  );
});

export default Label;
