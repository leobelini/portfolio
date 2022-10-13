import { useRef } from 'react'
type TooltipProps = {
  tooltipContent: React.ReactNode
  children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltipContent,
}) => {
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const container = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={container}
      onMouseEnter={() => {
        if (!tooltipRef.current || !container.current) return
        const { width: containerWidth } =
          container.current.getBoundingClientRect()
        const { width } = tooltipRef.current.getBoundingClientRect()
        const position = (width / 2 - containerWidth / 2) * -1 + 'px'
        tooltipRef.current.style.left = position
      }}
      className="group relative inline-block"
    >
      {tooltipContent ? (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-gray-500 text-white p-1 rounded absolute bottom-full mt-2 whitespace-nowrap z-10"
        >
          {tooltipContent}
        </span>
      ) : null}
      {children}
    </div>
  )
}
