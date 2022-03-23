import cn from "classnames";
import { ButtonProps } from "./button.types";

export const baseButtonClasses = "px-4 py-2 rounded-sm transition-colors";

function buttonFactory(className: string) {
  return function Button(props: ButtonProps) {
    return (
      <button className={cn(baseButtonClasses, className)} {...props}>
        {props.children}
      </button>
    );
  };
}

export const ButtonContained = buttonFactory(
  "bg-emerald-500 text-white hover:bg-emerald-600"
);

export const ButtonOutlined = buttonFactory(
  "bg-transparent text-emerald-500 hover:text-emerald-600 border border-solid border-emerald-600 hover:border-emerald-600"
);
