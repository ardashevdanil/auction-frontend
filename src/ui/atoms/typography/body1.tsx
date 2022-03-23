import { HTMLAttributes } from "react";

export function Body1(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="text-sm">
      {props.children}
    </div>
  );
}
