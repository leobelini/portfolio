import moment from 'moment'

import { FaRobot } from 'react-icons/fa'
import { ImLab } from 'react-icons/im'
import { SiDevdotto, SiNodedotjs, SiSap } from 'react-icons/si'
import { TimeLineContainer } from '../../components/timeLine'
import { Time } from './components/Time'

export const Career = () => {
  return (
    <div className="text-slate-50 px-2 py-4 md:px-28 md:py-10">
      <TimeLineContainer>
        <Time
          Icon={SiDevdotto}
          title="Globalsys"
          tag="Atualmente"
          time={{
            start: moment('01/09/2022', 'DD/MM/YYYY'),
          }}
        >
          Alocado em clientes.
          <br />
          Algumas tecnologias utilizadas: <b>Node.js</b> e <b>NestJS</b>.
        </Time>
        <Time
          Icon={FaRobot}
          title="HighJump"
          time={{
            start: moment('01/08/2022', 'DD/MM/YYYY'),
            end: moment('01/09/2022', 'DD/MM/YYYY'),
          }}
        >
          Desenvolvimento de automações em clientes utilizando a plataforma
          Roberty.
        </Time>
        <Time
          Icon={SiNodedotjs}
          title="Roberty"
          time={{
            start: moment('01/06/2020', 'DD/MM/YYYY'),
            end: moment('01/08/2022', 'DD/MM/YYYY'),
          }}
        >
          Participação da criação da plataforma de RPA atuando como
          desenvolvedor full stack. Desenvolvendo recursos como: automações de
          processos, interfaces/paginas, apis e comunicações em real time.
          <br />
          Algumas tecnologias utilizadas:{' '}
          <b>React, Node.js, TypeScript, Electron, MongoDB</b> e <b>C#</b>.
        </Time>
        <Time
          Icon={ImLab}
          title="Laboratório Sodré"
          time={{
            start: moment('01/10/2017', 'DD/MM/YYYY'),
            end: moment('01/06/2020', 'DD/MM/YYYY'),
          }}
        >
          Desenvolvimento de um sistema laboratorial completamente novo para
          atender todos os requisitos da empresa. Criações de módulos de
          atendimento, ocorrência, logística, entre outros. Integrações com
          balanças e impressoras.
          <br />
          Algumas tecnologias utilizadas:{' '}
          <b>
            React, Node.js, TypeScript, Electron, C#, .NET, SQL Server
          </b> e <b>React Native</b>.
        </Time>
        <Time
          Icon={SiSap}
          title="ITeam"
          time={{
            start: moment('01/10/2015', 'DD/MM/YYYY'),
            end: moment('01/09/2017', 'DD/MM/YYYY'),
          }}
        >
          Inicio da carreira como estagiário com o desenvolvimento de alguns
          relatórios ALVs simples.
          <br />
          Como desenvolvedor junior eu realizava: Module Pool, User Exit e ALVs
          avançados (com filtros e interações)
        </Time>
      </TimeLineContainer>
    </div>
  )
}
