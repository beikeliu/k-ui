import { KCalendar } from "../../lib/components/k-calendar";
import * as dayjs from "dayjs";

export const KCalendarDoc: React.FC = () => {
  const day = dayjs();
  return (
    <>
      <KCalendar day={day} />
    </>
  );
};
