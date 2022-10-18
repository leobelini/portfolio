import { IconType } from 'react-icons'

type TimeProps = {
  Icon?: IconType
  title: React.ReactNode
  prev: React.ReactNode
  children: React.ReactNode
}

export const TimeLine: React.FC<TimeProps> = ({
  children,
  Icon,
  title,
  prev,
}) => {
  return (
    <li className="ml-6 mb-6">
      <span className="flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full ring-8 ring-gray-900 bg-red-900">
        {Icon && <Icon className="w-6 h-6 text-gray-100" />}
      </span>
      <h3 className="flex items-center ml-3 mb-1 text-lg font-semibold text-white">
        {title}
      </h3>
      <span className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-500">
        {prev}
      </span>
      <p className="mb-4 ml-3 text-base font-normal text-gray-400">
        {children}
      </p>
    </li>
  )
}
