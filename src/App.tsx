import { Layout } from './components/layout'
import { Routes } from './pages/routes'

function App() {
  return (
    <>
      <div className="h-screen max-h-screen bg-dark-gunmetal flex flex-col overflow-hidden">
        <h1 className="font-fira-code text-white text-4xl text-center pt-10 font-medium cursor-default">
          <span className="underline-anime underline-anime-color">
            Leonardo Belini
          </span>
        </h1>
        <div className="h-full mx-7 my-5 flex flex-col overflow-hidden">
          <Layout>
            <Routes />
          </Layout>
        </div>
      </div>
    </>
  )
}

export default App
