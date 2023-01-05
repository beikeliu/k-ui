import "./index.css";
import { Calendar } from "./Calendar";
import * as dayjs from "dayjs";
export interface Props {
  day?: dayjs.Dayjs;
}
export const KCalendar: React.FC<Props> = (props: Props) => {
  const calendar = new Calendar(props.day);
  const items = calendar.getItems();
  console.log(items);
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
          {items.map((i) => (
            <tr key={i[0].key}>
              {i.map((j) => (
                <td className={j.gray ? "k-calendar-gray" : ""} key={j.title}>
                  {j.title}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
