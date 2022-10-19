import './index.css'
import { Props } from './types'

export const KButton = ({ children }: Props) => (<>
  <button className='k-button'>{children}</button>
</>)