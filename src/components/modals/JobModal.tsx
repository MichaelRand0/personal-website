import { Experience } from "$models/Resume"

interface Props extends React.ComponentProps<'div'> {
  data: Experience
}

const JobModal = (props: Props) => {
  const {data} = props
  return (
    <div>
      <div className="flex mb-8">
        <div className="bg-[white] p-3 w-1/4 object-cover mr-10 flex items-center justify-center rounded">
          <img src={data?.logo} alt='job logo' />
        </div>
        <div>
          <h4 className="text-2xl text-grey mb-2">{data.company}</h4>
          <h3 className="text-xl text-[white] font-medium">{data.position}</h3>
        </div>
      </div>
      <div className="text-lg">
        <span className="text-brand">Время работы:&nbsp;</span>
        <span className="text-[white]">{data.date.simpleDate}</span>
      </div>
    </div>
  )
}

export default JobModal