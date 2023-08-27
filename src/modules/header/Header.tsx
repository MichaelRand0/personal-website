import Container from "$components/Container"
import LinkAnimated from "$components/LinkAnimated"
import React from "react"

interface Props {}

const Header = (props: Props) => {
  return (
    <header>
      <Container>
        <LinkAnimated
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
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
