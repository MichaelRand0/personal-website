import LinkAnimated from "$components/LinkAnimated"
import { Link } from "../../models/Link"

interface Props extends React.ComponentProps<"div"> {
  links: Link[]
  classNames?: {
    nav?: string
    ul?: string
    link?: string
    li?: string
  }
  isAnimated?: boolean
}

const Navigation = (props: Props) => {
  const { classNames, links, isAnimated = true } = props
  return (
    <nav className={classNames?.nav}>
      <ul className={`${classNames?.ul}`}>
        {links.map((item) => {
          console.log('item, ', item)
          return (
            <li key={item.text} className={classNames?.li}>
              {isAnimated ? (
                <LinkAnimated
                  className={classNames?.link}
                  href={item.href}
                  From={() => <span>{item.text}</span>}
                  To={() => <span className="text-[white]">{item.text}</span>}
                />
              ) : (
                <a className="text-2xl border-b" href={item.href}>
                  {item.text}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
