import { HTMLAttributes } from "react";

export function H2(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 {...props} className="text-6xl">
      {props.children}
    </h2>
  );
}
