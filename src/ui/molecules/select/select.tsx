import type { SelectProps } from "./select.types";

export function Select(props: SelectProps) {
  const { options, ...rest } = props;

  return (
    <select {...rest}>
      {options.map(({ value, label }) => {
        <option key={value}>{label}</option>;
      })}
    </select>
  );
}
