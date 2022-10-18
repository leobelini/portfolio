import { FileBar } from './FileBar'
import { FileNavigator } from './FileNavigator'
import { IdeProvider } from './IdeContext'
import { TopBar } from './TopBar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <IdeProvider>
      <div className="flex flex-col h-full">
        <TopBar />
        <div className="flex h-full">
          <FileNavigator />
          <div className="w-full min-h-full max-h-full bg-chinese-black-3 flex flex-col">
            <FileBar />
            <div className="relative w-full h-full">
              <div className="w-full h-full overflow-auto scroll-smooth absolute">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </IdeProvider>
  )
}
