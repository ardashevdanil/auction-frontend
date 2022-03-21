import { HTMLAttributes } from "react";

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...props} className="text-8xl">
      {props.children}
    </h1>
  )
}
