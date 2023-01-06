import "./index.css";
import { Calendar } from "./Calendar";
import * as dayjs from "dayjs";
export interface Props {
  day?: dayjs.Dayjs;
}
export const KCalendar: React.FC<Props> = (props: Props) => {
  const calendar = new Calendar(props.day);
  const renderItems = calendar.getRenderItems();
  return (
    <>
      <table className="k-calendar">
        <thead>
          <tr>
            {Calendar.titles.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderItems.map((i) => (
            <tr key={i[0].value + (i[0].gray ? 100 : 0)}>
              {i.map((j) => (
                <td
                  className={j.gray ? "k-calendar-gray" : ""}
                  key={j.value + (j.gray ? 100 : 0)}
                >
                  {j.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
