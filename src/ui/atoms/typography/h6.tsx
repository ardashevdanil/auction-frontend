import { HTMLAttributes } from "react";

export function H6(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6 {...props} className="text-xl">
      {props.children}
    </h6>
  );
}
