import { ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType } from "react";

export type ButtonProps = {
  as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;
