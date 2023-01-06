import "./index.css";
import { titles, getRenderItems } from "./utils";
import * as dayjs from "dayjs";
export interface Props {
  day?: dayjs.Dayjs;
}
export const KCalendar: React.FC<Props> = (props: Props) => {
  const renderItems = getRenderItems();
  return (
    <>
      <table className="k-calendar">
        <thead>
          <tr>
            {titles.map((t) => (
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
