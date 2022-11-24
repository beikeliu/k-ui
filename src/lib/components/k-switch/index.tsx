import { useState } from "react";
import "./index.css";

export interface Props {
  value: boolean;
  onClick: () => void;
}

export const KSwitch: React.FC<Props> = ({ value, onClick }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        className={`k-switch ${value ? "k-switch-on" : "k-switch-off"}`}
        onClick={onClick}
        onMouseDown={() => {
          setActive(true);
        }}
        onMouseUp={() => {
          setActive(false);
        }}
      >
        <span className={`k-switch-round ${active ? "k-switch-active" : ""}`} />
      </button>
    </>
  );
};
