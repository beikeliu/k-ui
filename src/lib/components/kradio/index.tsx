import "./index.css";
import { Props, GroupProps } from "./types";

let checked: string;
let handleChange: GroupProps["onChange"];
export const KRadio: React.FC<Props> = ({ children, value }: Props) => (
  <>
    <label className="k-radio">
      <input
        type="radio"
        className="k-radio-input"
        id={value}
        checked={checked === value}
        onChange={handleChange}
      />
      {children}
    </label>
  </>
);

export const KRadioGroup: React.FC<GroupProps> = ({
  children,
  value,
  onChange,
}: GroupProps) => {
  checked = value;
  handleChange = onChange;
  return <>{children}</>;
};
