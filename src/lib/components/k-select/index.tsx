import { useEffect, useRef, useState } from "react";
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
  value: selected,
  handleClick,
  options,
}: Props) => {
  const kSelect = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleClickOut: (this: Document, ev: MouseEvent) => void = (e) => {
      (e.target as Node).contains(kSelect.current) && setVisible(false);
    };
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div className="k-select" ref={kSelect}>
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
                value === selected ? "k-select-list-active" : ""
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
    </div>
  );
};
