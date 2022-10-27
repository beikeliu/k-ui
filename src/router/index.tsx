import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./Error";
import { Test } from "./Test";

import { KButtonDoc } from "../docs/kbutton";
import { KInputDoc } from "../docs/kinput";
import { KRadioDoc } from "../docs/kradio";
import { KCheckboxDoc } from "../docs/kcheckbox";
import { KSwitchDoc } from "../docs/kswitch";
import { KSelectDoc } from "../docs/kselect";
import { KTableDoc } from "../docs/ktable";

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
      {
        path: "/table",
        element: <KTableDoc />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
