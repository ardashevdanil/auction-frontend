import { HTMLAttributes } from "react";

export function H5(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 {...props} className="text-2xl">
      {props.children}
    </h5>
  )
}
