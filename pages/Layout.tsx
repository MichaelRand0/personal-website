import ButtonBurger from "$components/ButtonBurger"
import Container from "$components/Container"
import LinkAnimated from "$components/LinkAnimated"
import TilesLoader from "$components/TilesLoader"
import Footer from "$components/footer/Footer"
import Navigation from "$components/navigation/Navigation"
import useMobile from "$hooks/mobile"
import MobileMenu from "$modules/mobileMenu/MobileMenu"
import dynamic from "next/dynamic"
import React, { useState } from "react"

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
  return (
    <div className="relative h-full">
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
      <TilesLoader />
      <header
        className={`z-50 flex justify-center w-full flex-col h-[15vh] absolute top-0 left-0`}
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
    </div>
  )
}

export default Layout
