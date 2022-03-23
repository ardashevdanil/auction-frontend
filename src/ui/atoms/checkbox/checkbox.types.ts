import type { InputHTMLAttributes } from "react";

export type CheckboxProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "value" | "name"
>;
