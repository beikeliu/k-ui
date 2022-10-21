import "./index.css";
import { Props, GroupProps } from "./types";

let checked: string[];
let handleChange: GroupProps["onChange"];

export const KCheckbox: React.FC<Props> = ({ children, value }: Props) => {
  return (
    <>
      <label className="k-checkbox">
        <input
          type="checkbox"
          className="k-checkbox-input"
          id={value}
          checked={checked.includes(value)}
          onChange={handleChange}
        />
        {children}
      </label>
    </>
  );
};

export const KCheckboxGroup: React.FC<GroupProps> = ({
  children,
  value,
  onChange,
}: GroupProps) => {
  checked = value;
  handleChange = onChange;
  return <>{children}</>;
};
