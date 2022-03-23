import type { SelectHTMLAttributes } from "react";

export type SelectProps = {
  options: SelectOption[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export type SelectOption = {
  value: string | number;
  label: string;
};
