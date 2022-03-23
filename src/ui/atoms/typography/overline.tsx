import { HTMLAttributes } from "react";

export function Overline(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <span {...props} className="text-xs tracking-wide uppercase">
      {props.children}
    </span>
  );
}
