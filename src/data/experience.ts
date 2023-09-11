import { Experience } from "$models/Resume"

const experience: Experience[] = [
  {
    date: {
      simpleDate: "2022-2023",
      from: "Май 2022",
      to: "Апрель 2023",
    },
    position: "Фронтенд-разработчик",
    company: "ООО Профискетч",
    description:
      "Разработка личного кабинета для онлайн-редактора BIM чертежей, разработка лэндингов, разработка онлайн-документации.",
    logo: "/img/profi.png",
    team: "2 фронтенд-разработчика, 1 lead фронтенд-разработчик, teamlead, 1 бэкенд-разработчик, тестировщик, дизайнер",
    stack: "React, Next.js, Zustand, Tailwindcss, TypeScript",
    work: {
      img: '/img/profi_work.png',
      link: 'https://profisketch.ru/'
    }
  },
  {
    date: {
      simpleDate: "2022-2022",
      from: "Апрель 2022",
      to: "Май 2022",
    },
    position: "Фронтенд-разработчик",
    company: "ООО АР СОФТ",
    description: "Верстка интерфейсов для desktop приложений.",
    logo: "/img/arsoft.png",
    team: "1 фронтенд-разработчик, команда java-разработчиков, 1 бэкенд-разработчик",
    stack: "Java",
  },
  {
    date: {
      simpleDate: "2021-2022",
      from: "Сентябрь 2021",
      to: "Март 2022",
    },
    position: "React Native разработчик мобильных приложений",
    company: "AppLabus US",
    description:
      "Разработка мобильного игрового приложения для Android и iOS на react native. Управление команды из двух intern-разработчиков.",
    team: "2 intern фронтенд-разработчика, 1 lead фронтенд-разработчик, 1 бэкенд-разработчик, 1 senior фронтенд-разработчик, teamlead, дизайнер",
    stack: "React Native, Expo, TypeScript, Urql, SCSS",
  },
]

export default experience
