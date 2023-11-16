import Container from '$components/Container'
import ContactCard from '$components/cards/ContactCard'
import FormBrand from '$components/forms/FormBrand'
import EmailSuccess from '$components/modals/EmailSuccess'
import Modal from '$components/modals/Modal'
import SectionInfo from '$components/sections/SectionInfo'
import SectionPreview from '$components/sections/SectionPreview'
import { useModal } from '$hooks/modal'

const Contact = () => {
  return (
    <main className='h-full'>
      <SectionPreview
        title='Контакты'
        routes={[
          {
            href: '/',
            text: 'Главная',
          },
        ]}
        currentRoute='Контакты'
      />
      <Container>
        <SectionInfo
          className='pt-36 pb-10 flex flex-wrap justify-between flex-col md:flex-wrap items-center md:flex-row'
          title='Связаться со мной'
        >
          <ContactCard
            imgName='phone'
            className='w-full md:w-[48%]'
            text='+7 906 650 75 16'
            title='Телефон'
          />
          <ContactCard
            imgName='email'
            className='w-full md:w-[48%]'
            text='michaelrand2023@gmail.com'
            title='Email'
          />
          <ContactCard
            imgName='address'
            className='w-full md:w-[48%]'
            text='РФ, Тверь'
            title='Адрес'
          />
          <ContactCard
            imgName='person'
            className='w-full md:w-[48%]'
            text='Я открыт к любым предложениям'
            title='Рабочий статус'
          />
        </SectionInfo>
        <SectionInfo className='py-32' title='Форма обратной связи'>
          <FormBrand />
        </SectionInfo>
      </Container>
    </main>
  )
}

export default Contact
