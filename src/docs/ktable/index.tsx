import { KTable } from "../../lib/components/ktable";
import { option, result } from "./data";

export const KTableDoc: React.FC = () => (
  <KTable data={result.data} option={option} rowKey="task_id" />
);
