import "./index.css";
import { Props } from "./types";

export const KButton: React.FC<Props> = ({ children }: Props) => (
  <>
    <button className="k-button">{children}</button>
  </>
);
