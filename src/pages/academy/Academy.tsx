import { MdArchitecture } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { GiDiploma } from 'react-icons/gi'

import { TimeLine, TimeLineContainer } from '../../components/timeLine'

export const Academy = () => {
  return (
    <div className="text-slate-50">
      <TimeLineContainer>
        <TimeLine
          title="Clean Code e Clean Architecture"
          Icon={MdArchitecture}
          prev="Branas.io"
        >
          Curso sobre TypeScript com Clean Code, Refactoring, TDD, OO, Ports and
          Adapters, Clean Architecture, Domain-Driven Design, Design Patterns,
          SOLID, Event Sourcing, CQRS, Event-Driven Architecture e REST.
        </TimeLine>
        <TimeLine
          title="Tecnólogo em Análise e Desenvolvimento"
          Icon={HiAcademicCap}
          prev="Unilins | 2014 - 2017"
        >
          Faculdade onde solidificou alguns conhecimento adquiridos no passado e
          durante o curso. Algumas tecnologias apresentadas: JAVA, C# e MySQL.
        </TimeLine>
        <TimeLine
          title="Técnico em Informática para WEB"
          Icon={GiDiploma}
          prev="ETEC | 2012 - 2013"
        >
          Curso que abriu as portar para o mundo da tecnologia e desenvolvimento
          com PHP, HTML e CSS.
        </TimeLine>
      </TimeLineContainer>
    </div>
  )
}
