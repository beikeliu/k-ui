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
      {options.map(({ label, value }) => (
        <label className="k-checkbox" key={value}>
          <input
            type="checkbox"
            className="k-checkbox-input"
            id={value}
            checked={values.includes(value)}
            onChange={onChange}
          />
          {/* input由于各浏览器样式实现不同,使用span重做样式 */}
          <span
            className={
              values.includes(value) ? "k-checkbox-active" : "k-checkbox-span"
            }
          />
          <span className="k-checkbox-label">{label}</span>
        </label>
      ))}
    </>
  );
};
