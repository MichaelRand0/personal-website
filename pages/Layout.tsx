import ButtonBurger from "$components/ButtonBurger"
import Container from "$components/Container"
import LinkAnimated from "$components/LinkAnimated"
import Navigation from "$components/navigation/Navigation"
import Header from "$modules/header/Header"
import MobileMenu from "$modules/mobileMenu/MobileMenu"
import React, { useState } from "react"

interface Props extends React.ComponentProps<"div"> {}

const links = [
  {
    text: "Главная",
    href: "#",
  },
  {
    text: "Обо мне",
    href: "#",
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
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className="relative h-full">
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
    </div>
  )
}

export default Layout
