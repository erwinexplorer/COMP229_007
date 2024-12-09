import React from "react";
import "./styles.scss";
import Group from "./group";
import Label from "./label";
import Control from "./control";
import Link from "./link";
import Error from "./error";

type IForm = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
const Form = React.forwardRef<HTMLFormElement, IForm>((props, ref) => {
  return (
    <form className="form" ref={ref} {...props}>
      {props.children}
    </form>
  );
});

export { Group, Label, Control, Link, Error };
export default Form;
