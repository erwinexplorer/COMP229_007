import React from "react";

type IGroup = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const Group = React.forwardRef<HTMLDivElement, IGroup>((props, ref) => {
  return (
    <div className="form-group" ref={ref} {...props}>
      {props.children}
    </div>
  );
});

export default Group;
