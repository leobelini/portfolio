import { FaReact } from 'react-icons/fa'
import { Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom'

import { Page404 } from './404'
import { Academy } from './academy'
import { Career } from './career'
import { Code } from './code'
import { Curriculum } from './curriculum'
import { Home } from './home'

export const listRoutes = [
  {
    path: '/',
    key: `home`,
    Icon: FaReact,
    name: `Home.tsx`,
    Page: Home,
  },
  {
    path: '/career',
    key: `career`,
    Icon: FaReact,
    name: `Career.tsx`,
    Page: Career,
  },
  {
    path: '/academy',
    key: `academy`,
    Icon: FaReact,
    name: `Academy.tsx`,
    Page: Academy,
  },
  {
    path: '/curriculum',
    key: `curriculum`,
    Icon: FaReact,
    name: `Curriculum.tsx`,
    Page: Curriculum,
  },
]

export const Routes: React.FC = () => {
  return (
    <BrowserRoutes>
      {listRoutes.map(({ Page, path, key }) => (
        <Route path={path} key={key} element={<Page />} />
      ))}
      <Route path="/code/:extension/:sha" element={<Code />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </BrowserRoutes>
  )
}
