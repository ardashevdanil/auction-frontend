import type { DateInputProps } from "./date-input.types";

export function DateInput(props: DateInputProps) {
  return <input type="date" {...props} />;
}
