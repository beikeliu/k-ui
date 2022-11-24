import { useState } from "react";
import "./index.css";

export interface Props {
  value: string;
  handleClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => void;
  options: Array<{
    label: string;
    value: string;
  }>;
}

export const KSelect: React.FC<Props> = ({
  value: selectd,
  handleClick,
  options,
}: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        className="k-select-box"
        onClick={() => {
          setVisible(!visible);
        }}
      ></div>
      {visible ? (
        <div className="k-select-list">
          {options.map(({ label, value }) => (
            <div
              key={label}
              className={`k-select-list-item ${
                value === selectd ? "k-select-list-active" : ""
              }`}
              onClick={(e) => {
                handleClick(e, value);
                setVisible(false);
              }}
            >
              {label}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
