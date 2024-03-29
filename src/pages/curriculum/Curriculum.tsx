import { FaRegFilePdf } from 'react-icons/fa'

import curriculum from '../../assets/curriculum.pdf'

export const Curriculum = () => {
  return (
    <div className="text-gray-400 text-center px-2 md:px-28 py-10">
      <p className="my-2 font-bold">Se interessou sobre algo?</p>
      <p className="my-2">
        Transfere uma versão resumida das informações para consultar mais tarde:
      </p>
      <div className="pt-8 flex flex-col items-center uppercase">
        <a href={curriculum} target="blank" className="content-center">
          <FaRegFilePdf className="text-6xl text-center mb-4" />
          Baixar
        </a>
      </div>
    </div>
  )
}
