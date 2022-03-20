import { InputProps } from "./input.types";

export function Input(props: InputProps) {
  return (
    <input
      className="w-full py-1 px-3 border-2 rounded-md border-slate-800 focus:border-sky-500 placeholder:text-black"
      {...props}
    />
  )
}
