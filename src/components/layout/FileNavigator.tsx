import { BsChevronDown } from 'react-icons/bs'

import { NavigationList } from './components/NavigationList'

export const FileNavigator: React.FC = () => {
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
      <NavigationList />
    </div>
  )
}
