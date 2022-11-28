import { useState } from "react";
import { KRadio, Props } from "../../lib/components/k-radio";
export const KRadioDoc: React.FC = () => {
  const options: Props["options"] = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "C", value: "3" },
    { label: "D", value: "4" },
  ];
  const [value, setValue] = useState<Props["value"]>("1");
  const onChange: Props["onChange"] = (e) => {
    setValue(e.target.id);
  };
  return (
    <>
      <KRadio onChange={onChange} value={value} options={options} />
      &nbsp;&nbsp;{value}
    </>
  );
};
