import { HTMLAttributes } from "react";

export function Subtitle2(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="text-base font-bold">
      {props.children}
    </div>
  );
}
