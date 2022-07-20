import { IconType } from 'react-icons'
import { AiFillHtml5, AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import profile from '../../../assets/profile.jpg'

import { IdeDbType } from "../IdeDb"

const Profile = () => {

  return (
    <div className='px-28 py-6 text-gray-400'>
      <div className='flex flex-1 justify-center items-center mb-10 flex-col'>
        <img src={profile} alt="Foto de perfil de Leonardo Belini" className='rounded-full w-40' />
        <div className="text-center mt-6">

          <p className='py-2'>
            <b>Nome: </b>Leonardo Siervo Belini
          </p>
          <p className='py-2'>
            <b>E-mail: </b>leobelini96@gmail.com
          </p>
          <p className='py-2'>
            <b>Telefone/Celular: </b>(14) 99627-1006
          </p>

        </div>
      </div>

      <div className='flex flex-1 justify-center items-center mt-5 text-2xl'>
        <SocialLink
          Icon={AiOutlineMail}
          href="mailto:leobelini96@gmail.com?subject=Contato pelo site"
        />
        <SocialLink
          Icon={AiOutlineWhatsApp}
          target="_blank"
          rel="noopener"
          href="https://api.whatsapp.com/send?phone=5514996271006&text=Contato%20pelo%20site"
        />
        <SocialLink
          Icon={AiFillLinkedin}
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
  )
}

interface SocialProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Icon: IconType
}

const SocialLink: React.FC<SocialProps> = ({ Icon, ...props }) => {
  return <a {...props} className='mx-2 cursor-pointer	hover:text-carmine transition duration-700 hover:scale-150'><Icon /></a>
}

export const ProfileDb: IdeDbType = {
  Icon: AiFillHtml5,
  key: `profile`,
  nextKey: `home`,
  name: `Profile.html`,
  Render: Profile,
}