import { HTMLAttributes } from "react";

export function H4(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 {...props} className="text-4xl">
      {props.children}
    </h4>
  );
}
