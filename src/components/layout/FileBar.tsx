import { useContext, useMemo } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { listRoutes } from '../../pages/routes'
import { IdeContext } from './IdeContext'

export const FileBar: React.FC = () => {
  const { currentPath, nextPath, prevPath } = useContext(IdeContext)

  const currentRoute = useMemo(() => {
    return listRoutes.find((item) => item.path === currentPath)
  }, [currentPath])

  return (
    <div className="w-full bg-dark-jungle-green flex flex-1 flex-row justify-between">
      <Link
        to={prevPath || '/'}
        className="my-auto px-3 block md:hidden text-slate-200 "
        title="Página anterior"
      >
        <AiOutlineArrowLeft className="mx-1 align-middle" />
      </Link>
      {currentRoute && (
        <div className="basis-auto truncate flex justify-between w-full">
          <div className="bg-chinese-black-3 px-5 flex flex-row items-center justify-center border-b border-carmine text-gray-400 h-10">
            <currentRoute.Icon className="mr-2" />
            {currentRoute.name}
          </div>
        </div>
      )}
      <Link
        to={nextPath || '/'}
        className="my-auto px-3 block md:hidden text-slate-200 align-middle"
        title="Próxima pagina"
      >
        <AiOutlineArrowRight className="mx-1" />
      </Link>
    </div>
  )
}
