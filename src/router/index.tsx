import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";
import { KButtonDoc } from "../docs/kbutton";
import { KInputDoc } from "../docs/kinput";
import { KRadioDoc } from "../docs/kradio";
import { KCheckboxDoc } from "../docs/kcheckbox";
import { KSwitchDoc } from "../docs/kswitch";
import { KSelectDoc } from "../docs/kselect";

export const ErrorElement: React.FC = () => (
  <>
    <div style={{ color: "red" }}>此页面无法访问，请检查网址是否正确。</div>
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/button",
        element: <KButtonDoc />,
      },
      {
        path: "/input",
        element: <KInputDoc />,
      },
      {
        path: "/radio",
        element: <KRadioDoc />,
      },
      {
        path: "/checkbox",
        element: <KCheckboxDoc />,
      },
      {
        path: "/switch",
        element: <KSwitchDoc />,
      },
      {
        path: "/select",
        element: <KSelectDoc />,
      },
    ],
  },
]);
