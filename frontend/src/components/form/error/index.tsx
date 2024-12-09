import React from "react";
import { FieldError } from "react-hook-form";

type IError = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { isError: FieldError | undefined };
const Error = React.forwardRef<HTMLSpanElement, IError>(({ isError = false, ...props }, ref) => {
  return (
    <React.Fragment>
      {isError && (
        <span {...props} className="form-error" ref={ref}>
          {props.children}
        </span>
      )}
    </React.Fragment>
  );
});

export default Error;
