import { createContext, useMemo } from "react"
import { useArray, useStateful } from "react-hanger"
import { IdeDb, IdeDbType } from "./IdeDb"

interface IdeContextType {
  currentItem: IdeDbType | undefined
  nextKey: string | undefined
  prevKey: string | undefined
  listItem: IdeDbType[]
}

type IdeProviderProps = {
  children: React.ReactNode
}

export const IdeContext = createContext({} as IdeContextType)

export const IdeProvider: React.FC<IdeProviderProps> = ({ children }) => {
  const listItem = useArray(IdeDb)
  const currentKey = useStateful(IdeDb.length > 0 ? IdeDb[0].key : undefined)

  const currentItem = useMemo(() => {
    if (currentKey.value)
      return listItem.value.find(item => item.key === currentKey.value)
  }, [listItem.value, currentKey.value])

  const nextKey = useMemo(() => {
    return currentItem?.nextKey
  }, [currentItem])

  const prevKey = useMemo(() => {
    return currentItem?.prevKey
  }, [currentItem])

  return (
    <IdeContext.Provider
      value={{
        currentItem,
        nextKey,
        prevKey,
        listItem: listItem.value
      }}
    >
      {children}
    </IdeContext.Provider>
  )
}