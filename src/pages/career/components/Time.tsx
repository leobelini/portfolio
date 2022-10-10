import { useMemo } from 'react'
import { IconType } from 'react-icons'
import moment from 'moment'

import { TimeLine } from '../../../components/timeLine'

type TimeProps = {
  Icon?: IconType
  title: string
  tag?: string
  time: {
    start: moment.Moment
    end?: moment.Moment
  }
  children: React.ReactNode
}

export const Time: React.FC<TimeProps> = ({
  children,
  Icon,
  title,
  tag,
  time,
}) => {
  const timeText = useMemo(() => {
    const startTime = time.start
    let endTime = time.end

    const totalDiffMonth = (endTime || moment()).diff(startTime, 'month', false)

    const diffYear = Math.floor(totalDiffMonth / 12)
    const diffMonth = totalDiffMonth - diffYear * 12

    const startText = startTime.format(`MMMM [de] YYYY`)
    const endText = endTime ? endTime.format(`MMMM [de] YYYY`) : `o momento`

    let diffText = diffYear > 0 ? `${diffYear} ano(s)` : ``
    diffText += diffMonth > 0 ? ` ${diffMonth} mes(es)` : ``

    return `${startText} - ${endText} - ${diffText}`
  }, [])

  return (
    <TimeLine
      prev={timeText}
      title={
        <>
          {title}{' '}
          {tag && (
            <sup>
              <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-red-200 text-red-800 ml-3">
                {tag}
              </span>
            </sup>
          )}
        </>
      }
      Icon={Icon}
    >
      {children}
    </TimeLine>
  )
}
