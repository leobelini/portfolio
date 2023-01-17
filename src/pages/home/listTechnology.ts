

import { FaNodeJs } from 'react-icons/fa'
import { RiHtml5Line, RiCss3Line, RiReactjsLine } from 'react-icons/ri'
import {
  SiAdonisjs,
  SiElectron,
  SiExpress,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
} from 'react-icons/si'
import { TbBrandJavascript, TbBrandReactNative, TbCSharp } from 'react-icons/tb'

export const listTechnology = [
  { Icon: RiHtml5Line, name: `HTML5`, color: `text-html-brand` },
  { Icon: RiCss3Line, name: `CSS3`, color: `text-css-brand` },
  { Icon: TbBrandJavascript, name: `JavaScript`, color: `text-js-brand` },
  { Icon: RiReactjsLine, name: `React`, color: `text-react-brand` },
  {
    Icon: TbBrandReactNative,
    name: `React Native`,
    color: `text-react-native-brand`,
  },
  { Icon: FaNodeJs, name: `Node.js`, color: `text-node-brand` },
  { Icon: SiAdonisjs, name: `AdonisJS`, color: `text-adonis-brand` },
  { Icon: SiNestjs, name: `Nest.js`, color: `text-nestjs-brand` },
  { Icon: SiExpress, name: `Express.js`, color: `text-express-brand` },
  { Icon: SiElectron, name: `Electron`, color: `text-electron-brand` },
  { Icon: TbCSharp, name: `C#`, color: `text-c-charp-brand` },
  { Icon: SiMongodb, name: `MongoDB`, color: `text-mongodb-brand` },
  {
    Icon: SiMicrosoftsqlserver,
    name: `SQL Server`,
    color: `text-sql-server-brand`,
  },
  { Icon: SiPostgresql, name: `PostgreSQL`, color: `text-postgre-sql-brand` },
]
