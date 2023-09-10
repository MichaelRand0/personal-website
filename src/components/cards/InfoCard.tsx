
interface Props extends React.ComponentProps<"div"> {}

const InfoCard = (props: Props) => {
  const { className, children } = props
  return (
    <div
      className={`py-5 px-4 lg:p-6 border flex items-center bg-bgBlack border-greyLight ${className}`}
    >
      {children}
    </div>
  )
}

export default InfoCard
