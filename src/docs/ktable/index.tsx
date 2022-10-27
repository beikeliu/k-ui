import { KTable } from "../../lib/components/ktable";
import { columns, dataSource } from "./data";

export const KTableDoc: React.FC = () => (
  <KTable data={dataSource} option={columns} rowKey="id" />
);
