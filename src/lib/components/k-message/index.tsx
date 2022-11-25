import ReactDOM from "react-dom/client";
import "./index.css";
interface Props {
  content: string;
}
type Type = "success" | "error" | "warn" | "info";
type Message = Record<Type, any>;

const KMessage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="k-message">{props.content}</div>
    </>
  );
};

const div = document.createElement("div");
document.body.appendChild(div);

const domRender = (content: Props): void => {
  ReactDOM.createRoot(div).render(<KMessage {...content} />);
};

const message: Message = {
  success: () => {},
  error: () => {},
  warn: () => {},
  info: () => {},
};
const types: Type[] = ["success", "error", "warn", "info"];

types.forEach((type) => {
  message[type] = (content: string) => {
    domRender({ content });
  };
});

export { message };
