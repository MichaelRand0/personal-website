import Navigation from "$components/navigation/Navigation"
import { Link } from "../../models/Link"

interface Props extends React.ComponentProps<'div'> {
  links: Link[]
}

const MobileMenu = (props: Props) => {
  const {className, links} = props
  return (
    <div className={`fixed w-screen h-full flex flex-col items-center justify-center left-0 top-0 bg-bgBlack z-10 ${className}`}>
      <Navigation isAnimated={false} classNames={{nav: 'h-full flex items-center', li: 'mb-6 last:mb-0', link: ''}} links={links} />
    </div>
  )
}

export default MobileMenu