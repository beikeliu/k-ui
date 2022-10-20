import { ChangeEventHandler } from "react";

export interface Props{
  placeholder?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value?: string,
}