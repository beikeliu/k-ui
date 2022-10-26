import { useState } from "react";
import "./index.css";

export interface Props {
  value: boolean;
  onClick: () => void;
}

export const KSwitch: React.FC<Props> = ({ value, onClick }: Props) => {
  const [actived, setActived] = useState(false);
  return (
    <>
      <span
        className={`k-switch ${value ? "k-switch-on" : "k-switch-off"}`}
        onClick={onClick}
        onMouseDown={() => {
          setActived(true);
        }}
        onMouseUp={() => {
          setActived(false);
        }}
      >
        <span
          className={`k-switch-round ${actived ? "k-switch-actived" : ""}`}
        />
      </span>
    </>
  );
};
