import React from "react";

type ILink = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Link = React.forwardRef<HTMLAnchorElement, ILink>((props, ref) => {
  return (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  );
});

export default Link;
