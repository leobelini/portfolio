import { useContext, useMemo } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { listRoutes } from '../../pages/routes'
import { IdeContext } from './IdeContext'

export const FileBar: React.FC = () => {
  const { currentPath, nextPath, prevPath } = useContext(IdeContext)
  const currentRoute = useMemo(() => {
    return listRoutes.find(item => item.path === currentPath)
  }, [currentPath])
  return (
    <div className='w-full bg-dark-jungle-green flex flex-1 flex-row justify-between'>
      <Link to={prevPath || '/'} className="h-10 px-3 block md:hidden text-slate-200"      >
        <AiOutlineArrowLeft className='mx-1' />
      </Link>
      {currentRoute && (
        <div className='basis-auto truncate'>
          <div className='bg-chinese-black-3 px-5 flex flex-row items-center justify-center border-b border-carmine  text-gray-400 h-10'>
            <currentRoute.Icon className='mr-2' />{currentRoute.name}
          </div>
        </div>
      )}
      <Link to={nextPath || '/'} className="h-10 px-3 block md:hidden text-slate-200"      >
        <AiOutlineArrowRight className='mx-1' />
      </Link>
    </div>
  )
}