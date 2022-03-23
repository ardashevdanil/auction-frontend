import type { InputHTMLAttributes } from "react";

export type DateInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "id" | "value" | "max" | "min" | "step" | "name"
>;
