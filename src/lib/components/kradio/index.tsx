import './index.css'
import { Props } from "./types";

export const KRadio: React.FC<Props> = ({children}: Props) => (<><label className="k-radio"><input type="radio" className="k-radio-input"/>{children}</label></>)