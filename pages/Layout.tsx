import ButtonBurger from '$components/ButtonBurger'
import Container from '$components/Container'
import LinesBg from '$components/LinesBg'
import LinkAnimated from '$components/LinkAnimated'
import TilesLoader from '$components/TilesLoader'
import Footer from '$components/footer/Footer'
import EmailSuccess from '$components/modals/EmailSuccess'
import JobModal from '$components/modals/JobModal'
import Modal from '$components/modals/Modal'
import WorkModal from '$components/modals/WorkModal'
import Navigation from '$components/navigation/Navigation'
import useMobile from '$hooks/mobile'
import { useModal } from '$hooks/modal'
import { useScroll } from '$hooks/scroll'
import Github from '$icons/Github'
import Telegram from '$icons/Telegram'
import MobileMenu from '$modules/mobileMenu/MobileMenu'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Props extends React.ComponentProps<'div'> {}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const socials = [
  {
    link: 'https://github.com/MichaelRand0',
    Content: <Github width={33} height={33} />,
  },
  {
    link: 'https://t.me/MichaelRand',
    Content: <Telegram width={36} height={36} />,
  },
]

const links = [
  {
    text: 'Главная',
    href: '/',
  },
  {
    text: 'Резюме',
    href: '/resume',
  },
  {
    text: 'Портфолио',
    href: '/works',
  },
  {
    text: 'Контакты',
    href: '/contact',
  },
]

const Layout = (props: Props) => {
  const { children } = props
  const { isMobile } = useMobile()
  const { currentModal } = useModal()
  const [mobileMenu, setMobileMenu] = useState(false)
  const { scrollPosition } = useScroll()
  const router = useRouter()
  return (
    <div className=''>
      <Container className='absolute left-[50%] right-[50%] -translate-x-[50%] top-0 max-w-5xl w-full h-full mx-auto -z-10'>
        <LinesBg className='absolute left-0 top-0 w-full h-full' />
      </Container>
      {isMobile ? (
        ''
      ) : (
        <AnimatedCursor
          innerSize={26}
          outerSize={26}
          color='75, 255, 165'
          outerAlpha={0.3}
          innerScale={0}
          innerStyle={{
            display: 'none',
            backgroundColor: '#4bffa599',
          }}
          outerScale={2}
          showSystemCursor={true}
          trailingSpeed={6}
          clickables={['a', 'select', 'textarea', 'button']}
        />
      )}
      <header
        className={`z-[100] flex justify-center w-full flex-col fixed top-0 left-0 bg-transparent transition-all ease-in-out duration-500 ${
          scrollPosition >= 200 ? 'h-[12vh] bg-bgBlack' : 'h-[18vh]'
        }`}
      >
        <Container className='flex justify-between relative'>
          <LinkAnimated
            className='z-50'
            href='#'
            From={() => (
              <div>
                Степанов <span className='text-[white]'>Михаил</span>
              </div>
            )}
            To={() => (
              <div>
                Скачать <span className='text-[white]'>резюме</span>
              </div>
            )}
          />

          <Navigation
            classNames={{
              nav: 'hidden lg:flex',
              ul: 'items-center flex',
              li: 'mr-9 last:mr-0',
            }}
            links={links}
          />

          <ButtonBurger
            className='lg:hidden z-50'
            clickEvent={() => setMobileMenu(!mobileMenu)}
          />
        </Container>
      </header>
      <MobileMenu
        links={links}
        className={`h-full ${
          mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        } ease-in-out opacity-0 duration-300 transition-all lg:hidden`}
      />
      {children}
      {/* <Footer /> */}
      <div className='hidden lg:flex mx-auto justify-center lg:justify-start lg:fixed left-10 bottom-10 z-30'>
        <div className='flex flex-col text-[white] text-sm items-center mb-5 lg:mb-0 lg:items-start lg:mr-32'>
          <a
            className='hover:text-brand text-[white] w-fit mb-3'
            href='mailto:michaelrand2023@gmail.com'
          >
            E: michaelrand2023@gmail.com
          </a>
          <a
            className='hover:text-brand text-[white] w-fit'
            href='tel:89066507516'
          >
            T: +7 (906) 650 75 16
          </a>
        </div>
      </div>
      {router.pathname === '/' ? (
        ''
      ) : (
        <div className='flex mx-auto justify-center lg:justify-start lg:fixed left-10 bottom-10 z-30'>
          <div className='flex flex-col text-[white] text-sm items-center mb-5 lg:mb-0 lg:items-start lg:mr-32'>
            <a
              className='hover:text-brand text-[white] w-fit mb-3'
              href='mailto:michaelrand2023@gmail.com'
            >
              E: michaelrand2023@gmail.com
            </a>
            <a
              className='hover:text-brand text-[white] w-fit'
              href='tel:89066507516'
            >
              T: +7 (906) 650 75 16
            </a>
          </div>
        </div>
      )}
      {router.pathname === '/' ? (
        <div className='fixed right-[17px] sm:right-[28px] md:right-[48px] bottom-10 z-30'>
          <div className='flex lg:flex-col justify-center items-center'>
            {socials.map((social) => {
              return (
                <a
                  target='_blank'
                  className='mr-5 last:mr-0 lg:mr-0 lg:mb-5 last:mb-0'
                  key={social.link}
                  href={social.link}
                >
                  {social.Content}
                </a>
              )
            })}
          </div>
        </div>
      ) : (
        <div className='lg:fixed right-10 bottom-10 z-30 lg:pb-0 pb-10'>
          <div className='flex lg:flex-col justify-center items-center'>
            {socials.map((social) => {
              return (
                <a
                  target='_blank'
                  className='mr-5 last:mr-0 lg:mr-0 lg:mb-5 last:mb-0'
                  key={social.link}
                  href={social.link}
                >
                  {social.Content}
                </a>
              )
            })}
          </div>
        </div>
      )}
      <TilesLoader />
      {currentModal ? (
        <Modal>
          {currentModal?.name === 'Job' && (
            <JobModal data={currentModal.payload} />
          )}
          {currentModal?.name === 'Work' && (
            <WorkModal data={currentModal.payload} />
          )}
          {currentModal?.name === 'EmailSuccess' ? <EmailSuccess /> : ''}
        </Modal>
      ) : (
        ''
      )}
    </div>
  )
}

export default Layout
