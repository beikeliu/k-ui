import { ChangeEventHandler, useState } from "react";
import { KInput } from "../../lib/components/kinput";
export const KInputDoc: React.FC = () => {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <KInput placeholder="请输入" onChange={handleChange} value={value} />
      {value}
    </>
  );
};
