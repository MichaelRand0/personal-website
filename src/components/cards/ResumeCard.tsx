import ButtonMain from "$components/ButtonMain"
import { ResumeItem } from "$models/Resume"

interface Props extends React.ComponentProps<"div"> {
  img?: string
  text: string
  info: ResumeItem[][]
  classNames?: {
    container?: string
    title?: string
  }
}

const ResumeCard = (props: Props) => {
  const { classNames, img, text, info } = props
  return (
    <div
      className={`py-5 px-4 lg:p-6 border flex items-center bg-bgBlack border-greyLight ${classNames?.container}`}
    >
      <div className={`flex md:flex-row flex-col items-center justify-between`}>
        {img && (
          <div className="max-w-[140px] mb-7 md:mb-0 lg:max-w-[160px] w-full md:mr-3 lg:mr-10">
            <img className="w-full h-full object-cover" src={img} alt="Photo" />
          </div>
        )}
        <div className="flex flex-col items-center justify-center text-center md:text-start md:block">
          <p className={`text-grey mb-5 ${classNames?.title}`}>{text}</p>
          <div className="flex flex-col items-center justify-center md:block">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center text-center md:text-start md:justify-between mb-5">
              {info.map((group) => {
                return (
                  <ul
                    className="mb-1 md:mb-0 last:mb-0"
                    key={"group " + group[0].name}
                  >
                    {group.map((infoItem) => {
                      return (
                        <li className="mb-2 last:mb-0" key={infoItem.name}>
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
            <ButtonMain className="w-full md:w-auto">
              <a href="#">Скачать CV</a>
            </ButtonMain>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
