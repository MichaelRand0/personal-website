interface Props extends React.ComponentProps<"button"> {
  icon?: JSX.Element
  title?: string
  text?: JSX.Element
}

const HobbyCard = (props: Props) => {
  const { className, icon, title = "", text = "" } = props
  return (
    <div
      className={`py-5 px-4 flex-col lg:p-6 border flex items-center bg-bgBlack border-greyLight ${className}`}
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="w-9 h-9 object-cover mb-3">{icon}</div>
        <h5 className="text-lg font-medium text-center text-[white]">
          {title}
        </h5>
      </div>
      <div className="text-base text-grey text-center h-full">{text}</div>
    </div>
  )
}

export default HobbyCard
