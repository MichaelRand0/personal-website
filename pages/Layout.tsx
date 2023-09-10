import ButtonBurger from "$components/ButtonBurger"
import Container from "$components/Container"
import LinesBg from "$components/LinesBg"
import LinkAnimated from "$components/LinkAnimated"
import TilesLoader from "$components/TilesLoader"
import Footer from "$components/footer/Footer"
import Navigation from "$components/navigation/Navigation"
import useMobile from "$hooks/mobile"
import { useScroll } from "$hooks/scroll"
import MobileMenu from "$modules/mobileMenu/MobileMenu"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"

interface Props extends React.ComponentProps<"div"> {}

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

const links = [
  {
    text: "Главная",
    href: "/",
  },
  {
    text: "Резюме",
    href: "/resume",
  },
  {
    text: "Портфолио",
    href: "#",
  },
  {
    text: "Блог",
    href: "#",
  },
  {
    text: "Контакты",
    href: "#",
  },
]

const Layout = (props: Props) => {
  const { children } = props
  const { isMobile } = useMobile()
  const [mobileMenu, setMobileMenu] = useState(false)
  const {scrollPosition} = useScroll()
  return (
    <div className="">
      <Container className="absolute left-[50%] right-[50%] -translate-x-[50%] top-0 max-w-5xl w-full h-full mx-auto -z-10">
        <LinesBg className="absolute left-0 top-0 w-full h-full" />
      </Container>
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
      <header
        className={`z-50 flex justify-center w-full flex-col fixed top-0 left-0 bg-transparent transition-all ease-in-out duration-500 ${scrollPosition >= 200 ? 'h-[12vh] bg-bgBlack' : 'h-[18vh]'}`}
      >
        <Container className="flex justify-between">
          <LinkAnimated
            className="z-50"
            href="#"
            From={() => (
              <div>
                Степанов <span className="text-[white]">Михаил</span>
              </div>
            )}
            To={() => (
              <div>
                Скачать <span className="text-[white]">резюме</span>
              </div>
            )}
          />

          <Navigation
            classNames={{
              nav: "hidden lg:flex",
              ul: "items-center flex",
              li: "mr-9 last:mr-0",
            }}
            links={links}
          />

          <ButtonBurger
            className="lg:hidden z-50"
            clickEvent={() => setMobileMenu(!mobileMenu)}
          />
        </Container>
      </header>
      <MobileMenu
        links={links}
        className={`h-full ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } ease-in-out opacity-0 duration-300 transition-all lg:hidden`}
      />
      {children}
      <Footer />
      <TilesLoader />
    </div>
  )
}

export default Layout
