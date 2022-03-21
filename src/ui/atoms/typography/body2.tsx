import { HTMLAttributes } from "react";

export function Body2(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="text-sm">
      {props.children}
    </div>
  )
}
