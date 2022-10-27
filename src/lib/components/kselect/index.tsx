import "./index.css";

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
    <select onChange={onChange} className="k-select" defaultValue={value}>
      {options.map(({ label, value: v }) => (
        <option value={v} key={v}>
          {label}
        </option>
      ))}
    </select>
  </>
);
