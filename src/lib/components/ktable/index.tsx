import "./index.css";

export interface Props {
  rowKey: string | number;
  data: Array<Record<string, any>>;
  option: Array<{
    in?: string;
    title: string;
    render?: (
      text: string | null,
      record: Record<string, any>,
      index: number
    ) => JSX.Element;
  }>;
}

export const KTable: React.FC<Props> = ({ rowKey, data, option }: Props) => {
  return (
    <>
      <table className="k-table">
        <thead>
          <tr>
            {option.map((op) => (
              <th key={op.title}>{op.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => (
            <tr key={dt[rowKey]}>
              {option.map((op) => (
                <td key={op.title}>
                  {op.render
                    ? op.render(op.in ? dt[op.in] : null, dt, index)
                    : op.in
                    ? dt[op.in]
                    : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
