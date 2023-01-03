import "./index.css";
import successIcon from "../../icons/success.svg";
import errorIcon from "../../icons/error.svg";
import warningIcon from "../../icons/warning.svg";
export type Type = "success" | "error" | "warning";
interface Props {
  content: string;
  type: Type;
}
const icons = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
};

export const KMessage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="k-message">
        <img className="k-message-icon" src={icons[props.type]} />
        {props.content}
      </div>
    </>
  );
};
