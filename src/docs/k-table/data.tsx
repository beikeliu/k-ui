import { Props } from "../../lib/components/k-table";

export const rowKey: Props["rowKey"] = "id";

export const dataSource: Props["data"] = [
  {
    id: 1,
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    id: 2,
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园2号",
  },
];

export const columns: Props["option"] = [
  {
    title: "index",
    render: (_, __, index) => <span>{index}</span>,
  },
  {
    title: "姓名",
    in: "name",
    render: (text) => <a style={{ color: "blue" }}>{text}</a>,
  },
  {
    title: "年龄",
    in: "age",
  },
  {
    title: "住址",
    in: "address",
    render: (_, record) => <span>{record.address}</span>,
  },
];
