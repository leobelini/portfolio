import { BsChevronDown } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { useCallback, useContext } from 'react'

import { IdeContext } from './IdeContext'
import { listRoutes } from '../../pages/routes'
import { Link } from 'react-router-dom'
import { ListFiles } from './components/ListFiles'

export const FileNavigator: React.FC = () => {
  const { currentPath } = useContext(IdeContext)

  const activePath = useCallback(
    (currentValue: string) => {
      if (currentValue === currentPath) return `bg-dark-gunmetal font-semibold`
      return ``
    },
    [currentPath]
  )

  return (
    <div className="bg-chinese-black-2 min-h-full max-h-max w-1/3 hidden md:flex md:flex-col text-gray-400">
      <div className="px-4 py-2">
        <span className="uppercase text-xs">Explorador</span>
      </div>
      <div className="px-4 py-1 bg-dark-jungle-green">
        <span className="uppercase text-xs flex items-center">
          <BsChevronDown className="mr-2" />
          Portfolio
        </span>
      </div>
      <ListFiles />
    </div>
  )
}
