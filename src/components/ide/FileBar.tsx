import { useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IdeContext } from './IdeContext'

export const FileBar: React.FC = () => {
  const { currentItem, nextKey, prevKey, setCurrentItem } = useContext(IdeContext)
  return (
    <div className='w-full bg-dark-jungle-green flex flex-1 flex-row justify-between'>
      <button
        disabled={!prevKey}
        onClick={() => { setCurrentItem(prevKey) }}
        className="h-10 px-10 block md:hidden"
      >
        <AiOutlineArrowLeft className={`${prevKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} />
      </button>
      {currentItem && (
        <div className='bg-chinese-black-3 w-min px-10 flex flex-row items-center justify-center border-b border-carmine  text-gray-400 h-10'>
          <currentItem.Icon className='mr-2' />{currentItem.name}
        </div>
      )}
      <button
        disabled={!nextKey}
        onClick={() => { setCurrentItem(nextKey) }}
        className="h-10 px-10 block md:hidden"
      >
        <AiOutlineArrowRight className={`${nextKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} />
      </button>
    </div>
  )
}