import { IconType } from "react-icons"
import { AcademyDb } from "./files/Academy"
import { CareerDb } from "./files/Career"
import { HomeDb } from "./files/Home"
import { ProfileDb } from "./files/Profile"

export type IdeDbType = {
  key: string
  nextKey?: string
  prevKey?: string
  name: string
  Render: () => JSX.Element
  Icon: IconType
}

export const IdeDb: IdeDbType[] = [ProfileDb, HomeDb, CareerDb, AcademyDb]