import ReactDOM from "react-dom/client";
import "./index.css";
import successIcon from "../../icons/success.svg";
import errorIcon from "../../icons/error.svg";
import warningIcon from "../../icons/warning.svg";
import { ReactElement } from "react";
interface Props {
  content: string;
  type: Type;
}
type Type = "success" | "error" | "warning";
type Message = Record<Type, (content: string) => void>;

const icons = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
};

const KMessage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="k-message">
        <img className="k-message-icon" src={icons[props.type]} />
        {props.content}
      </div>
    </>
  );
};

class DomRender {
  div: HTMLDivElement;
  comp: ReactElement;
  constructor(comp: ReactElement) {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    this.comp = comp;
  }

  render(): void {
    ReactDOM.createRoot(this.div).render(this.comp);
  }

  remove(): void {
    this.div && document.body.removeChild(this.div);
  }
}

const message: Message = {
  success: () => {},
  error: () => {},
  warning: () => {},
};
const types: Type[] = ["success", "error", "warning"];

types.forEach((type) => {
  message[type] = (content: string) => {
    const render = new DomRender(<KMessage content={content} type={type} />);
    render.render();
    setTimeout(() => {
      render.remove();
    }, 3 * 1000);
  };
});

export { message };
