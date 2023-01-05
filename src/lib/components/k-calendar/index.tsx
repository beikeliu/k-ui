import "./index.css";
import { Calendar } from "./Calendar";
export const KCalendar: React.FC = () => {
  const calendar = new Calendar();
  const items = calendar.getItems();
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
            <tr key={i[0] + i[i.length - 1]}>
              {i.map((j) => (
                <td key={j}>{j}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
