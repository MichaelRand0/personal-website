import Container from "$components/Container"
import ProgressCircle from "$components/ProgressCircle"
import JobCard from "$components/cards/JobCard"
import ResumeCard from "$components/cards/ResumeCard"
import SectionInfo from "$components/sections/SectionInfo"
import SectionPreview from "$components/sections/SectionPreview"
import { useModal } from "$hooks/modal"
import experience from "../src/data/experience"

const skills = [
  {
    title: "React",
    progress: 85,
    comments: [
      "Хуки useState, useEffect, useMemo...",
      "Redux, Redux Toolkit, RTKQuery",
      "React Native, Expo и Native CLI",
      "Next.js, SSR, SSG",
      "Tailwindcss, Tailwind material UI",
    ],
  },
  {
    title: "React",
    progress: 85,
    comments: [
      "Хуки useState, useEffect, useMemo...",
      "Redux, Redux Toolkit, RTKQuery",
      "React Native, Expo и Native CLI",
      "Next.js, SSR, SSG",
      "Tailwindcss, Tailwind material UI",
    ],
  },
]

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
        <SectionInfo className="mb-28" title="Опыт работы">
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
        <SectionInfo title="Технические умения">
          <Container className="pt-14 bg-bgBlack border border-greyLight">
            <div className="w-full flex items-center justify-center">
            {skills.map((skill) => {
              return (
                <ProgressCircle
                  progress={skill.progress}
                  key={skill.title}
                  className={`w-[${100 / skills.length}%] mr-20`}
                  comments={skill.comments}
                  title={skill.title}
                />
              )
            })}
            </div>
          </Container>
        </SectionInfo>
      </div>
    </main>
  )
}

export default Resume
