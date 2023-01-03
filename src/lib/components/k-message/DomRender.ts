import { ReactElement } from "react";
import ReactDOM from "react-dom/client";

export class DomRender {
  div: HTMLDivElement;
  comp: ReactElement;
  constructor(comp: ReactElement) {
    this.div = document.createElement("div");
    this.comp = comp;
  }

  render(): void {
    this.div && document.body.appendChild(this.div);
    ReactDOM.createRoot(this.div).render(this.comp);
  }

  remove(): void {
    this.div && document.body.removeChild(this.div);
  }
}
