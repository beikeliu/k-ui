import "./index.css";
export interface Props {
  values: string[];
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const KCheckbox: React.FC<Props> = ({
  values,
  options,
  onChange,
}: Props) => {
  return (
    <>
      {options.map((option) => (
        <label className="k-checkbox" key={option.value}>
          <input
            type="checkbox"
            className="k-checkbox-input"
            id={option.value}
            checked={values.includes(option.value)}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};
