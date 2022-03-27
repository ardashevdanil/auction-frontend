import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./button.types";
import { Typography } from "ui/atoms/typography";

export const baseButtonClasses =
  "inline-flex items-center justify-center px-4 py-2 bg-transparent rounded-sm transition-colors";

function buttonFactory(classes: string) {
  return function Button(props: ButtonProps) {
    const { as: Element = "button", className, ...rest } = props;
    return (
      <Element
        className={twMerge(baseButtonClasses, classes, className)}
        {...rest}
      >
        <Typography.Button>{props.children}</Typography.Button>
      </Element>
    );
  };
}

export const ButtonText = buttonFactory("text-emerald-500");

export const ButtonContained = buttonFactory(
  "bg-emerald-500 text-white hover:bg-emerald-600"
);

export const ButtonOutlined = buttonFactory(
  "text-emerald-500 hover:text-emerald-600 border border-solid border-emerald-600 hover:border-emerald-600"
);
