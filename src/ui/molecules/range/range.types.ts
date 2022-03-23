import type { InputHTMLAttributes } from "react";

export type RangeProps = {
  options: Array<string | number>;
} & Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "max" | "min" | "step" | "list" | "name"
>;
