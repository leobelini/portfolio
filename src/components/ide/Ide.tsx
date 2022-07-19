import { Code } from "./Code"
import { FileBar } from "./FileBar"
import { FileNavigator } from "./FileNavigator"
import { IdeProvider } from "./IdeContext"
import { TopBar } from "./TopBar"

export const Ide: React.FC = () => {
  return (
    <IdeProvider>
      <div className='w-full h-full drop-shadow-lg'>
        <TopBar />
        <div className='flex h-full max-h-full'>
          <FileNavigator />
          <div className='w-full min-h-full max-h-full bg-chinese-black-3 flex flex-col'>
            <FileBar />
            <div className="relative w-full h-full">
              <div className='w-full h-full overflow-auto scroll-smooth absolute'>
                <Code />
              </div>
            </div>
          </div>
        </div>
      </div>
    </IdeProvider>
  )
}