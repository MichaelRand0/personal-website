import Container from "$components/Container"
import ProgressCircle from "$components/progressBars/ProgressCircle"
import JobCard from "$components/cards/JobCard"
import ResumeCard from "$components/cards/ResumeCard"
import SectionInfo from "$components/sections/SectionInfo"
import SectionPreview from "$components/sections/SectionPreview"
import { useModal } from "$hooks/modal"
import experience from "../src/data/experience"
import ProgressLine from "$components/progressBars/ProgressLine"
import HobbyCard from "$components/cards/HobbyCard"
import Chess from "$icons/Chess"
import Cinema from "$icons/Cinema"
import Math from "$icons/Math"
import Sport from "$icons/Sport"

const skills = [
  {
    title: "JS/TS",
    progress: 80,
    comments: [
      "ES6-ES8, ООП, замыкания, рекурсия, методы массивов и объектов, Ajax...",
      "TypeScript: типы данных, type и interface, generics, декораторы",
      "JQuery",
      "Инструменты сборки: Webpack, Gulp",
    ],
  },
  {
    title: "React",
    progress: 75,
    comments: [
      "Хуки, VDOM, JSX, ф-ные и классовые компоненты, мемоизация...",
      "Redux, Redux Toolkit, RTKQuery",
      "React Native, Expo и Native CLI",
      "Next.js, SSR, SSG",
      "Tailwindcss, Tailwind material UI",
    ],
  },
  {
    title: "HTML/CSS",
    progress: 95,
    comments: [
      "Адаптивная и семантическая верстка",
      "БЭМ",
      "Flex, Grid",
      "Препроцессоры SASS, LESS",
    ],
  },
  {
    title: "Web",
    progress: 60,
    comments: [
      "SEO оптимизация",
      "Работа с хостингом",
      "Создание виджетов для CRM-систем",
      "Wordpress",
    ],
  },
  {
    title: "Angular",
    progress: 45,
    comments: [
      "Роутинг, директивы, пайпы",
      "RxJS",
      "HttpClientModule, FormsModule и ReactiveFormsModule",
    ],
  },
  {
    title: "Vue",
    progress: 35,
    comments: ["Роутинг, работа с формами, директивы", "VueX"],
  },
]

const languages = [
  {
    title: "Русский",
    progress: 100,
    comment: "родной",
  },
  {
    title: "Английский",
    progress: 30,
    comment: "чтение документации и частичное понимание чужой речи",
  },
]

const hobbies = [
  {
    title: "Шахматы",
    icon: <Chess width={40} height={40} fill="#4bffa5" stroke={"#101010"} />,
    text: (
      <div className="flex flex-col justify-between items-center h-full">
        <span className="mb-4">
          Шахматы для меня это не просто игра. Это способ тренировать свое
          мышление, мыслить в разных направлениях. В каком-то смысле, это
          определенный подход к жизни.
        </span>

        <a
          className="text-brand border-b border-brand hover:border-[transparent]"
          target="_blank"
          href="https://lichess.org/@/LunaMoon2022"
        >
          Мой lichess-профиль
        </a>
      </div>
    ),
  },
  {
    title: "Кино",
    icon: <Cinema width={40} height={40} fill="#4bffa5" stroke={"#101010"} />,
    text: (
      <div className="flex flex-col justify-between items-center h-full">
        <span className="mb-4">
          В свободное время я увлекаюсь кинематографом. Не просто смотрю фильмы,
          а изучаю их. Люблю старые американские нуары, интересуюсь творчеством
          Дэвида Линча.
        </span>
        <a
          className="text-brand border-b border-brand hover:border-[transparent]"
          target="_blank"
          href="https://t.me/plenka_kino"
        >
          Веду свой телеграмм-канал
        </a>
      </div>
    ),
  },
  {
    title: "Математика",
    icon: <Math width={40} height={40} fill="#4bffa5" stroke={"#101010"} />,
    text: (
      <span>
        Хорошему программисту важно иметь хорошие аналитические способности и
        держать свой интеллект в постоянной натренированности. Поэтому каждый
        день я отвожу время для изучения математики.
      </span>
    ),
  },
  {
    title: "Спорт",
    icon: <Sport width={40} height={40} fill="#4bffa5" stroke={"#101010"} />,
    text: (
      <span>
        Невозможно постоянно развиваться интеллектуально, если твое тело
        слабеет. Физические нагрузки это то, что держит наш организм в
        стабильности. Поэтому время от времени я отвожу время бегу и легким
        силовым тренировкам.
      </span>
    ),
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
        <SectionInfo className="mb-28" title="Технические умения">
          <Container className="pt-14 bg-bgBlack border border-greyLight">
            <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center">
              {skills.map((skill) => {
                return (
                  <ProgressCircle
                    progress={skill.progress}
                    key={skill.title}
                    className={`sm:w-[45%] sm:mr-10 even:mr-0 mb-12 md:mb-16`}
                    comments={skill.comments}
                    title={skill.title}
                  />
                )
              })}
            </div>
          </Container>
        </SectionInfo>
        <SectionInfo className="mb-28" title="Знание языков">
          <Container className="pt-10 pb-14 bg-bgBlack border border-greyLight">
            {languages.map((lang) => {
              return (
                <ProgressLine
                  className="mb-10 last:mb-0"
                  key={lang.title}
                  progress={lang.progress}
                  title={lang.title}
                  comment={lang.comment}
                />
              )
            })}
          </Container>
        </SectionInfo>
        <SectionInfo className="mb-28" title="Хобби">
          <Container className="pt-10 pb-14 bg-bgBlack border border-greyLight">
            <div className="flex flex-wrap justify-center flex-col md:flex-row">
              {hobbies.map((hobby) => {
                return (
                  <HobbyCard
                    className="w-full md:w-[45%] mb-10 mr-10 even:mr-0"
                    key={hobby.title}
                    title={hobby.title}
                    text={hobby.text}
                    icon={hobby.icon}
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
