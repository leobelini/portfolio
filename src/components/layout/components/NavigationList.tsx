import { BsChevronDown } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'

import { IdeContext } from '../IdeContext'
import { listRoutes } from '../../../pages/routes'

export const NavigationList: React.FC = () => {
  const { currentPath } = useContext(IdeContext)

  const checkIsCurrent = useCallback(
    (currentValue: string) => {
      if (!currentPath) return false
      return currentValue === currentPath
    },
    [currentPath]
  )

  return (
    <ul>
      <li className="py-1 px-4 hover:bg-dark-jungle-green">
        <span className="flex items-center">
          <AiTwotoneFolderOpen className="mr-2" />
          src
        </span>
      </li>
      <li>
        <ul>
          {listRoutes.map((item) => (
            <li
              className={`py-1 pl-6 hover:bg-dark-jungle-green ${
                checkIsCurrent(item.path) && 'bg-dark-jungle-green'
              }`}
              key={item.key}
            >
              <Link
                className="flex items-center"
                to={item.path}
                title={item.key}
              >
                <item.Icon className="mr-2" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}
