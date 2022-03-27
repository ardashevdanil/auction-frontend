import { twMerge } from "tailwind-merge";
import { TextInputProps } from "./text-input.types";

export function TextInputFactory(classes: string) {
  return function TextInput(props: TextInputProps) {
    const { className, ...rest } = props;

    return (
      <input type="text" className={twMerge(className, classes)} {...rest} />
    );
  };
}

const textInputBaseClasses =
  "py-2 px-3 text-xs rounded-lg placeholder-neutral-500";

export const TextInput = TextInputFactory(textInputBaseClasses);
