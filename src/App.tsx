import { Layout } from './components/layout'
import { SolutionsText } from './components/solutionsText'
import { Routes } from './pages/routes'

function App() {
  return (
    <>
      <div className='h-screen max-h-screen bg-dark-gunmetal overflow-hidden left-0 right-0 flex flex-1 flex-col'>
        <header className='pb-6 grow-0'>
          <h1 className='font-fira-code text-white text-4xl text-center pt-10 font-medium cursor-default'>
            <span className='underline-anime underline-anime-color'>Leonardo Belini</span>
          </h1>
        </header>
        <div className='grow md:mx-0 h-max basis-auto flex flex-1 justify-center px-4 md:px-10 lg:px-48'>
          <Layout>
            <Routes />
          </Layout>
        </div>
        <SolutionsText />
      </div>
    </>
  )
}

export default App
