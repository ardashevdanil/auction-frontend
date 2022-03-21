import { HTMLAttributes } from "react";

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 {...props} className="text-5xl">
      {props.children}
    </h3>
  )
}
