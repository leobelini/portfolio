import Typewriter from 'typewriter-effect'

import moment from 'moment'
import 'moment/dist/locale/pt-br'

import { Ide } from './components/ide'

moment.locale('pt-BR')

function App() {

  return (
    <>
      <div className='h-screen max-h-screen bg-dark-gunmetal overflow-hidden left-0 right-0 flex flex-1 flex-col'>
        <header className='pb-6 grow-0 basis-auto'>
          <h1 className='font-fira-code text-white text-4xl text-center pt-10 font-medium cursor-default'>
            <span className='underline-anime underline-anime-color'>Leonardo Belini</span>
          </h1>
        </header>

        <div className='grow md:mx-0 h-max basis-auto flex flex-1 justify-center px-4 md:px-10 lg:px-48'>
          <Ide />
        </div>
        <div className='mt-14 mb-10 grow-0 basis-auto font-fira-code text-white text-2xl text-center cursor-default'>
          Soluções em: <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
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
            }}
          />
        </div>
      </div>



      {/* <div className='bg-neutral-200 pt-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='col-span-1 md:col-span-2 order-2 md:order-1'>Sobre</div>
          <div className='col-span-1 order-1 md:order-2 justify-center flex flex-col'>
            <img src={profile} alt="Foto de Leonardo Siervo Belini" className='rounded-full w-48' />
            <div className='w-full mt-10'>
              <div>
                <button><HiOutlineMail /></button>
                <button><FiSmartphone /></button>
                <button><AiFillGithub /></button>
                <button><AiFillLinkedin /></button>
              </div>
              <p className='text-lg antialiased'>
                <b>Nome: </b>Leonardo Siervo Belini
                <br />
                <b>Profissão: </b>Desenvolvedor Full Stack
                <br />
                 <b>E-mail: </b>leobelini96@gmail.com
                <br />
                <b>Telefone: </b>(14) 99627-1006 
              </p>
            </div>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default App
