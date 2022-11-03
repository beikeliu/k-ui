import { App } from "../App";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ErrorElement } from "./Error";
import { Test } from "./Test";

import { KButtonDoc } from "../docs/kbutton";
import { KInputDoc } from "../docs/kinput";
import { KRadioDoc } from "../docs/kradio";
import { KCheckboxDoc } from "../docs/kcheckbox";
import { KSwitchDoc } from "../docs/kswitch";
import { KSelectDoc } from "../docs/kselect";
import { KTableDoc } from "../docs/ktable";

export const menuOptions = {
  button: <KButtonDoc />,
  input: <KInputDoc />,
  radio: <KRadioDoc />,
  checkbox: <KCheckboxDoc />,
  switch: <KSwitchDoc />,
  select: <KSelectDoc />,
  table: <KTableDoc />,
};
const getRootChildren = (): RouteObject[] =>
  (
    Object.keys(menuOptions) as Array<keyof typeof menuOptions>
  ).map<RouteObject>((item) => ({
    path: item,
    element: menuOptions[item],
  }));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: getRootChildren(),
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
