import dayjs from "dayjs";
import { useState } from "react";
import { KButton } from "../../lib/components/k-button";
import { KCalendar } from "../../lib/components/k-calendar";
import { KSelect, Props } from "../../lib/components/k-select";
const getYearOptions = (): Props["options"] => {
  const options: Props["options"] = [];
  const currentYear = dayjs().year();
  for (let n = currentYear - 10; n <= currentYear + 10; n++) {
    options.push({
      label: `${n}年`,
      value: n,
    });
  }
  return options;
};

const getMonthOptions = (): Props["options"] => {
  const options: Props["options"] = [];
  for (let n = 1; n <= 12; n++) {
    options.push({
      label: `${n}月`,
      value: n,
    });
  }
  return options;
};
export const KCalendarDoc: React.FC = () => {
  const yearOptions = getYearOptions();
  const monthOptions = getMonthOptions();
  const [yearValue, setYearValue] = useState<Props["value"]>(dayjs().year());
  const [monthValue, setMonthValue] = useState<Props["value"]>(
    dayjs().month() + 1
  );
  const handleYearClick: Props["handleClick"] = (_, value) => {
    setYearValue(value);
  };
  const handleMonthClick: Props["handleClick"] = (_, value) => {
    setMonthValue(value);
  };
  const day = dayjs()
    .set("year", yearValue as number)
    .set("month", (monthValue as number) - 1);
  const up = (): void => {
    if ((monthValue as number) === 1) {
      setYearValue((yearValue as number) - 1);
      setMonthValue(12);
    } else {
      setMonthValue((monthValue as number) - 1);
    }
  };
  const next = (): void => {
    if ((monthValue as number) === 12) {
      setYearValue((yearValue as number) + 1);
      setMonthValue(1);
    } else {
      setMonthValue((monthValue as number) + 1);
    }
  };
  return (
    <>
      <KSelect
        value={yearValue}
        options={yearOptions}
        handleClick={handleYearClick}
      />
      <KSelect
        value={monthValue}
        options={monthOptions}
        handleClick={handleMonthClick}
      />
      <KButton onClick={up}>上一月</KButton>
      <KButton onClick={next}>下一月</KButton>
      <KCalendar day={day} />
    </>
  );
};
