import { useMemo } from 'react'
import { AiFillFileMarkdown } from 'react-icons/ai'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { IdeDbType } from "../IdeDb"

const Home = () => {
  const greeting = useMemo(() => {
    const hours = new Date().getHours()
    if (hours >= 0 && hours < 12) return `Bom dia`
    if (hours >= 12 && hours < 18) return `Boa tarde`
    return `Boa noite`
  }, [])

  const yearWorking = useMemo(() => {
    const yearInit = 2015
    const yearNow = new Date().getFullYear()

    return yearNow - yearInit
  }, [])

  return (
    <div className='p-6 text-gray-400'>
      <p className='text-lg my-2'>{greeting}, tudo bem?</p>
      <p className='my-2'>
        Meu nome é <b>Leonardo Belini</b>, sou Desenvolvedor Full Stack, atuando como desenvolvedor á {yearWorking} anos.
        Já trabalhei em empresas como <a href='https://www.iteam.inf.br/' className='underline decoration-carmine' target="_blank" rel="noopener">ITeam</a>, <a href='https://sodretox.com.br/' className='underline decoration-carmine' target="_blank" rel="noopener">Sodré</a> e atualmente no <a href='https://roberty.app/' className='underline decoration-carmine text-gray-400' target="_blank" rel="noopener">Roberty</a>.
      </p>
      <p className='my-2'>Essa diversidade garantiu ampla experiência em diversas tecnologias como:</p>
      <ul className='my-2 ml-8 list-disc'>
        <li>Node/JavaScript/TypeScript</li>
        <li>C#/.NET</li>
        <li>NoSQL/MySQL/SQL Server</li>
      </ul>
      <p className='my-2'>O foco é oferecer soluções aos clientes.</p>
      {/* <p className='mt-12 text-sm'>
        Utilize <AiOutlineArrowLeft className='inline mx-3' /> ou <AiOutlineArrowRight className='inline mx-3' /> disponível na barra de navegação para alterar o arquivo visualizado.
      </p> */}
    </div>
  )
}

export const HomeDb: IdeDbType = {
  Icon: AiFillFileMarkdown,
  prevKey: `profile`,
  nextKey: `career`,
  key: `home`,
  name: `Home.md`,
  Render: Home,
}