import { useState } from "react";
import { KSelect, Props } from "../../lib/components/k-select";

export const KSelectDoc: React.FC = () => {
  const options: Props["options"] = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "C", value: "3" },
    { label: "D", value: "4" },
    { label: "E", value: "5" },
    { label: "F", value: "6" },
    { label: "G", value: "7" },
    { label: "H", value: "8" },
    { label: "I", value: "9" },
  ];
  const [value, setValue] = useState<Props["value"]>("2");
  const handleClick: Props["handleClick"] = (e, value) => {
    setValue(value as string);
  };
  return (
    <>
      <KSelect value={value} handleClick={handleClick} options={options} />
      <span>&nbsp;&nbsp;{value}</span>
      <div>占位测试</div>
    </>
  );
};
