export interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<{
    label: string;
    value: string;
  }>;
}

export const KSelect: React.FC<Props> = ({
  value,
  onChange,
  options,
}: Props) => (
  <>
    <select onChange={onChange}>
      {options.map(({ label, value: v }) => (
        <option value={v} selected={v === value} key={v}>
          {label}
        </option>
      ))}
    </select>
  </>
);
