import { useState } from "react";
import { KSwitch, Props } from "../../lib/components/kswitch";

export const KSwitchDoc: React.FC = () => {
  const [value, setValue] = useState<Props["value"]>(false);
  const onClick: Props["onClick"] = () => {
    setValue(!value);
  };
  return (
    <>
      <KSwitch value={value} onClick={onClick} />
      &nbsp;&nbsp;{value.toString()}
    </>
  );
};
