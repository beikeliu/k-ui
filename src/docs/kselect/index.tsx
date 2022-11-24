import { useState } from "react";
import { KSelect, Props } from "../../lib/components/k-select";

export const KSelectDoc: React.FC = () => {
  const options: Props["options"] = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "C", value: "3" },
    { label: "D", value: "4" },
  ];
  const [value, setValue] = useState<Props["value"]>("2");
  const handleClick: Props["handleClick"] = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <KSelect value={value} handleClick={handleClick} options={options} />
      {value}
      <div>占位测试</div>
    </>
  );
};
