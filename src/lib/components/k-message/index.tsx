import ReactDOM from "react-dom/client";
import "./index.css";
interface Props {
  content: string;
}
type Type = "success" | "error" | "warn" | "info";
type Message = Record<Type, (content: string) => void>;

const KMessage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="k-message">{props.content}</div>
    </>
  );
};

let div: HTMLDivElement;

const domRender = (content: Props): void => {
  div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.createRoot(div).render(<KMessage {...content} />);
};

const domRemove = (): void => {
  document.body.removeChild(div);
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
    setTimeout(() => {
      domRemove();
    }, 3 * 1000);
  };
});

export { message };
