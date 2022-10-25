import "./index.css";
import { ChangeEventHandler } from "react";

export interface Props {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export const KInput: React.FC<Props> = ({
  placeholder,
  onChange,
  value,
}: Props) => (
  <>
    <input
      className="k-input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </>
);
