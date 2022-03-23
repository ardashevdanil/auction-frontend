import { TextInputProps } from "./text-input.types";

export function TextInput(props: TextInputProps) {
  return <input type="text" {...props} />;
}
