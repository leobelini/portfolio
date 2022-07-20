import { useMemo } from 'react'

export const Home = () => {
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
    </div>
  )
}
