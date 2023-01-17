import { useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IdeContext } from './IdeContext'

export const TopBar: React.FC = () => {
  const { nextPath, prevPath } = useContext(IdeContext)
  return (
    <div className="w-full bg-rich-black h-10 flex flex-1 justify-center">
      <div className="w-full md:w-2/4 h-3/4 m-1 mx-5 flex flex-row items-center justify-center">
        <div className="flex-row items-center justify-center hidden md:flex">
          <Link to={prevPath || '/'} title="Página anterior">
            <AiOutlineArrowLeft className="text-slate-200 mx-1" />
          </Link>
          <Link to={nextPath || '/'} title="Próxima pagina">
            <AiOutlineArrowRight className="text-slate-200 mx-1" />
          </Link>
        </div>
        <div className="ml-2 border border-slate-800 rounded h-full w-full px-5">
          <h2 className="text-center text-gray-400">Portfólio</h2>
        </div>
      </div>
      <div className="hidden md:block"></div>
    </div>
  )
}
