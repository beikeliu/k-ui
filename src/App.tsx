import { Head } from './layout/head'
import { Menu } from './layout/menu'
import { Content } from './layout/content'
import './lib/style/index.css'
export const App: React.FC = () => (
  <>
    <Head />
    <div className='flex'>
      <Menu />
      <Content />
    </div>
  </>
)
