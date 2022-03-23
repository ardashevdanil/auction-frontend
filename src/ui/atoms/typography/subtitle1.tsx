import { HTMLAttributes } from "react";

export function Subtitle1(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="text-base">
      {props.children}
    </div>
  );
}
