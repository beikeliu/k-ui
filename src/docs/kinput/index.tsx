import { useState } from "react";
import { KInput, Props } from "../../lib/components/kinput";
export const KInputDoc: React.FC = () => {
  const [value, setValue] = useState<Props["value"]>("");
  const handleChange: Props["onChange"] = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <KInput placeholder="请输入" onChange={handleChange} value={value} />
      {value}
    </>
  );
};
