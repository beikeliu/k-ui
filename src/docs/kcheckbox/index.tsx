import { useState } from "react";
import { KCheckbox, KCheckboxGroup } from "../../lib/components/kcheckbox";
import { GroupProps } from "../../lib/components/kcheckbox/types";

export const KCheckboxDoc: React.FC = () => {
  const [value, setValue] = useState<GroupProps["value"]>(["1"]);
  const onChange: GroupProps["onChange"] = (e) => {
    if (e.target.checked) {
      setValue([...value, e.target.id]);
    } else {
      const index = value.indexOf(e.target.id);
      const valueCopy = [...value];
      valueCopy.splice(index, 1);
      setValue(valueCopy);
    }
  };
  return (
    <>
      <KCheckboxGroup onChange={onChange} value={value}>
        <KCheckbox value="1">A</KCheckbox>
        <KCheckbox value="2">B</KCheckbox>
        <KCheckbox value="3">C</KCheckbox>
        <KCheckbox value="4">D</KCheckbox>
      </KCheckboxGroup>
      &nbsp;&nbsp;{value}
    </>
  );
};
