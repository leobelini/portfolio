import Typewriter from 'typewriter-effect'

import videoCode from './assets/code.mp4'

import { Ide } from './components/ide'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <video
          muted
          loop
          autoPlay
          onPlay={e => e.currentTarget.playbackRate = .5}
          className="absolute top-0 left-0 object-cover w-full h-full"
        >
          <source src={videoCode} type="video/mp4" />
        </video>

        <div className='h-full z-10 absolute bg-gray-900 bg-opacity-90 overflow-hidden left-0 right-0 flex flex-1 flex-col'>

          <header className='pb-10 grow-0 basis-auto'>
            <h1 className='font-fira-code text-slate-50 text-5xl text-center pt-10 font-medium cursor-default'>
              <span className='underline-anime underline-anime-color'>Leonardo Belini</span>
            </h1>
          </header>

          {/* CONTAINER */}
          <div className='grow basis-auto flex flex-1 justify-center'>
            {/* VSCODE */}
            <Ide />
          </div>
          <div className='mt-20 mb-10 grow-0 basis-auto font-fira-code text-slate-50 text-3xl text-center cursor-default'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Soluções em:')
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
