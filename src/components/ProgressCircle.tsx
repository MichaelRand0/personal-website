import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

interface Props extends React.ComponentProps<"div"> {
  progress?: number
  title?: string
  comments?: string[]
}

const ProgressCircle = (props: Props) => {
  const { progress = 50, title = "", comments, className } = props
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-[140px] h-[140px] flex flex-col items-center mb-5">
        <CircularProgressbar
          text={progress + "%"}
          value={progress}
          styles={{
            root: {},
            path: {
              stroke: `#4bffa5`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#b0b0b0",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "#4bffa5",
              fontSize: "16px",
              fontWeight: "medium",
              transform: "translateX(-12px) translateY(4px)",
            },
            background: {
              fill: "#3e98c7",
            },
          }}
        />
        <div className="font-medium text-xl mt-2">{title}</div>
      </div>
      <ul className="text-start list-disc text-brand text-xl">
        {comments?.map((comment) => {
          return (
            <li className="mb-2 last:mb-0" key={comment}>
              <span className="text-[white] text-base">{comment}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProgressCircle
