import Container from "$components/Container"
import JobCard from "$components/cards/JobCard"
import ResumeCard from "$components/cards/ResumeCard"
import SectionInfo from "$components/sections/SectionInfo"
import SectionPreview from "$components/sections/SectionPreview"
import { useModal } from "$hooks/modal"
import experience from "../src/data/experience"

const Resume = () => {
  const { setCurrentModal } = useModal()
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
        <section className="pt-20 md:pt-32 mb-28">
          <Container className="max-w-5xl w-full mx-auto !px-0">
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
          </Container>
        </section>
        <SectionInfo title="Опыт работы">
          {experience.map((exp) => {
            return (
              <JobCard
                onClick={() =>
                  setCurrentModal({
                    name: "Job",
                    payload: exp,
                  })
                }
                key={exp.company + exp.date}
                data={exp}
              />
            )
          })}
        </SectionInfo>
      </div>
    </main>
  )
}

export default Resume
