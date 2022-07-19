type TimeLineContainerProps = {
  children: React.ReactNode
}

export const TimeLineContainer: React.FC<TimeLineContainerProps> = ({ children }) => {
  return (
    <ol className="relative border-l border-gray-700">
      {children}
    </ol>
  )
}