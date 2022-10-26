import "./index.css";
export interface Props {
  value: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const KRadio: React.FC<Props> = ({
  value,
  options,
  onChange,
}: Props) => (
  <>
    {options.map(({ label, value: v }) => (
      <label className="k-radio" key={v}>
        <input
          type="radio"
          className="k-radio-input"
          id={v}
          checked={v === value}
          onChange={onChange}
        />
        {label}
      </label>
    ))}
  </>
);
