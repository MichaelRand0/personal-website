import Container from "$components/Container"
import Github from "$icons/Github"
import Telegram from "$icons/Telegram"

interface Props extends React.ComponentProps<"div"> {}

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

const Footer = (props: Props) => {
  const { children } = props
  return (
    <footer className="lg:fixed bottom-10 left-0 w-full flex justify-between py-10 lg:py-0 bg-greyStrong lg:bg-[transparent]">
      <Container className="w-full">
        <div className="w-full items-center lg:items-start flex lg:flex-row flex-col justify-between relative">
          <div className="flex">
            <div className="flex flex-col text-[white] text-sm items-center mb-5 lg:mb-0 lg:items-start lg:mr-32">
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
            {children}
          </div>
          <div className="lg:absolute right-0 bottom-10">
            <div className="flex lg:flex-col justify-center items-center">
              {socials.map((social) => {
                return (
                  <a
                    target="_blank"
                    className="mr-5 last:mr-0 lg:mr-0 lg:mb-5 last:mb-0"
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
  )
}

export default Footer
