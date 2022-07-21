import { createContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { listRoutes } from '../../pages/routes'

interface IdeContextType {
  currentPath: string | undefined
  nextPath: string | undefined
  prevPath: string | undefined
}

type IdeProviderProps = {
  children: React.ReactNode
}

export const IdeContext = createContext({} as IdeContextType)

export const IdeProvider: React.FC<IdeProviderProps> = ({ children }) => {
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
      }}
    >
      {children}
    </IdeContext.Provider>
  )
}
