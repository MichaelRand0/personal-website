import GrainBg from "$components/GrainBg"
import dynamic from "next/dynamic"
import Container from "$components/Container"
import VideoBg from "$components/VideoBg"
import { Typewriter } from "react-simple-typewriter"
import useMobile from "$hooks/mobile"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

export default function Home() {
  const { isMobile } = useMobile()
  return (
    <main className="relative h-screen">
      <VideoBg controls={false} src="/videos/glowing.mp4" />
      <GrainBg className="hidden lg:block" />
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
      <Container className="h-screen flex flex-col pb-10 items-center">
        <section className="relative h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-medium text-center">
            Разработка&nbsp;
            <br className="sm:hidden" />
            <span className="text-brand">
              <Typewriter
                cursor
                typeSpeed={50}
                deleteSpeed={50}
                cursorColor="#4bffa5"
                words={[
                  "сайтов",
                  "мобильных приложений",
                  "лэндингов",
                  "SPA-приложений",
                  "на React",
                ]}
                loop
              />
            </span>
          </h1>
          <div className="lg:hidden absolute bottom-5 left-0">
            <p className="text-lg w-fit max-w-xs">
              Привет! Я{" "}
              <span className="text-brand font-bold tracking-wider">
                Степанов Михаил
              </span>
              , разработчик&nbsp; мобильных и веб приложений
            </p>
          </div>
        </section>
        <div className="hidden lg:block">
          <p className="text-xl font-light border-b w-fit">
            Привет! Я{" "}
            <span className="text-brand font-bold tracking-wider">
              Степанов Михаил
            </span>
            , разработчик
          </p>
          <p className="text-xl font-light border-b w-fit">
            мобильных и веб приложений.
          </p>
        </div>
      </Container>
      {/* <Footer>
        <div className="hidden md:block">
          <p className="text-xl font-light border-b w-fit">
            Привет! Я{" "}
            <span className="text-brand font-bold tracking-wider">
              Степанов Михаил
            </span>
            , разработчик
          </p>
          <p className="text-xl font-light border-b w-fit">
            мобильных и веб приложений.
          </p>
        </div>
      </Footer> */}
    </main>
  )
}
