import Breadcrumb from "$components/Breadcrumb"
import Container from "$components/Container"
import GrainBg from "$components/GrainBg"
import LinesBg from "$components/LinesBg"
import Arrow from "$icons/Arrow"
import { Link } from "$models/Link"
import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"

interface Props extends React.ComponentProps<"div"> {
  title: string
  routes: Link[]
  currentRoute: string
}

function SectionPreview(props: Props) {
  const { title, routes, currentRoute } = props
  const [showTitle, setShowTitle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true)
    }, 1400)
  }, [])
  return (
    <section className="relative h-screen pb-10">
      <GrainBg />
      <Container className="flex flex-col w-full justify-between h-full max-w-5xl mx-auto">
        <span></span>
        <h1 className="max-[380px]:text-5xl text-6xl sm:text-8xl lg:text-9xl text-center font-medium">
          {showTitle ? <Typewriter typeSpeed={360} words={[title]} /> : ""}
        </h1>
        <div className="flex items-center justify-between">
          <Breadcrumb routes={routes} currentRoute={currentRoute} />
          <button className="z-40 p-2 animate-jumping">
            <Arrow width={25} height={25} />
          </button>
        </div>
      </Container>
    </section>
  )
}

export default SectionPreview
