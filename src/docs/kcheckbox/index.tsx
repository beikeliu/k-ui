import { useState } from "react";
import { KCheckbox, Props } from "../../lib/components/k-checkbox";

export const KCheckboxDoc: React.FC = () => {
  const options: Props["options"] = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "C", value: "3" },
    { label: "D", value: "4" },
  ];
  const [values, setValues] = useState<Props["values"]>(["1", "2"]);
  const onChange: Props["onChange"] = (e) => {
    if (e.target.checked) {
      setValues([...values, e.target.id]);
    } else {
      const index = values.indexOf(e.target.id);
      const valueCopy = [...values];
      valueCopy.splice(index, 1);
      setValues(valueCopy);
    }
  };
  return (
    <>
      <KCheckbox onChange={onChange} values={values} options={options} />
      &nbsp;&nbsp;{values}
    </>
  );
};
