import GrainBg from "$components/GrainBg"
import Header from "$modules/header/Header"
import dynamic from "next/dynamic"
import Container from "$components/Container"
import VideoBg from "$components/VideoBg"
import { Typewriter } from "react-simple-typewriter"
import Telegram from "$icons/Telegram"
import Github from "$icons/Github"
import useMobile from "$hooks/mobile"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

const socials = [
  {
    link: "https://github.com/MichaelRand0",
    Content: <Github width={33} height={33} />,
  },
  {
    link: "https://t.me/MichaelRand",
    Content: <Telegram width={36} height={36} />,
  },
]

export default function Home() {
  const { isMobile } = useMobile()
  return (
    <main className="relative h-screen">
      <VideoBg controls={false} src="/videos/glowing.mp4" />
      <GrainBg />
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
      <Container className="h-screen md:h-[90%]">
        <section className="relative h-full flex flex-col justify-center items-center">
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
          <div className="md:hidden absolute bottom-5 left-0">
            <p className="text-lg w-fit max-w-xs">
              Привет! Я{" "}
              <span className="text-brand font-bold tracking-wider">
                Степанов Михаил
              </span>
              , разработчик&nbsp;
              мобильных и веб приложений
            </p>
          </div>
        </section>
      </Container>
      <footer className="flex justify-between relative py-10 md:py-0 bg-greyStrong md:bg-[transparent]">
        <Container className="w-full">
          <div className="w-full items-center md:items-start flex md:flex-row flex-col justify-between relative">
            <div className="flex">
              <div className="flex flex-col text-[white] text-sm items-center mb-5 md:mb-0 md:items-start md:mr-10 lg:mr-32">
                <a
                  className="hover:text-[white] w-fit mb-2"
                  href="mailto:michaelrand2023@gmail.com"
                >
                  E: michaelrand2023@gmail.com
                </a>
                <a className="hover:text-[white] w-fit" href="tel:89066507516">
                  T: +7 (906) 650 75 16
                </a>
              </div>
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
            </div>
            <div className="md:absolute right-0 bottom-10">
              <div className="flex md:flex-col justify-center items-center">
                {socials.map((social) => {
                  return (
                    <a
                      target="_blank"
                      className="mr-5 last:mr-0 md:mr-0 md:mb-5 last:mb-0"
                      key={social.link}
                      href={social.link}
                    >
                      {social.Content}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
