import { useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IdeContext } from './ideContext'

export const TopBar: React.FC = () => {
  const { nextKey, prevKey } = useContext(IdeContext)
  return (
    <div className='w-full bg-chinese-black h-10 flex flex-1 justify-center'>
      <div className='w-2/4 h-3/4 m-1 flex flex-row items-center justify-center'>
        <button disabled={!prevKey}><AiOutlineArrowLeft className={`${prevKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} /></button>
        <button disabled={!nextKey}><AiOutlineArrowRight className={`${nextKey ? 'text-slate-200' : 'text-slate-800'} mx-1`} /></button>
        <div className='border border-slate-800 rounded h-full w-full'>
          <h2 className='text-center text-slate-200'>Portifólio</h2>
        </div>
      </div>
    </div>
  )
}