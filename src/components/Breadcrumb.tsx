import { Link } from "$models/Link"

interface Props extends React.ComponentProps<"div"> {
  routes: Link[]
  currentRoute: string
}

const Breadcrumb = (props: Props) => {
  const { routes, currentRoute } = props
  return (
    <div className="z-40">
      {routes.map((route) => {
        return (
          <div key={route.href} className="flex items-center text-grey">
            <a className="text-[white] hover:text-brand transition" href={route.href}>{route.text}</a>&nbsp;/&nbsp;
            <span>{currentRoute}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumb
