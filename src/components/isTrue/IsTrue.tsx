type IsTrueProps = {
  isTrue: boolean
  children: React.ReactNode
}

export const IsTrue: React.FC<IsTrueProps> = ({ children, isTrue }) => {
  return isTrue ? <>{children}</> : null
}
