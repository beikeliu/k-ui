import "./index.css";
import { Props } from "./types";

export const KCheckbox: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <label className="k-checkbox">
        <input type="checkbox" className="k-checkbox-input" />
        {children}
      </label>
    </>
  );
};
