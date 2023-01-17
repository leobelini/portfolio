import { useMemo, useState } from 'react'
import { IconType } from 'react-icons'
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

import profile from '../../assets/profile.jpg'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'

import { listTechnology } from './listTechnology'
import { Tooltip } from '../../components/tooltip'
import { useDebouncedCallback } from '../../hooks'

export const Home = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [currentImage, setCurrentImage] = useState(profile)
  const [totalClicks, setTotalClicks] = useState(0)

  const handleClick = useDebouncedCallback(() => {
    if (totalClicks >= 10) {
      setCurrentImage(profile3)
    } else if (totalClicks >= 5) {
      setCurrentImage(profile2)
    } else {
      setCurrentImage(profile)
    }
    setShowFilters(false)
    setTotalClicks(0)
  }, 1000)

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

  const styleImg: React.CSSProperties = useMemo(() => {
    let hue = 0
    let blur = 0
    if (showFilters) {
      blur = totalClicks
      hue = Math.round(Math.random() * 350)
    }
    return {
      filter: `blur(${blur}px) hue-rotate(${hue}deg)`,
    }
  }, [totalClicks, showFilters])

  return (
    <div className="text-gray-400 grid grid-cols-2 gap-4 px-2 md:px-28 md:py-10">
      <div className="xl:col-span-1 xl:order-1 col-span-2 order-2">
        <p className="text-lg my-2">{greeting}, tudo bem?</p>
        <p className="my-2">
          Meu nome é <b>Leonardo Belini</b>, sou Desenvolvedor Full Stack,
          atuando como desenvolvedor á {yearWorking} anos. Já trabalhei em
          empresas como <Link href="https://www.iteam.inf.br" text="ITeam" />,{' '}
          <Link href="https://sodretox.com.br" text="Sodré" />,{' '}
          <Link href="https://roberty.app" text="Roberty" /> e atualmente estou
          na <Link href="https://www.globalsys.com.br" text="Globalsys" />
          {` `}
          como outsourcing.
        </p>
        <p className="my-2">
          Essa diversidade garantiu ampla experiência em diversas tecnologias
          como:
        </p>
        <div className="flex flex-wrap">
          {listTechnology.map((tec) => (
            <IconTechnology
              key={tec.name}
              name={tec.name}
              Icon={tec.Icon}
              color={tec.color}
            />
          ))}
        </div>
      </div>
      <div className="xl:col-span-1 xl:mt-0 xl:order-2 col-span-2 mt-10 order-1">
        <div className="flex flex-1 justify-center items-center mb-10 flex-col">
          <img
            onClick={() => {
              setShowFilters(true)
              setTotalClicks((v) => v + 1)
              handleClick()
            }}
            src={currentImage}
            alt="Foto de perfil de Leonardo Belini"
            className="rounded-full w-40"
            style={styleImg}
          />
          <div className="text-center mt-6 xl:block hidden">
            <p className="py-2">
              <b>Nome: </b>Leonardo Siervo Belini
            </p>
            <p className="py-2">
              <b>E-mail: </b>leobelini96@gmail.com
            </p>
            <p className="py-2">
              <b>Telefone/Celular: </b>(14) 99627-1006
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center mt-5 text-2xl">
          <SocialLink
            Icon={AiOutlineMail}
            color="text-email-brand"
            href="mailto:leobelini96@gmail.com?subject=Contato pelo site"
          />
          <SocialLink
            Icon={AiOutlineWhatsApp}
            color="text-whatsapp-brand"
            target="_blank"
            rel="noopener"
            href="https://api.whatsapp.com/send?phone=5514996271006&text=Contato%20pelo%20site"
          />
          <SocialLink
            Icon={AiFillLinkedin}
            color="text-linkedin-brand"
            rel="noopener"
            href="https://www.linkedin.com/in/leobelini/"
          />
          <SocialLink
            Icon={AiFillGithub}
            rel="noopener"
            href="https://github.com/leobelini"
          />
        </div>
      </div>
    </div>
  )
}

interface SocialProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  Icon: IconType
  color?: string
}

const SocialLink: React.FC<SocialProps> = ({ Icon, color, ...props }) => {
  const colorText = color || `text-carmine`
  return (
    <a
      {...props}
      className={`mx-2 cursor-pointer hover:${colorText} transition duration-300 hover:scale-150`}
    >
      <Icon />
    </a>
  )
}

interface LinkProps {
  href: string
  text: string
}

const Link: React.FC<LinkProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="decoration-carmine font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

interface IconTechnologyProps {
  Icon: IconType
  href?: string
  name: string
  color?: string
}

const IconTechnology: React.FC<IconTechnologyProps> = ({
  Icon,
  name,
  color,
}) => {
  const colorText = color || `text-carmine`
  return (
    <Tooltip tooltipContent={name}>
      <Icon
        className={`h-10 w-10 p-2 hover:${colorText} transition duration-300 hover:scale-150`}
      />
    </Tooltip>
  )
}
