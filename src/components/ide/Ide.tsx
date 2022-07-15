import { Code } from "./Code"
import { FileBar } from "./FileBar"
import { FileNavigator } from "./FileNavigator"
import { IdeProvider } from "./ideContext"
import { TopBar } from "./TopBar"

export const Ide: React.FC = () => {
  return (
    <IdeProvider>
      <div className='w-full md:w-4/5 lg:w-3/5 h-full'>
        <TopBar />
        <div className='flex flex-1 h-full items-stretch'>
          <FileNavigator />
          <div className='w-full min-h-full max-h-full bg-chinese-black-3'>
            <FileBar />
            <div className='w-full h-full'>
              <Code />
            </div>
          </div>
        </div>
      </div>
    </IdeProvider>
  )
}