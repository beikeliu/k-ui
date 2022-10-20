import './index.css'
import { Props } from './types'
export const KInput: React.FC<Props> = ({ placeholder, onChange, value }: Props) => (<><input className="k-input" placeholder={placeholder} onChange={onChange} value={value}/></>)
