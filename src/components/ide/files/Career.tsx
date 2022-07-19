import { useMemo } from 'react'
import { IconType } from 'react-icons'
import moment from 'moment'

import { FaReact, FaRobot } from 'react-icons/fa'
import { ImLab } from 'react-icons/im'
import { SiSap } from 'react-icons/si'

import { IdeDbType } from "../IdeDb"
import { TimeLineContainer, TimeLine } from '../../timeLine'

const Career = () => {
  return (
    <div className='px-10 py-6 text-slate-50'>
      <TimeLineContainer>
        <Time
          Icon={FaRobot}
          title="Roberty"
          tag="Atualmente"
          time={{
            start: moment('01/06/2020', 'DD/MM/YYYY')
          }}
        >
          Participação da criação da plataforma de RPA atuando como desenvolvedor full stack. Desenvolvendo recursos como: automações de processos, interfaces/paginas, apis e comunicações em real time.
          <br />
          Algumas tecnologias utilizadas: <b>React, Node.js, TypeScript, Electron, MongoDB</b> e <b>C#</b>.
        </Time>
        <Time
          Icon={ImLab}
          title="Laboratório Sodré"
          time={{
            start: moment('01/10/2017', 'DD/MM/YYYY'),
            end: moment('01/06/2020', 'DD/MM/YYYY')
          }}
        >
          Desenvolvimento de um sistema laboratorial completamente novo para atender todos os requisitos da empresa. Criações de módulos de atendimento, ocorrência, logística, entre outros. Integrações com balanças e impressoras.
          <br />
          Algumas tecnologias utilizadas: <b>React, Node.js, TypeScript, Electron, C#, .NET, SQL Server</b> e <b>React Native</b>.
        </Time>
        <Time
          Icon={SiSap}
          title="ITeam"
          time={{
            start: moment('01/10/2015', 'DD/MM/YYYY'),
            end: moment('01/09/2017', 'DD/MM/YYYY')
          }}
        >
          Inicio da carreira como estagiário com o desenvolvimento de alguns relatórios ALVs simples.
          <br />
          Como desenvolvedor junior eu realizava: Module Pool, User Exit e ALVs avançados (com filtros e interações)
        </Time>
      </TimeLineContainer>
    </div>
  )
}

type TimeProps = {
  Icon?: IconType
  title: string
  tag?: string
  time: {
    start: moment.Moment,
    end?: moment.Moment
  }
  children: React.ReactNode
}

const Time: React.FC<TimeProps> = ({ children, Icon, title, tag, time }) => {
  const timeText = useMemo(() => {
    const startTime = time.start
    let endTime: moment.Moment | undefined
    if (time.end) endTime = time.end
    const totalDiffMonth: number = (endTime || moment()).diff(startTime, 'month', false) + 1
    const diffYear = Math.floor(totalDiffMonth / 12)
    const diffMonth = totalDiffMonth - (diffYear * 12)
    const startText = startTime.format(`MMMM [de] YYYY`)
    const endText = endTime ? endTime.format(`MMMM [de] YYYY`) : `o momento`
    let diffText = diffYear > 0 ? `${diffYear} ano(s)` : ``
    diffText += diffMonth > 0 ? ` ${diffMonth} mes(es)` : ``
    return `${startText} - ${endText} - ${diffText}`
  }, [])

  return (
    <TimeLine
      prev={timeText}
      title={<>{title} {tag && <sup><span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-red-200 text-red-800 ml-3">{tag}</span></sup>}</>}
      Icon={Icon}
    >
      {children}
    </TimeLine>
  )
}

export const CareerDb: IdeDbType = {
  Icon: FaReact,
  key: `career`,
  prevKey: `home`,
  nextKey: `academy`,
  name: `Career.tsx`,
  Render: Career,
}