import { Experience } from "$models/Resume"

interface Props extends React.ComponentProps<"div"> {
  data: Experience
}

const JobModal = (props: Props) => {
  const { data } = props
  const fields = [
    {
      name: "Чем занимался:",
      value: data.description,
    },
    {
      name: "Время работы:",
      value: data.date.from + " - " + data.date.to,
    },
    {
      name: "Команда:",
      value: data.team,
    },
    {
      name: "Стек:",
      value: data.stack,
    },
  ]
  return (
    <div>
      <div className="flex mb-8 w-full sm:flex-row flex-col">
        {data?.logo && 
        <div className="bg-[white] p-3 sm:mb-0 mb-5 w-[200px] h-[70px] sm:w-[300px] sm:h-[100px] mr-10 flex items-center justify-center rounded">
          <img className="w-full h-full" src={data?.logo} alt="job logo" />
        </div>}
        <div>
          <h4 className="text-2xl text-grey mb-2">{data.company}</h4>
          <h3 className="text-xl text-[white] font-medium">{data.position}</h3>
        </div>
      </div>
      <div className="flex items-center xl:flex-row flex-col">
        <div className="w-full xl:w-[50%] mb-8 xl:mb-0 xl:mr-3">
          <div className="text-base sm:text-lg flex flex-col w-full">
            {fields.map((field) => {
              return (
                <div className="mb-2 last:mb-0" key={field.name}>
                  <span className="text-brand">{field.name}&nbsp;</span>
                  <span className="text-[white]">{field.value}</span>
                </div>
              )
            })}
          </div>
        </div>
        {data.work && (
          <a target="_blank" href={data.work.link} className="block w-full xl:w-[50%]">
            <img
              src={data.work.img}
              className="w-full object-cover"
              alt="Work preview img"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default JobModal
