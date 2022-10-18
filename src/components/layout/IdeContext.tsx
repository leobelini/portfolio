import { createContext, useMemo } from 'react'
import { UseBoolean, useBoolean } from 'react-hanger'
import { useLocation } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

import { listRoutes } from '../../pages/routes'

interface IdeContextType {
  currentPath: string | undefined
  nextPath: string | undefined
  prevPath: string | undefined
  inCode: UseBoolean
}

type IdeProviderProps = {
  children: React.ReactNode
}

export const IdeContext = createContext({} as IdeContextType)

export const IdeProvider: React.FC<IdeProviderProps> = ({ children }) => {
  const inCode = useBoolean(false)
  const location = useLocation()

  const nextPath = useMemo(() => {
    const currentIndex = listRoutes.findIndex(
      (c) => c.path === location.pathname
    )
    return (listRoutes[currentIndex + 1] || listRoutes[0]).path
  }, [location.pathname])

  const prevPath = useMemo(() => {
    const currentIndex = listRoutes.findIndex(
      (c) => c.path === location.pathname
    )
    return (listRoutes[currentIndex - 1] || listRoutes[listRoutes.length - 1])
      .path
  }, [location.pathname])

  return (
    <IdeContext.Provider
      value={{
        currentPath: location.pathname,
        nextPath,
        prevPath,
        inCode,
      }}
    >
      {children}
      {inCode.value && (
        <a
          href="https://github.com/leobelini/portfolio"
          target={`_blank`}
          className={`bg-carmine absolute right-10	 bottom-10 text-slate-100	w-10 h-10 rounded-full text-3xl flex items-center justify-center transition duration-300 hover:scale-110`}
        >
          <AiFillGithub />
        </a>
      )}
    </IdeContext.Provider>
  )
}
