import type { RangeProps } from "./range.types";

export function Range(props: RangeProps) {
  const { options, ...rest } = props;
  return (
    <input {...rest}>
      {options.map((value) => (
        <option value={value}></option>
      ))}
    </input>
  );
}
