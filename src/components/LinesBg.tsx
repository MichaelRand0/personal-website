interface Props extends React.ComponentProps<"div"> {}

const LinesBg = (props: Props) => {
  const {className} = props
  return (
    <div className={`absolute -z-10 left-0 flex justify-between top-0 w-full h-full opacity-20 ${className}`}>
      <div className="w-[0.5px] h-full bg-grey"></div>
      <div className="w-[0.5px] h-full bg-grey"></div>
      <div className="w-[0.5px] h-full bg-grey"></div>
      <div className="w-[0.5px] h-full bg-grey"></div>
    </div>
  )
}

export default LinesBg
