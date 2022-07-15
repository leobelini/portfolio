import { IconType } from "react-icons"

export type IdeDbType = {
  key: string
  nextKey?: string
  prevKey?: string
  name: string
  render: JSX.Element
  Icon: IconType
}

export const IdeDb: IdeDbType[] = []