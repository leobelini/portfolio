import { useContext } from 'react'

import { IdeContext } from './IdeContext'

export const FileBar: React.FC = () => {
  const { currentItem } = useContext(IdeContext)
  return (
    <div className='w-full bg-dark-jungle-green h-12'>
      {currentItem && (
        <div className='bg-chinese-black-3 w-min px-10 h-full flex flex-row items-center justify-center border-b border-carmine  text-gray-400'>
          <currentItem.Icon className='mr-2' />{currentItem.name}
        </div>
      )}
    </div>
  )
}