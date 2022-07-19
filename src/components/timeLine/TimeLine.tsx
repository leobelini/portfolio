import { IconType } from "react-icons"

type TimeProps = {
  Icon?: IconType
  title: React.ReactNode
  prev: React.ReactNode
  children: React.ReactNode
}

export const TimeLine: React.FC<TimeProps> = ({ children, Icon, title, prev }) => {
  return (
    <li className="ml-6 mb-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full ring-8  ring-gray-900 bg-red-900">
        {Icon && <Icon className="w-4 h-4 text-gray-100" />}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{title}</h3>
      <span className="block mb-2 text-sm font-normal leading-none text-gray-500">{prev}</span>
      <p className="mb-4 text-base font-normal text-gray-400">{children}</p>
    </li>
  )
}