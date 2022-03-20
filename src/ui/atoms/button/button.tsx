import { ButtonProps } from "./button.types";

export function Button(props: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-emerald-500 text-white rounded-sm hover:bg-emerald-600 transition-colors"
      {...props}
    >
      {props.children}
    </button>
  )
}
