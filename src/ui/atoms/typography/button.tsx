import { HTMLAttributes } from "react";

export function ButtonText(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="text-sm uppercase tracking-wide font-medium">
      {props.children}
    </div>
  )
}
