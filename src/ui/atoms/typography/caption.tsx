import { HTMLAttributes } from "react";

export function Caption(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <span {...props} className="text-xs tracking-wide">
      {props.children}
    </span>
  )
}
