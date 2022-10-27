import { useState } from "react";
import { KSelect, Props } from "../../lib/components/kselect";

export const KSelectDoc: React.FC = () => {
  const options: Props["options"] = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "C", value: "3" },
    { label: "D", value: "4" },
  ];
  const [value, setValue] = useState<Props["value"]>("2");
  const onChange: Props["onChange"] = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <KSelect value={value} onChange={onChange} options={options} />
      {value}
    </>
  );
};
