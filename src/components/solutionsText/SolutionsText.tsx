import { useCallback } from 'react'
import Typewriter, { TypewriterClass } from 'typewriter-effect'

export const SolutionsText: React.FC = () => {
  const onInit = useCallback((typewriter: TypewriterClass) => {
    typewriter
      .typeString(` React`)
      .pauseFor(1000 * 3)
      .deleteChars(5)
      .typeString(`Node`)
      .pauseFor(1000 * 3)
      .deleteChars(4)
      .typeString(`C#`)
      .pauseFor(1000 * 3)
      .deleteChars(2)
      .typeString(`MySQL`)
      .pauseFor(1000 * 3)
      .deleteChars(5)
      .typeString(`NoSQL`)
      .pauseFor(1000 * 3)
      .deleteChars(5)
      .typeString(`Aplicações web`)
      .pauseFor(1000 * 3)
      .deleteChars(3)
      .typeString(`desktop`)
      .pauseFor(1000 * 5)
      .deleteAll()
      .start()
  }, [])
  return (
    <div className="mt-14 mb-10 grow-0 basis-auto font-fira-code text-white text-2xl text-center cursor-default">
      Soluções em: <Typewriter options={{ loop: true }} onInit={onInit} />
    </div>
  )
}
