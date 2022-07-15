import { BsChevronDown } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { useCallback, useContext } from 'react'

import { IdeContext } from './ideContext'
import { IdeDbType } from './IdeDb'

export const FileNavigator: React.FC = () => {
  const { currentItem, listItem } = useContext(IdeContext)

  const checkIsCurrent = useCallback((currentValue: IdeDbType, checkValue: IdeDbType | undefined) => {
    if (!checkValue) return false
    return currentValue.key === checkValue.key
  }, [])

  return (
    <div className='bg-chinese-black-2 min-h-full max-h-full w-1/3 hidden md:block'>
      <div className='text-slate-50 px-4 py-2'>
        <span className='uppercase text-xs'>Explorador</span>
      </div>
      <div className='text-slate-50 px-4 py-1 bg-dark-jungle-green'>
        <span className='uppercase text-xs flex items-center'><BsChevronDown className='mr-2' />Portifolio</span>
      </div>
      <div className='text-slate-50 py-1 text-xs'>
        <ul>
          <li className='py-1 px-4 hover:bg-dark-jungle-green'>
            <span className='flex items-center'><AiTwotoneFolderOpen className='mr-2' />src</span>
          </li>
          <ul>
            {listItem?.map(item => (
              <li
                className={`py-1 pl-6 hover:bg-dark-jungle-green ${checkIsCurrent(item, currentItem) && 'bg-dark-jungle-green'}`}
                key={item.key}
              >
                <span className='flex items-center'><item.Icon className='mr-2' />{item.name}</span>
              </li>
            ))}

          </ul>
        </ul>
      </div>
    </div>
  )
}