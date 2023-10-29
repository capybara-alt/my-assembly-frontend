"use client"
import * as Progress from "@radix-ui/react-progress"
import { Box } from "@radix-ui/themes"
import { FC } from "react"

const size = 32
const thickness = 3.6
const speed = 1.4

export const Loading: FC = () => {
  const viewBoxDimensions = 44;

  return (
    <Progress.Root
      className="relative overflow-hidden bg-blackA6 rounded-full w-[300px] h-[25px]"
      asChild
      style={{
        animation: `circularRotateKeyframe ${speed}s linear infinite`,
        width: size,
        height: size
      }}
    >
      <Progress.Indicator asChild>
        <svg
          viewBox={`${viewBoxDimensions / 2} ${viewBoxDimensions / 2
            } ${viewBoxDimensions} ${viewBoxDimensions}`}
        >
          <circle
            style={{
              animation: `circularDashKeyframe ${speed}s ease-in-out infinite`
            }}
            cx={viewBoxDimensions}
            cy={viewBoxDimensions}
            r={(viewBoxDimensions - thickness) / 2}
            fill="none"
            stroke="currentColor"
            strokeWidth={thickness}
            strokeDasharray="80px, 200px"
            strokeDashoffset={0}
          />
        </svg>
      </Progress.Indicator>
    </Progress.Root>
  )
}

export default Loading