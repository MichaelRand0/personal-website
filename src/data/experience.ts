import { Experience } from "$models/Resume"

const experience: Experience[] = [
  {
    date: {
      simpleDate: '2022-2023',
      from: 'Май 2022',
      to: 'Апрель 2023'
    },
    position: "Фронтенд-разработчик",
    company: "ООО Профискетч",
    description:
      "Разработка личного кабинета для онлайн-редактора BIM чертежей, разработка лэндингов, разработка онлайн-документации.",
    logo: "/img/profi.png",
  },
  {
    date: {
      simpleDate: '2022-2022',
      from: 'Апрель 2022',
      to: 'Май 2022'
    },
    position: "Фронтенд-разработчик",
    company: "ООО АР СОФТ",
    description: "Верстка интерфейсов для desktop приложений.",
    logo: "/img/arsoft.png",
  },
  {
    date: {
      simpleDate: '2021-2022',
      from: 'Сентябрь 2021',
      to: 'Март 2022'
    },
    position: "React Native разработчик мобильных приложений",
    company: "AppLabus US",
    description:
      "Разработка мобильного игрового приложения для Android и iOS на react native. Управление команды из двух intern-разработчиков.",
  },
]

export default experience
