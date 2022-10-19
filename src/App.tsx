import React, { ReactElement } from 'react'
import { Head } from './layout/head'
import { Menu } from './layout/menu'
import { Content } from './layout/content'
import './lib/style/index.css'
export const App = (): ReactElement => (
  <>
    <Head />
    <div className='flex'>
      <Menu />
      <Content />
    </div>
  </>
)
