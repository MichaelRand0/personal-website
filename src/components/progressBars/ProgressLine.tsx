interface Props extends React.ComponentProps<"div"> {
  progress: number
  title?: string
  comment?: string
}

const ProgressLine = (props: Props) => {
  const { progress = 50, title = "", comment = "", className } = props
  return (
    <div className={`w-full ${className}`}>
      <div className="text-lg flex-col md:flex-row text-[white] flex md:items-center mb-2 pl-2">
        <span>{title}</span>
        <div className="hidden md:block w-[20px] h-[2px] bg-[white] mx-2"></div>
        <span className="text-base text-grey">{comment}</span>
      </div>
      <div className="w-full h-1 bg-greyLight relative">
        <div
          style={{width: progress + '%'}}
          className={`absolute left-0 top-0 h-full bg-brand`}
        >
          <span className="absolute right-2 top-3 text-base text-grey">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressLine
