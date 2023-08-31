import GrainBg from "$components/GrainBg"
import Header from "$modules/header/Header"
import dynamic from "next/dynamic"
import useMobile from "../src/hooks/mobile"
import Container from "$components/Container"
import VideoBg from "$components/VideoBg"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

export default function Home() {
  const { isMobile } = useMobile()
  return (
    <main className="relative h-screen">
      <VideoBg controls={false} src='/videos/glowing.mp4' />
      <GrainBg />
      <Header />
      {isMobile ? (
        ""
      ) : (
        <AnimatedCursor
          innerSize={26}
          outerSize={26}
          color="75, 255, 165"
          outerAlpha={0.3}
          innerScale={0}
          innerStyle={{
            display: "none",
            backgroundColor: "#4bffa599",
          }}
          outerScale={2}
          showSystemCursor={true}
          trailingSpeed={6}
          clickables={["a", "select", "textarea", "button"]}
        />
      )}
      <Container>
        <section className="relative">

        </section>
      </Container>
    </main>
  )
}
