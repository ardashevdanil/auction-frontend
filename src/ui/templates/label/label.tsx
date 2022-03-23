import type { LabelProps } from "./label.types";

export function Label(props: LabelProps) {
  const { children } = props;

  return <label>{children}</label>;
}
