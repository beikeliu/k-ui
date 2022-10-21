import { ChangeEventHandler } from "react";

export interface Props {
  children?: string;
  value: string;
}

export interface GroupProps {
  children?: React.ReactElement[];
  value: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
