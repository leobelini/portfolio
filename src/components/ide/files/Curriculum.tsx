import { IconType } from 'react-icons'
import { AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiOutlineFilePdf } from 'react-icons/ai'
import { VscFilePdf } from 'react-icons/vsc'
import { FaRegFilePdf } from 'react-icons/fa'

import curriculum from '../../../assets/curriculum.pdf'

import { IdeDbType } from "../IdeDb"

const Curriculum = () => {

  return (
    <div className='px-10 py-6 text-gray-400 text-center'>
      <p className='my-2 font-bold'>
        Se interessou sobre algo?
      </p>
      <p className='my-2'>
        Transfere uma versão resumida das informações para consultar mais tarde:
      </p>
      <div className='pt-8 flex flex-col items-center uppercase'>
        <a href={curriculum} target="blank" className='content-center'>
          <FaRegFilePdf className='text-6xl text-center mb-4' />
          Baixar
        </a>
      </div>
    </div>
  )
}

export const CurriculumDb: IdeDbType = {
  Icon: VscFilePdf,
  key: `curriculum`,
  prevKey: `academy`,
  name: `CurriculumVitae.pdf`,
  Render: Curriculum,
}