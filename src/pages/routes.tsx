import { AiFillFileMarkdown, AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { TbCSharp } from 'react-icons/tb'
import { VscFilePdf } from 'react-icons/vsc'
import { Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom'
import { Page404 } from './404'

import { Academy } from './academy'
import { Career } from './career'
import { Curriculum } from './curriculum'
import { Home } from './home'
import { Profile } from './profile'

export const listRoutes = [
  {
    path: '/',
    key: `profile`,
    Icon: AiFillHtml5,
    name: `Profile.html`,
    Page: Profile,
  },
  {
    path: '/home',
    key: `home`,
    Icon: AiFillFileMarkdown,
    name: `Home.md`,
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
    Icon: TbCSharp,
    name: `Academy.cshtml`,
    Page: Academy,
  },
  {
    path: '/curriculum',
    key: `curriculum`,
    Icon: VscFilePdf,
    name: `CurriculumVitae.pdf`,
    Page: Curriculum,
  },
]

export const Routes: React.FC = () => {
  return (
    <BrowserRoutes>
      {listRoutes.map(({ Page, path, key }) => (
        <Route path={path} key={key} element={<Page />} />
      ))}
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </BrowserRoutes>
  )
}
