import Container from "$components/Container"
import GrainBg from "$components/GrainBg"
import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"

interface Props extends React.ComponentProps<'div'> {}

function SectionPreview(props: Props) {
  const [showTitle, setShowTitle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true)
    }, 1400)
  }, [])
  return (
    <section className="h-screen w-full">
      <GrainBg />
      <Container className="flex flex-col max-w-5xl mx-auto justify-center h-full">
        <h1 className="text-8xl text-center">
          {showTitle ? <Typewriter typeSpeed={350} words={['Резюме']}  /> : ''}
        </h1>
        <div className="flex items-center justify-between">

        </div>
      </Container>
    </section>
  )
}

export default SectionPreview