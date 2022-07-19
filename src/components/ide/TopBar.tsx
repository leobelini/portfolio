import { useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IdeContext } from './IdeContext'

export const TopBar: React.FC = () => {
  const { nextKey, prevKey, setCurrentItem } = useContext(IdeContext)
  return (
    <div className='w-full bg-rich-black h-10 flex flex-1 justify-center'>
      <div className='w-full md:w-2/4 h-3/4 m-1 mx-5 flex flex-row items-center justify-center'>
        <div className='flex flex-row items-center justify-center'>
          <button
            disabled={!prevKey}
            onClick={() => { setCurrentItem(prevKey) }}
          >
            <AiOutlineArrowLeft className={`${prevKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} />
          </button>
          <button
            disabled={!nextKey}
            onClick={() => { setCurrentItem(nextKey) }}
          >
            <AiOutlineArrowRight className={`${nextKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} />
          </button>
        </div>
        <div className='ml-2 border border-slate-800 rounded h-full w-full px-5'>
          <h2 className='text-center text-gray-400'>Portfólio</h2>
        </div>
      </div>
    </div>
  )
}