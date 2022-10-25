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
    {options.map((option) => (
      <label className="k-radio" key={option.value}>
        <input
          type="radio"
          className="k-radio-input"
          id={option.value}
          checked={option.value === value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
  </>
);
