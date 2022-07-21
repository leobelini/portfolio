import { useBoolean } from 'react-hanger'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsEmojiFrown, BsEmojiWink } from 'react-icons/bs'

export const Page404 = () => {
  return (
    <div className="text-gray-500 p-3 text-center">
      <p className="my-3">
        <RenderLine
          text={
            <span className="text-3xl">
              404 <BsEmojiFrown className="inline mx-3" />
            </span>
          }
          prev={<span className="text-3xl"># </span>}
        />
      </p>
      <hr />
      <p className="my-3">
        <RenderLine
          text={
            <span className="text-2xl">
              O arquivo que você está procurando não existe.
            </span>
          }
          prev={<span className="text-2xl">## </span>}
        />
      </p>
      <p className="my-4">
        <RenderLine
          text={
            <span className="text-lg">
              Utilize <AiOutlineArrowLeft className="inline mx-3" /> ou{' '}
              <AiOutlineArrowRight className="inline mx-3" /> disponível na
              barra de navegação para alterar o arquivo visualizado.
            </span>
          }
        />
      </p>
      <p className="my-4">
        <RenderLine
          text={
            <span className="text-lg">
              Selecione um arquivo à esquerda para pré visualiza-lo.
            </span>
          }
        />
      </p>
      <p className="my-12">
        <RenderLine
          text={
            <span className="text-xs">
              Continue procurando, ainda há possibilidade de achar{' '}
              <BsEmojiWink className="inline mx-1" />.
            </span>
          }
        />
      </p>
    </div>
  )
}

type RenderLineProps = {
  text: JSX.Element
  prev?: JSX.Element
  next?: JSX.Element
}

const RenderLine: React.FC<RenderLineProps> = ({ text, next, prev }) => {
  const show = useBoolean(false)
  return (
    <>
      {show.value && prev}
      <span onMouseEnter={show.setTrue} onMouseLeave={show.setFalse}>
        {text}
      </span>
      {show.value && next}
    </>
  )
}
