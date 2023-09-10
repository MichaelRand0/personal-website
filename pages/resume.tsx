import Container from "$components/Container"
import InfoCard from "$components/cards/InfoCard"
import ResumeCard from "$components/cards/ResumeCard"
import SectionPreview from "$components/sections/SectionPreview"

const Resume = () => {
  return (
    <main className="h-full">
      <div className="w-full">
        <SectionPreview
          title="Резюме"
          routes={[
            {
              href: "/",
              text: "Главная",
            },
          ]}
          currentRoute="Резюме"
        />
        <section className="pt-20 md:pt-32">
          <Container className="max-w-5xl w-full mx-auto !px-0">
            <InfoCard className="w-full mb-20">
              <ResumeCard
                img="https://cvio-react.netlify.app/images/man_r.jpg"
                text="Привет! Я Степанов Михаил, веб-разработчик. У меня большой опыт разработки сайтов на React, а также опыт создания мобильных приложений. Если вам нужны мои услуги, пишите мне, обо всем договоримся! =)"
                info={[
                  [
                    { name: "Возраст", value: "20" },
                    { name: "Гражданство", value: "РФ" },
                    {
                      name: "Занятость",
                      value: "Полная, частичная, проектная",
                    },
                  ],
                  [
                    { name: "Телефон", value: "+7 906 650 75 16" },
                    { name: "Адрес", value: "РФ, Тверь" },
                    { name: "Email", value: "michaelrand2023@gmail.com" },
                  ],
                ]}
              />
            </InfoCard>
          </Container>
        </section>
      </div>
    </main>
  )
}

export default Resume
