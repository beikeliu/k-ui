import { App } from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { KButtonDoc } from '../docs/kbutton'
import { KInputDoc } from '../docs/kinput'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/button',
        element: <KButtonDoc />
      },
      {
        path: '/input',
        element: <KInputDoc />
      }
    ]
  }
])
