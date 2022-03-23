import type { CheckboxProps } from "./checkbox.types";

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" {...props} />;
}
