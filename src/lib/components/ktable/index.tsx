import "./index.css";

export interface Props {
  rowKey: string | number;
  data: Array<Record<string, any>>;
  option: Array<{
    in: string;
    title: string;
  }>;
}

export const KTable: React.FC<Props> = ({ rowKey, data, option }: Props) => {
  return (
    <>
      <table className="k-table">
        <thead>
          <tr>
            {option.map((op) => (
              <th key={op.in}>{op.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <tr key={dt[rowKey]}>
              {option.map((op) => (
                <td key={op.title}>{dt[op.in]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
