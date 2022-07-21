import { BsChevronDown } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { useCallback, useContext } from 'react'

import { IdeContext } from './IdeContext'
import { listRoutes } from '../../pages/routes'
import { Link } from 'react-router-dom'

export const FileNavigator: React.FC = () => {
  const { currentPath } = useContext(IdeContext)

  const checkIsCurrent = useCallback(
    (currentValue: string) => {
      if (!currentPath) return false
      return currentValue === currentPath
    },
    [currentPath]
  )

  return (
    <div className="bg-chinese-black-2 min-h-full max-h-full w-1/3 hidden md:block text-gray-400">
      <div className="px-4 py-2">
        <span className="uppercase text-xs">Explorador</span>
      </div>
      <div className="px-4 py-1 bg-dark-jungle-green">
        <span className="uppercase text-xs flex items-center">
          <BsChevronDown className="mr-2" />
          Portifolio
        </span>
      </div>
      <div className="py-1">
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
      </div>
    </div>
  )
}
