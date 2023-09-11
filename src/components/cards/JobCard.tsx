import { Experience } from "$models/Resume"

interface Props extends React.ComponentProps<"button"> {
  data: Experience
}

const JobCard = (props: Props) => {
  const { className, data, onClick } = props
  return (
    <button
      onClick={onClick}
      disabled={onClick ? false : true}
      className={`w-full py-5 px-4 lg:p-6 border flex items-center bg-bgBlack border-greyLight group relative ${className}`}
    >
      <div className="flex flex-col items-center justify-center text-center w-full">
        <span className="text-sm text-grey mb-2">{data.date.simpleDate}</span>
        <h3 className="text-lg text-[white] font-medium mb-2">
          {data.position} - {data.company}
        </h3>
        <p className="text-grey text-base max-w-lg">{data.description}</p>
      </div>
      {onClick && (
        <div className="absolute w-full h-full flex items-center justify-center left-0 top-0 bg-brand transition opacity-0 group-hover:opacity-90">
          <span className="text-xl text-bgBlack font-bold border-b-2">
            Подробнее
          </span>
        </div>
      )}
    </button>
  )
}

export default JobCard
