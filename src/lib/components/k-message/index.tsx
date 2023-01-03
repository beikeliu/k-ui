import { KMessage, Type } from "./comp";
import { DomRender } from "./DomRender";
type Message = Record<Type, (content: string) => void>;
export const message: Message = {
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
