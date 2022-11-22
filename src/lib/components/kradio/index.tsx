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
        {/* input由于各浏览器样式实现不同,使用span重做样式 */}
        <span className={v === value ? "k-radio-actived" : "k-radio-span"} />
        <span className="k-radio-lable">{label}</span>
      </label>
    ))}
  </>
);
