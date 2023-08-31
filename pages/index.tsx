import GrainBg from "$components/GrainBg"
import Header from "$modules/header/Header"
import dynamic from "next/dynamic"
import useMobile from "../src/hooks/mobile"
import Container from "$components/Container"
import VideoBg from "$components/VideoBg"
import { Typewriter } from "react-simple-typewriter"
import Telegram from "$icons/Telegram"
import Github from "$icons/Github"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

const socials = [
  {
    link: "https://t.me/MichaelRand",
    Content: <Telegram width={35} height={35} />,
  },
  {
    link: "https://github.com/MichaelRand0",
    Content: <Github width={33} height={33} />,
  },
]

export default function Home() {
  const { isMobile } = useMobile()
  return (
    <main className="relative pb-[10vh]">
      <VideoBg controls={false} src="/videos/glowing.mp4" />
      <GrainBg />
      <Header className="h-[15vh]" />
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
      <Container className="h-[75vh]">
        <section className="flex flex-col h-full justify-center">
          <h1 className="text-7xl font-medium text-center">
            Разработка&nbsp;
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
        </section>
        <footer className="flex justify-between relative">
          <div className="flex">
            <div className="flex flex-col text-grey text-sm mr-32">
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
            <div>
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
          <div className="flex flex-col items-center justify-center absolute right-0 bottom-10">
            <div className="flex flex-col justify-center items-center">
              {socials.map((social) => {
                return (
                  <a
                    target="_blank"
                    className="mb-5 last:mb-0"
                    key={social.link}
                    href={social.link}
                  >
                    {social.Content}
                  </a>
                )
              })}
            </div>
          </div>
        </footer>
      </Container>
    </main>
  )
}
