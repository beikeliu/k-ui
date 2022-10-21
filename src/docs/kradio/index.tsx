import { useState } from "react";
import { KRadio, KRadioGroup } from "../../lib/components/kradio";
import { GroupProps } from "../../lib/components/kradio/types";
export const KRadioDoc: React.FC = () => {
  const [value, setValue] = useState<GroupProps["value"]>("1");
  const onChange: GroupProps["onChange"] = (e) => {
    setValue(e.target.id);
  };
  return (
    <>
      <KRadioGroup onChange={onChange} value={value}>
        <KRadio value={"1"}>A</KRadio>
        <KRadio value={"2"}>B</KRadio>
        <KRadio value={"3"}>C</KRadio>
        <KRadio value={"4"}>D</KRadio>
      </KRadioGroup>
      {value}
    </>
  );
};
