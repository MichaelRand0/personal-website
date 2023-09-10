import { Experience } from "$models/Resume"

interface Props extends React.ComponentProps<"div"> {
  data: Experience
}

const JobCard = (props: Props) => {
  const { className, data } = props
  return (
    <div className={className}>
      <span className="text-sm text-grey mb-2">{data.date.simpleDate}</span>
      <h3 className="text-lg text-[white] font-medium mb-2">
        {data.position} - {data.company}
      </h3>
      <p className="text-grey text-base max-w-lg">{data.description}</p>
    </div>
  )
}

export default JobCard
