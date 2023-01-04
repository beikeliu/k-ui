import { App } from "../App";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ErrorElement } from "./Error";

import { KButtonDoc } from "../docs/k-button";
import { KInputDoc } from "../docs/k-input";
import { KRadioDoc } from "../docs/k-radio";
import { KCheckboxDoc } from "../docs/k-checkbox";
import { KSwitchDoc } from "../docs/k-switch";
import { KSelectDoc } from "../docs/k-select";
import { KTableDoc } from "../docs/k-table";
import { KMessageDoc } from "../docs/k-message";
import { KCalendarDoc } from "../docs/k-calendar";

export const menuOptions = {
  button: <KButtonDoc />,
  input: <KInputDoc />,
  radio: <KRadioDoc />,
  checkbox: <KCheckboxDoc />,
  switch: <KSwitchDoc />,
  select: <KSelectDoc />,
  table: <KTableDoc />,
  message: <KMessageDoc />,
  calendar: <KCalendarDoc />,
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
]);
