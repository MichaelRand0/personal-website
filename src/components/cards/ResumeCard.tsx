import ButtonMain from "$components/ButtonMain"
import { ResumeItem } from "$models/Resume"

interface Props extends React.ComponentProps<"div"> {
  img?: string
  text: string
  info: ResumeItem[][]
}

const ResumeCard = (props: Props) => {
  const { className, img, text, info } = props
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {img && (
        <div className="max-w-[160px] w-full mr-10">
          <img className="w-full h-full object-cover" src={img} alt="Photo" />
        </div>
      )}
      <div>
        <p className="text-grey mb-5">{text}</p>
        <div>
          <div className="flex flex-wrap items-center justify-between mb-5">
            {info.map((group) => {
              return (
                <ul key={"group " + group[0].name}>
                  {group.map((infoItem) => {
                    return (
                      <li className="mb-1 last:mb-0" key={infoItem.name}>
                        <span className="text-brand">
                          {infoItem.name}:&nbsp;
                        </span>
                        <span className="text-grey">{infoItem.value}</span>
                      </li>
                    )
                  })}
                </ul>
              )
            })}
          </div>
          <ButtonMain>
            <a href="#">Скачать CV</a>
          </ButtonMain>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
