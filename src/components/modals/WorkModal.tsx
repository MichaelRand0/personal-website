import LinkAnimated from "$components/LinkAnimated"
import { WorkItem } from "$models/Work"

interface Props extends React.ComponentProps<"button"> {
  data: WorkItem
}

const WorkModal = (props: Props) => {
  const { data } = props
  return (
    <div>
      <h2 className="text-3xl mb-8">{data.title}</h2>
      <div className="flex min-h-[35vh] mb-5">
        <img
          className="max-w-lg h-full object-cover mb-8 rounded w-full mr-10"
          src={data.img}
          alt={data.title}
        />
        <div className="flex flex-col">
          <div>
            <span className="text-lg text-brand">Технологический стек:</span>
            <ul className="mb-6 grid grid-cols-2 mt-1">
              {data.stack.map((stackItem) => {
                return (
                  <li className="mb-1 last:mb-0" key={stackItem}>
                    {stackItem}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mb-6">
          <LinkAnimated
          className="mb-4"
            href={data.project ?? '#'}
            From={() => <div className="border-b">{data.title}</div>}
            To={() => (
              <div>
                <div className="border-b text-brand border-b-brand">{data.title}</div>
              </div>
            )}
          />
          <LinkAnimated
    
            href={data.git ?? '#'}
            From={() => <div className="border-b">Github</div>}
            To={() => (
              <div>
                <div className="border-b text-brand border-b-brand">Github</div>
              </div>
            )}
          />
          </div>
          <div className="text-brand">
            Затрачено на разработку:{" "}
            <span className="text-[white]">{data.timeSpent}</span>
          </div>
        </div>
      </div>
      <p className="text-lg max-w-3xl">{data.desc}</p>
    </div>
  )
}

export default WorkModal
