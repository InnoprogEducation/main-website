import { useEffect, useRef, useState, type PointerEvent } from "react";

const achievements = [
  {
    icon: "study",
    title: "Индивидуальные занятия",
    text: "с преподавателями каждую неделю",
  },
  {
    icon: "briefcase",
    title: "Стажировка в IT-компании",
    text: "с последующим трудоустройством по окончании курса",
  },
  {
    icon: "help",
    title: "Поддержка 24/7",
    text: "преподавателей, отвечаем в течение 1 часа",
  },
  {
    icon: "code",
    title: "Наши преподаватели",
    text: "это опытные программисты из IT-компаний",
  },
  {
    icon: "award",
    title: "После обучения получите",
    text: "диплом о профессиональной переподготовке",
  },
  {
    icon: "terminal",
    title: "Создадите 18 проектов",
    text: "для портфолио: сайты, приложения, боты",
  },
];

function AchievementIcon({ kind }: { kind: string }) {
  if (kind === "study") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5h16v11H4z" />
        <path d="M7.5 4h9" />
        <path d="M8 11h8" />
        <path d="M8 14h5" />
      </svg>
    );
  }

  if (kind === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="7" width="17" height="11.5" rx="2.5" />
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
        <path d="M3.5 12h17" />
        <path d="M10.8 10.8h2.4v2.4h-2.4z" />
      </svg>
    );
  }

  if (kind === "help") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a8 8 0 1 1-4.2 14.8L5.2 20l.4-3a8 8 0 0 1 6.4-13.5z" />
        <path d="M10 9a2.4 2.4 0 1 1 3.8 1.9c-.6.4-1.3.9-1.3 1.8" />
        <path d="M12 16.1h.01" />
      </svg>
    );
  }

  if (kind === "code") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8.5 7.5-4.5 4.5 4.5 4.5" />
        <path d="m15.5 7.5 4.5 4.5-4.5 4.5" />
        <path d="M12 5.5 10 18.5" />
      </svg>
    );
  }

  if (kind === "award") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8.8" r="4.6" />
        <path d="m12 6.7.8 1.6h1.8l-1.4 1.1.5 1.8-1.7-1-1.7 1 .5-1.8-1.4-1.1h1.8z" />
        <path d="M8.8 13.5V20l3.2-1.6L15.2 20v-6.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="M6.5 8.5h11" />
      <path d="m8.5 12.5 2.2 2.2-2.2 2.2" />
      <path d="M13 16.9h4" />
    </svg>
  );
}

function FooterSocialIcon({ kind }: { kind: "phone" | "mail" | "telegram" | "whatsapp" }) {
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
        <path d="M15.2 15.6c-.8.8-1.9 1.7-3.2 1.7-1.5 0-3.5-1.5-5.1-3.1C5.3 12.6 3.8 10.6 3.8 9.1c0-1.3.9-2.4 1.7-3.2l1.5 1.5c.4.4.4 1.1 0 1.5l-.8.8c-.2.2-.3.5-.2.8.3 1 1.2 2.2 2.2 3.2 1 1 2.2 1.9 3.2 2.2.3.1.6 0 .8-.2l.8-.8c.4-.4 1.1-.4 1.5 0z" />
        <path d="M13.5 4.5a6 6 0 0 1 6 6" />
        <path d="M13.5 1.8a8.7 8.7 0 0 1 8.7 8.7" />
      </svg>
    );
  }

  if (kind === "mail") {
    return (
      <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
        <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" />
        <path d="m4.5 8 7.5 5.8L19.5 8" />
      </svg>
    );
  }

  if (kind === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
        <path d="M21 3 3 10l6.5 2.3" />
        <path d="M21 3 14 21l-4.5-7.5" />
        <path d="m9.5 12.3 4.1 3.2" />
        <path d="M21 3 9.5 12.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z" />
      <path d="M9.3 8.4c-.3.8-.2 2 .6 3.4.8 1.3 2 2.5 3.3 3.3 1.4.8 2.6.9 3.4.6.4-.1.9-.7 1-1.1.1-.4.1-.8-.2-.9l-1.4-.6c-.3-.2-.6-.1-.8.1l-.6.8c-.2.2-.5.3-.8.2-.7-.3-1.7-.9-2.4-1.7s-1.4-1.7-1.7-2.4c-.1-.3 0-.6.2-.8l.8-.6c.2-.2.3-.5.1-.8l-.6-1.4c-.1-.3-.5-.3-.9-.2-.4.1-1 .6-1.1 1z" />
    </svg>
  );
}

type Direction = {
  slug: string;
  name: string;
};

type DirectionBenefit = {
  title: string;
  text: string;
  icon: "time" | "diploma" | "internship" | "projects" | "practice" | "installment";
};

const directionBenefits: DirectionBenefit[] = [
  {
    title: "Занятия в удобное время",
    text: "Никаких жёстких дедлайнов. Доступ к курсу — навсегда!",
    icon: "time",
  },
  {
    title: "2 диплома в портфолио",
    text: "Диплом о профпереподготовке и диплом Eduson — резидента «Сколково».",
    icon: "diploma",
  },
  {
    title: "Стажировка",
    text: "Первый опыт работы над реальным проектом в кросс-функциональной команде — уже во время обучения.",
    icon: "internship",
  },
  {
    title: "10 крупных проектов",
    text: "Готовое портфолио и прикладные навыки по окончании курса.",
    icon: "projects",
  },
  {
    title: "70% практики",
    text: "75+ заданий, тренажёры и тесты, интерактивная песочница по Python, чат-боты.",
    icon: "practice",
  },
  {
    title: "Выгодная рассрочка без %",
    text: "Старт сразу, оплата — удобными частями.",
    icon: "installment",
  },
];

const directionSkillsLeft = [
  "Разрабатываю бэкенд-часть программ и веб-приложений на Python",
  "Использую принципы ООП в разработке на Python",
  "Разрабатываю веб-приложения с помощью фреймворков Django и FastAPI",
  "Проектирую базы данных в СУБД PostgreSQL",
  "Разрабатываю API для веб-приложений и подключаю API сторонних сервисов",
  "Работаю по правилам чистого кода: ревью, рефакторинг и оптимизация кода",
];

const directionSkillsRight = [
  "Работаю с системой контроля версий Git и сервисом совместной разработки GitHub",
  "Настраиваю пайплайны для сборки, тестирования и подключения внешней базы данных",
  "Работаю с системой контейнеризации Docker",
  "Провожу Unit-тестирование с помощью PyTest и интеграционное тестирование",
  "Работаю с Linux",
];

const directionTechStack = [
  "Python",
  "PostgreSQL",
  "Git",
  "Django",
  "PyCharm",
  "Linux",
  "Django Rest Framework",
  "API",
  "Rest API",
  "Pytest",
  "Docker",
  "VS Code",
  "FastAPI",
  "GraphQL",
  "WebSocket",
  "SQLAlchemy",
  "JWT",
  "Uvicorn",
];

type DirectionCourseInfo = {
  title: string;
  highlighted: string;
  rest: string;
  description: string;
  image: string;
  imageFirst?: boolean;
};

type DirectionProgramModule = {
  title: string;
  lead: string;
  pointsLeft: string[];
  pointsRight: string[];
};

const directionCourseInfo: DirectionCourseInfo[] = [
  {
    title: "120+",
    highlighted: "120+",
    rest: " заданий в интерактивной песочнице по Python и SQL",
    description:
      "Решайте задачи по Python и SQL прямо на платформе: отработка теории, авто-проверка и мгновенный фидбек без установки дополнительного ПО.",
    image: "/image/course_info/1_course_info.gif",
  },
  {
    title: "170+",
    highlighted: "170+",
    rest: " теоретических видеолекций с примерами",
    description:
      "Изучайте теорию в удобном темпе: видеолекции, конспекты и практические разборы помогут закрепить материал шаг за шагом.",
    image: "/image/course_info/2_course_info..gif",
    imageFirst: true,
  },
  {
    title: "5 и 10",
    highlighted: "5 учебных проектов, 10 проектов",
    rest: " в портфолио",
    description:
      "Во время обучения формируете портфолио Python-разработчика: решаете реальные задачи и собираете проекты для собеседований.",
    image: "/image/course_info/3_course_info.gif",
  },
  {
    title: "Код-ревью",
    highlighted: "Развёрнутой обратной связи и код-ревью",
    rest: " от экспертов по проектам курса",
    description:
      "Получаете подробную обратную связь от экспертов и личного куратора, чтобы быстрее расти в навыках и устранять слабые места в коде.",
    image: "/image/course_info/4_course_info..gif",
    imageFirst: true,
  },
];

const directionProgramModules: DirectionProgramModule[] = [
  {
    title: "Введение в профессию Python-разработчик",
    lead: "Поймёте роль Python-разработчика, структуру профессии и базовый план развития до первого оффера.",
    pointsLeft: [
      "Кто такой Python-разработчик и чем он занимается",
      "Основные направления backend-разработки",
      "Базовые этапы карьерного развития в IT",
    ],
    pointsRight: [
      "Инструменты junior-разработчика",
      "Как составить эффективный roadmap обучения",
      "Какие проекты нужны для портфолио",
    ],
  },
  {
    title: "Основы Python и синтаксис",
    lead: "Освоите переменные, условия, циклы, функции и принципы написания чистого кода на Python.",
    pointsLeft: [
      "Типы данных и операции",
      "Условные конструкции и циклы",
      "Функции, аргументы и возвращаемые значения",
    ],
    pointsRight: [
      "Обработка ошибок и исключения",
      "Работа со строками, списками и словарями",
      "Практика на задачах базового уровня",
    ],
  },
  {
    title: "Алгоритмы и структуры данных",
    lead: "Научитесь мыслить алгоритмами и выбирать оптимальные структуры данных под конкретные задачи.",
    pointsLeft: [
      "Сложность алгоритмов и Big O",
      "Поиск, сортировки и базовые алгоритмы",
      "Стек, очередь, хеш-таблица",
    ],
    pointsRight: [
      "Работа со списками и словарями на практике",
      "Разбор типовых задач с собеседований",
      "Оптимизация решений",
    ],
  },
  {
    title: "ООП и архитектура кода",
    lead: "Разберётесь в объектно-ориентированном подходе и научитесь проектировать расширяемые решения.",
    pointsLeft: [
      "Классы, объекты и методы",
      "Наследование, инкапсуляция, полиморфизм",
      "Композиция и SOLID-принципы",
    ],
    pointsRight: [
      "Организация модулей и пакетов",
      "Паттерны проектирования на базовом уровне",
      "Рефакторинг и читаемость кода",
    ],
  },
  {
    title: "SQL и базы данных PostgreSQL",
    lead: "Научитесь проектировать базы данных и писать запросы для реальных backend-задач.",
    pointsLeft: [
      "DDL и DML-запросы",
      "JOIN, агрегаты, группировки",
      "Нормализация и связи между таблицами",
    ],
    pointsRight: [
      "Индексы и оптимизация запросов",
      "Транзакции и целостность данных",
      "Практика на кейсах с реальной структурой БД",
    ],
  },
  {
    title: "Backend на Django",
    lead: "Соберёте полноценное веб-приложение на Django: от моделей до API и админ-панели.",
    pointsLeft: [
      "MVT-архитектура Django",
      "Модели, миграции и админка",
      "Шаблоны, формы и валидация",
    ],
    pointsRight: [
      "Аутентификация и авторизация",
      "Работа со статикой и медиа",
      "Подготовка проекта к деплою",
    ],
  },
  {
    title: "FastAPI и REST API",
    lead: "Научитесь проектировать быстрые API-сервисы с документацией, валидацией и тестами.",
    pointsLeft: [
      "Маршруты и схемы данных",
      "Pydantic и валидация запросов",
      "CRUD-операции и сервисный слой",
    ],
    pointsRight: [
      "JWT-аутентификация",
      "OpenAPI/Swagger документация",
      "Интеграция с PostgreSQL",
    ],
  },
  {
    title: "Тестирование и качество кода",
    lead: "Освоите подходы к проверке кода и научитесь поддерживать стабильность проекта при изменениях.",
    pointsLeft: [
      "Unit-тестирование на PyTest",
      "Интеграционные тесты",
      "Фикстуры и параметризация",
    ],
    pointsRight: [
      "Линтеры и форматтеры",
      "Code review и контроль качества",
      "Типичные ошибки и как их предотвращать",
    ],
  },
  {
    title: "Docker, Linux и CI/CD",
    lead: "Развернёте проект в контейнерах и настроите автоматическую сборку, проверку и деплой.",
    pointsLeft: [
      "Dockerfile и docker-compose",
      "Контейнеризация backend-сервиса",
      "Работа с Linux-окружением",
    ],
    pointsRight: [
      "GitHub/GitLab CI-пайплайны",
      "Автоматический запуск тестов",
      "Подготовка проекта к продакшену",
    ],
  },
  {
    title: "Карьера и трудоустройство",
    lead: "Соберёте конкурентное резюме, портфолио и отработаете прохождение собеседований на junior-позиции.",
    pointsLeft: [
      "Оформление GitHub и портфолио",
      "Сильное резюме Python-разработчика",
      "Разбор вакансий и отклики",
    ],
    pointsRight: [
      "Технические и HR-интервью",
      "Разбор тестовых заданий",
      "План выхода на первую работу",
    ],
  },
];

const directionGraduateReviews = [
  {
    quote:
      "Курс дал структуру и понятный план развития. Я перестал метаться между разными источниками и начал системно учиться, закрывая пробелы каждую неделю.",
    author: "Вера Ингинен",
    source: "Telegram",
  },
  {
    quote:
      "За несколько месяцев до старта я не понимал, что изучать в первую очередь. После программы собрал портфолио, прошёл серию интервью и получил первый оффер.",
    author: "Данила Гончаров",
    source: "Telegram",
  },
];

type DirectionPlanFeature = {
  text: string;
  enabled: boolean;
  highlight?: boolean;
};

type DirectionPlan = {
  name: string;
  oldPrice: string;
  price: string;
  discount: string;
  meta: string;
  period: string;
  projects: string;
  featured?: boolean;
  features: DirectionPlanFeature[];
};

const directionPlans: DirectionPlan[] = [
  {
    name: "Базовый",
    oldPrice: "8 278 ₽/мес.",
    price: "4 139 ₽/мес.",
    discount: "-50%",
    meta: "В рассрочку на 36 месяцев.",
    period: "8 месяцев",
    projects: "7 проектов",
    features: [
      { text: "10 месяцев обучения", enabled: true },
      { text: "76 практических работ", enabled: true },
      { text: "6 проектов в портфолио", enabled: true },
      { text: "Гарантия трудоустройства или возврат денег", enabled: true },
      { text: "10 индивидуальных онлайн-консультаций", enabled: false },
      { text: "Профессия на выбор в подарок", enabled: false },
      { text: "2 тестовых собеседования", enabled: false },
      { text: "Стажировка у партнёров курса", enabled: false },
    ],
  },
  {
    name: "Индивидуальный",
    oldPrice: "11 403 ₽/мес.",
    price: "5 132 ₽/мес.",
    discount: "-55%",
    meta: "В рассрочку на 36 месяцев.",
    period: "11 месяцев",
    projects: "9 проектов",
    featured: true,
    features: [
      { text: "10 месяцев обучения", enabled: true },
      { text: "76 практических работ", enabled: true },
      { text: "6 проектов в портфолио", enabled: true },
      { text: "Гарантия трудоустройства или возврат денег", enabled: true },
      { text: "10 индивидуальных онлайн-консультаций", enabled: true },
      { text: "Профессия на выбор в подарок", enabled: true },
      { text: "2 тестовых собеседования", enabled: true },
      { text: "Стажировка у партнёров курса", enabled: false },
    ],
  },
  {
    name: "Индивидуальный плюс",
    oldPrice: "14 043 ₽/мес.",
    price: "6 320 ₽/мес.",
    discount: "-55%",
    meta: "В рассрочку на 36 месяцев.",
    period: "14 месяцев",
    projects: "11 проектов",
    features: [
      { text: "10 месяцев обучения в мини-группе", enabled: true },
      { text: "76 практических работ", enabled: true },
      { text: "8 проектов в портфолио", enabled: true },
      { text: "Гарантия трудоустройства или возврат денег", enabled: true },
      { text: "15 индивидуальных онлайн-консультаций", enabled: true },
      { text: "Профессия на выбор в подарок", enabled: true },
      { text: "3 тестовых собеседования", enabled: true },
      { text: "Индивидуальный разбор всех практических работ", enabled: true },
      { text: "Стажировка у партнёров курса", enabled: true, highlight: true },
    ],
  },
];

const directionFaqItems = [
  {
    question: "Слышал, что Python — это про алгоритмы и нейросети. Что я буду учить на курсе?",
    answer:
      "На курсе вы освоите Python для backend-разработки: синтаксис, ООП, SQL, работу с API, Django/FastAPI, тестирование, Docker и подготовку к трудоустройству.",
  },
  {
    question: "Есть ли программы рассрочки, или нужно оплатить курс сразу?",
    answer:
      "Доступна рассрочка без переплаты. Можно выбрать удобный ежемесячный платёж и стартовать без полной оплаты всей суммы сразу.",
  },
  {
    question: "Как будет устроена практика и сколько проектов я сделаю?",
    answer:
      "Практика занимает большую часть обучения: вы решаете задачи, проходите тренажёры и собираете проекты в портфолио, которые можно показывать работодателям.",
  },
  {
    question: "Смогу ли совмещать обучение с работой?",
    answer:
      "Да. Программа рассчитана на гибкий темп: материалы доступны в записи, а занятия и консультации можно подстраивать под ваш график.",
  },
  {
    question: "Помогаете ли вы с резюме и собеседованиями?",
    answer:
      "Да. В карьерном треке вы оформляете резюме и GitHub, проходите мок-интервью и получаете обратную связь по ответам и тестовым заданиям.",
  },
  {
    question: "Что будет после окончания курса?",
    answer:
      "После финального проекта вы получаете документы об обучении, готовое портфолио и персональные рекомендации по выходу на первую позицию.",
  },
];

type DirectionProject = {
  title: string;
  description: string;
  image: string;
};

const directionProjects: DirectionProject[] = [
  {
    title: "Игра «Крестики-нолики»",
    description: "Разработаете программу для игры в крестики-нолики.",
    image: "/image/python_image_course.png",
  },
  {
    title: "Приложение для заметок",
    description: "Разработаете приложение для создания, редактирования и удаления заметок.",
    image: "/image/office_hourse.jpg",
  },
  {
    title: "Телеграм-бот с календарём",
    description: "Создадите бота для ведения календаря с добавлением и редактированием событий.",
    image: "/image/personal_first_block.png",
  },
  {
    title: "Сайт-портфолио",
    description: "Соберёте адаптивный сайт-портфолио и интегрируете форму обратной связи.",
    image: "/image/person_for_skills.jpg",
  },
  {
    title: "API-сервис",
    description: "Реализуете REST API с авторизацией, валидацией и документацией.",
    image: "/image/office_hourse.jpg",
  },
  {
    title: "Сервис аналитики",
    description: "Сделаете сервис обработки данных с визуализацией ключевых метрик.",
    image: "/image/python_image_course.png",
  },
];

function DirectionBenefitIcon({ kind }: { kind: DirectionBenefit["icon"] }) {
  const iconSrcMap: Record<DirectionBenefit["icon"], string> = {
    time: "https://api.iconify.design/tabler:clock.svg?color=%239c78ff",
    diploma: "https://api.iconify.design/tabler:school.svg?color=%239c78ff",
    internship: "https://api.iconify.design/tabler:message-circle.svg?color=%239c78ff",
    projects: "https://api.iconify.design/tabler:chart-histogram.svg?color=%239c78ff",
    practice: "https://api.iconify.design/tabler:device-laptop.svg?color=%239c78ff",
    installment: "https://api.iconify.design/tabler:percentage.svg?color=%239c78ff",
  };

  return <img src={iconSrcMap[kind]} alt="" aria-hidden="true" className="direction-benefit-icon-img" />;
}

const directions: Direction[] = [
  { slug: "python-developer", name: "Python разработчик" },
  { slug: "data-science", name: "Data Science" },
  { slug: "frontend-developer", name: "Фронтенд разработчик" },
  { slug: "cpp-developer", name: "Разработчик С++" },
  { slug: "java-developer", name: "Java разработчик" },
  { slug: "unreal-engine", name: "Unreal Engine" },
  { slug: "ml-engineer", name: "ML-инженер" },
  { slug: "mobile-developer", name: "Мобильный разработчик" },
  { slug: "data-analyst", name: "Data-аналитик" },
];

const teachers = [
  "Алексей Неверов",
  "Роман Булгаков",
  "Сурен Хуршян",
  "Акура Шуту",
];

type ReviewStory = {
  slug: string;
  name: string;
  course: string;
  quote: string;
  path: string;
  image: string;
  title: string;
  lead: string;
  facts: { label: string; value: string }[];
  details: string[];
};

const reviewStories: ReviewStory[] = [
  {
    slug: "nikita",
    name: "Никита",
    course: "Бухгалтер",
    quote:
      "Если встретить правильного преподавателя и пройти по протоптанной дорожке — и работа найдётся, и с отчётами всё сложится.",
    path: "Из маркетплейсов → в бухгалтерию",
    image: "/image/office_hourse.jpg",
    title: "Как Никита перешел из маркетплейсов в бухгалтерию",
    lead: "История о системном обучении, поддержке наставника и быстром карьерном переходе.",
    facts: [
      { label: "Город", value: "Москва" },
      { label: "Формат", value: "Онлайн + разборы 1:1" },
      { label: "Срок", value: "10 месяцев" },
      { label: "Результат", value: "Новая работа по специальности" },
    ],
    details: [
      "Я пришел на курс без технического бэкграунда и сначала было сложно с новой терминологией.",
      "Наставник помог выстроить понятный маршрут: короткие задачи каждую неделю, регулярная проверка и разбор ошибок.",
      "Через несколько месяцев я собрал портфолио и прошел собеседование на новую позицию.",
    ],
  },
  {
    slug: "anastasia",
    name: "Анастасия",
    course: "Бизнес-аналитик",
    quote:
      "Если вы хотите и правда поменять свою жизнь в лучшую сторону, не откладывайте.",
    path: "Из ПВЗ Lamoda → в бизнес-аналитику",
    image: "/image/python_image_course.png",
    title: "Как Анастасия сменила профессию на бизнес-аналитику",
    lead: "Переход из операционной работы в аналитику с фокусом на практику и портфолио.",
    facts: [
      { label: "Город", value: "Санкт-Петербург" },
      { label: "Формат", value: "Онлайн, 2 занятия в неделю" },
      { label: "Срок", value: "10 месяцев" },
      { label: "Результат", value: "Оффер на junior-позицию" },
    ],
    details: [
      "На старте мне не хватало структуры и уверенности, поэтому я постоянно откладывала обучение.",
      "После перехода на понятный план обучения и еженедельные созвоны с куратором прогресс стал стабильным.",
      "Итог — реальные кейсы в портфолио, уверенность в инструментах аналитика и переход в новую профессию.",
    ],
  },
  {
    slug: "sergey",
    name: "Сергей",
    course: "Python-разработчик",
    quote:
      "Самое полезное в обучении — ежедневная практика и быстрые разборы с наставником.",
    path: "Из техподдержки → в разработку",
    image: "/image/python_image_course.png",
    title: "Как Сергей перешел из техподдержки в Python-разработку",
    lead: "Пошаговый рост через практические задания и проверку кода от наставника.",
    facts: [
      { label: "Город", value: "Казань" },
      { label: "Формат", value: "Вечерние занятия" },
      { label: "Срок", value: "10 месяцев" },
      { label: "Результат", value: "Стажировка в продуктовой команде" },
    ],
    details: [
      "Я совмещал обучение с работой, поэтому важно было получать быстрый фидбек, а не ждать неделями.",
      "Удобный график и разборы кода помогли закрыть пробелы по Python и алгоритмам.",
      "После учебного проекта меня пригласили на стажировку, где я продолжил развиваться уже в команде.",
    ],
  },
  {
    slug: "ekaterina",
    name: "Екатерина",
    course: "Data-аналитик",
    quote:
      "Курс дал уверенность и структуру: я быстро собрала портфолио и вышла на собеседования.",
    path: "Из HR → в аналитику данных",
    image: "/image/office_hourse.jpg",
    title: "Как Екатерина перешла из HR в Data-аналитику",
    lead: "История о смене трека, дисциплине и первых собеседованиях в новой роли.",
    facts: [
      { label: "Город", value: "Екатеринбург" },
      { label: "Формат", value: "Онлайн + домашние проекты" },
      { label: "Срок", value: "10 месяцев" },
      { label: "Результат", value: "Переход в аналитическую команду" },
    ],
    details: [
      "Раньше я работала с людьми, но хотела перейти в data-направление и не понимала, с чего начать.",
      "Программа с практикой на реальных задачах помогла освоить SQL, BI-инструменты и логику метрик.",
      "С готовым портфолио я начала проходить интервью и получила оффер в аналитическую команду.",
    ],
  },
];

const REVIEWS_TRACK_GAP = 18;

function getReviewSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/reviews\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

function getDirectionSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/directions\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

function App() {
  const [audience, setAudience] = useState<"adult" | "kids">("adult");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPerView, setReviewsPerView] = useState(2);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [activeReviewSlug, setActiveReviewSlug] = useState<string | null>(() =>
    getReviewSlugFromPath(window.location.pathname),
  );
  const [activeDirectionSlug, setActiveDirectionSlug] = useState<string | null>(() =>
    getDirectionSlugFromPath(window.location.pathname),
  );
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [openProgramModuleIndex, setOpenProgramModuleIndex] = useState(0);
  const [openDirectionFaqIndexes, setOpenDirectionFaqIndexes] = useState<number[]>([]);
  const [directionCompanyPay, setDirectionCompanyPay] = useState(false);
  const [directionConsent, setDirectionConsent] = useState(false);
  const suppressReviewClickRef = useRef(false);
  const shouldScrollToReviewsRef = useRef(false);
  const directionProjectsTrackRef = useRef<HTMLDivElement | null>(null);
  const directionProjectPointerIdRef = useRef<number | null>(null);
  const directionProjectStartXRef = useRef(0);
  const directionProjectStartScrollRef = useRef(0);
  const directionProjectDraggingRef = useRef(false);
  const isAdult = audience === "adult";
  const maxReviewIndex = Math.max(reviewStories.length - reviewsPerView, 0);
  const reviewSlideWidth = `calc((100% - ${(reviewsPerView - 1) * REVIEWS_TRACK_GAP}px) / ${reviewsPerView})`;
  const reviewShiftPercent = (100 / reviewsPerView) * reviewIndex;
  const reviewShiftGap = (REVIEWS_TRACK_GAP / reviewsPerView) * reviewIndex;
  const activeReview = activeReviewSlug
    ? reviewStories.find((story) => story.slug === activeReviewSlug)
    : null;
  const activeDirection = activeDirectionSlug
    ? directions.find((direction) => direction.slug === activeDirectionSlug)
    : null;
  const siteFooter = (
    <footer className="footer section">
      <div className="footer-col footer-brand">
        <img className="footer-logo" src="/image/logo_innoprog_white.png" alt="INNOPROG Education" />
        <div className="footer-socials" aria-label="Социальные сети">
          <a href="tel:+79586067980" aria-label="Телефон">
            <FooterSocialIcon kind="phone" />
          </a>
          <a href="mailto:education@innoprog.ru" aria-label="Почта">
            <FooterSocialIcon kind="mail" />
          </a>
          <a href="https://t.me/innoprog_admin" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FooterSocialIcon kind="telegram" />
          </a>
          <a href="https://wa.me/79586067980" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FooterSocialIcon kind="whatsapp" />
          </a>
        </div>
        <p>
          Общество с ограниченной ответственностью "ИННОПРОГ"
          <br />
          ИНН 1683011286 ОГРН 1221600105440
        </p>
      </div>

      <div className="footer-col">
        <h4>Контакты</h4>
        <p>Тел: +7 (958) 606-79-80</p>
        <p>Email: education@innoprog.ru</p>
        <p>Telegram: @innoprog_admin</p>
      </div>

      <div className="footer-col">
        <h4>Адрес</h4>
        <p>420500 Республика Татарстан, Верхнеуслонский р-он,</p>
        <p>г. Иннополис, ул. Университетская, д.5, пом.115, м.15/2</p>
      </div>

      <div className="footer-col">
        <h4>Правовая информация</h4>
        <a
          href="https://api.innoprog.ru/files/documents/contract_offer.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Договор оферты
        </a>
        <a
          href="https://api.innoprog.ru/files/documents/privacy_policy.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Политика конфиденциальности
        </a>
        <a
          href="https://api.innoprog.ru/files/documents/license.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Выписка из реестра лицензий на образовательную деятельность
        </a>
      </div>
    </footer>
  );

  useEffect(() => {
    const updatePerView = () => {
      setReviewsPerView(window.innerWidth < 980 ? 1 : 2);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  useEffect(() => {
    setReviewIndex((prev) => Math.min(prev, maxReviewIndex));
  }, [maxReviewIndex]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveReviewSlug(getReviewSlugFromPath(window.location.pathname));
      setActiveDirectionSlug(getDirectionSlugFromPath(window.location.pathname));
      setIsResumeModalOpen(false);
      setOpenProgramModuleIndex(0);
      setOpenDirectionFaqIndexes([]);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (activeReviewSlug === null && shouldScrollToReviewsRef.current) {
      shouldScrollToReviewsRef.current = false;
      requestAnimationFrame(() => {
        document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [activeReviewSlug]);

  useEffect(() => {
    if (!isResumeModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isResumeModalOpen]);

  const goPrevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? maxReviewIndex : prev - 1));
  };

  const goNextReview = () => {
    setReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
  };

  const handleReviewsPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragStartX(event.clientX);
    suppressReviewClickRef.current = false;
  };

  const handleReviewsPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) {
      return;
    }

    const deltaX = event.clientX - dragStartX;
    if (deltaX > 50) {
      goPrevReview();
      suppressReviewClickRef.current = true;
    } else if (deltaX < -50) {
      goNextReview();
      suppressReviewClickRef.current = true;
    }

    setDragStartX(null);
  };

  const openReviewDetails = (slug: string) => {
    if (suppressReviewClickRef.current) {
      suppressReviewClickRef.current = false;
      return;
    }

    window.history.pushState({}, "", `/reviews/${slug}`);
    setActiveReviewSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDirectionProjects = (direction: 1 | -1) => {
    const track = directionProjectsTrackRef.current;
    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(".direction-project-card");
    const step = firstCard ? firstCard.offsetWidth + 18 : Math.max(280, track.clientWidth * 0.86);
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const handleDirectionProjectsPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = directionProjectsTrackRef.current;
    if (!track) {
      return;
    }

    directionProjectPointerIdRef.current = event.pointerId;
    directionProjectStartXRef.current = event.clientX;
    directionProjectStartScrollRef.current = track.scrollLeft;
    directionProjectDraggingRef.current = true;
    track.classList.add("is-dragging");
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDirectionProjectsPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = directionProjectsTrackRef.current;
    if (!track || !directionProjectDraggingRef.current) {
      return;
    }

    if (directionProjectPointerIdRef.current !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - directionProjectStartXRef.current;
    track.scrollLeft = directionProjectStartScrollRef.current - deltaX;
  };

  const stopDirectionProjectsDragging = () => {
    directionProjectDraggingRef.current = false;
    directionProjectPointerIdRef.current = null;
    directionProjectsTrackRef.current?.classList.remove("is-dragging");
  };

  const toggleDirectionFaqItem = (index: number) => {
    setOpenDirectionFaqIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  const closeReviewDetails = () => {
    window.history.pushState({}, "", "/");
    shouldScrollToReviewsRef.current = true;
    setActiveReviewSlug(null);
  };

  const openDirectionDetails = (slug: string) => {
    window.history.pushState({}, "", `/directions/${slug}`);
    setActiveDirectionSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (activeReview) {
    const relatedStories = reviewStories.filter((story) => story.slug !== activeReview.slug).slice(0, 4);

    return (
      <div className="site">
        <main className="section panel review-story-page">
          <div className="review-story-topnav">
            <button type="button" className="review-back-btn" onClick={closeReviewDetails}>
              ← Назад к отзывам
            </button>
            <div className="review-story-breadcrumbs">Главная / Истории / {activeReview.name}</div>
          </div>

          <header className="review-story-hero">
            <div className="review-story-copy">
              <div className="review-label">{activeReview.name}</div>
              <h1>{activeReview.title}</h1>
              <p>{activeReview.lead}</p>
              <div className="review-story-course">Курс: {activeReview.course}</div>
            </div>
            <div
              className="review-story-cover"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06)), url("${activeReview.image}")`,
              }}
            />
          </header>

          <section className="review-story-grid">
            <aside className="review-story-facts">
              <h3>Кратко о результате</h3>
              {activeReview.facts.map((fact) => (
                <div className="review-story-fact" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}

              <div className="review-story-side-cta">
                <h4>Хотите такой же переход в IT?</h4>
                <p>Подберем траекторию обучения и план с наставником под ваш график.</p>
                <button type="button" className="accent-button">
                  Получить консультацию
                </button>
              </div>
            </aside>

            <article className="review-story-article">
              <blockquote>“{activeReview.quote}”</blockquote>

              <section className="story-section">
                <h2>Как начался переход</h2>
                <p>{activeReview.details[0]}</p>
              </section>

              <section className="story-section">
                <h2>Как проходило обучение</h2>
                <p>{activeReview.details[1]}</p>
              </section>

              <section className="story-section">
                <h2>Какой результат получился</h2>
                <p>{activeReview.details[2]}</p>
              </section>

              <section className="review-story-promo">
                <h3>Попробуйте себя в новой профессии бесплатно</h3>
                <p>
                  Получите вводный план по профессии, первый практический кейс и рекомендации по
                  развитию навыков.
                </p>
              </section>

              <div className="review-path">{activeReview.path}</div>
              <button type="button" className="accent-button review-story-cta">
                Хочу такой же результат
              </button>
            </article>
          </section>

          <section className="review-story-more">
            <h2>Другие истории</h2>
            <div className="review-story-more-grid">
              {relatedStories.map((story) => (
                <article
                  key={story.slug}
                  className="review-story-more-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => openReviewDetails(story.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openReviewDetails(story.slug);
                    }
                  }}
                >
                  <div
                    className="review-story-more-cover"
                    style={{ backgroundImage: `url("${story.image}")` }}
                  />
                  <h3>{story.title}</h3>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (activeDirection) {
    return (
      <div className="site">
        <main className="section direction-page">
          <img className="direction-page-logo" src="/image/logo_education.png" alt="INNOPROG Education" />

          <section className="direction-hero-card">
            <div className="direction-hero-left">
              <div className="direction-hero-tags">
                <span>Обучение в гибком формате</span>
                <span>Более 750 000 студентов выбрали Академию Eduson</span>
              </div>

              <div className="direction-hero-caption">Курс</div>
              <h1>{activeDirection.name}</h1>
              <p className="direction-hero-lead">
                За 8 месяцев освоите с нуля backend-разработку на Python и Django.
              </p>

              <ul className="direction-hero-list">
                <li>Будете учиться у экспертов из «Сбера», «Циана», «Литрес», «Рамблера», X5 Retail Group и «Райффайзенбанка».</li>
                <li>Пройдёте стажировку уже во время обучения.</li>
                <li>Получите диплом о профпереподготовке и диплом Академии Eduson.</li>
                <li>На тарифе PRO пройдёте 6 подробных консультаций от эксперта-ментора.</li>
                <li className="direction-hero-list-strong">Найдёте работу, или вернём деньги — это прописано в договоре.</li>
              </ul>

              <div className="direction-hero-actions">
                <button type="button" className="direction-hero-cta-primary">
                  <span>Записаться со скидкой</span>
                  <span className="direction-hero-cta-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
                <button type="button" className="direction-hero-cta-secondary">
                  Получить консультацию
                </button>
              </div>
            </div>

            <div className="direction-hero-right">
              <div className="direction-hero-license">
                <img
                  className="direction-hero-license-logo"
                  src="/image/min_logo.png"
                  alt=""
                  aria-hidden="true"
                />
                <div className="direction-hero-license-copy">
                  <strong>Образовательная лицензия</strong>
                  <span>Министерства науки</span>
                </div>
              </div>
              <div className="direction-hero-sale">
                <strong>-50%</strong>
                <span>до 21 февраля</span>
              </div>
              <div className="direction-hero-seats">Осталось 7 мест</div>
              <div className="direction-hero-rating">★★★★★ 4.8 из 5</div>
            </div>
          </section>

          <section className="direction-benefits-grid">
            {directionBenefits.map((item) => (
              <article className="direction-benefit-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="direction-benefit-icon">
                  <DirectionBenefitIcon kind={item.icon} />
                </div>
              </article>
            ))}
          </section>

          <section className="direction-salary-section">
            <div className="direction-salary-left">
              <h2>
                Python входит в число самых востребованных языков программирования по данным hh.ru
              </h2>
              <p>
                По данным hh.ru, Python активно применяют в разработке сайтов, приложений,
                автоматизации и аналитике. Язык остаётся одним из самых удобных для старта карьеры
                в IT и стабильно востребован в вакансиях.
              </p>
              <p>
                Крупные продуктовые и технологические компании продолжают искать Python-разработчиков
                на уровнях Junior, Middle и Senior.
              </p>
              <a
                className="direction-salary-link"
                href="https://career.hh.ru/profession/50"
                target="_blank"
                rel="noreferrer"
              >
                Данные от hh.ru по профессии Python-разработчик
              </a>
            </div>

            <div className="direction-salary-right">
              <h3>Уровень дохода Python-разработчика по данным hh.ru</h3>
              <div className="direction-salary-chart">
                <article className="direction-salary-col direction-salary-col-1">
                  <div className="direction-salary-value">87 444 ₽</div>
                  <div className="direction-salary-bar">Junior</div>
                </article>
                <article className="direction-salary-col direction-salary-col-2">
                  <div className="direction-salary-value">155 373 ₽</div>
                  <div className="direction-salary-bar">Middle</div>
                </article>
                <article className="direction-salary-col direction-salary-col-3">
                  <div className="direction-salary-value">293 783 ₽</div>
                  <div className="direction-salary-bar">Senior</div>
                </article>
              </div>
            </div>
          </section>

          <section className="direction-mentor-section">
            <div className="direction-mentor-cloud direction-mentor-cloud-left-top">
              Уверенный выход на работу
            </div>
            <div className="direction-mentor-cloud direction-mentor-cloud-right-top">Разбор кейсов</div>
            <div className="direction-mentor-cloud direction-mentor-cloud-left-mid">Сильное резюме</div>
            <div className="direction-mentor-cloud direction-mentor-cloud-right-mid">
              Подготовка к собеседованию
            </div>
            <div className="direction-mentor-cloud direction-mentor-cloud-left-bottom">
              Индивидуальный маршрут
            </div>
            <div className="direction-mentor-cloud direction-mentor-cloud-right-bottom">Поддержка</div>

            <div className="direction-mentor-pro">Тариф PRO</div>

            <h2>Личный ментор на всём пути обучения</h2>
            <p>
              Вас будет сопровождать эксперт из индустрии, который помог многим начинающим
              специалистам.
            </p>

            <h3>Вас ждёт 126 индивидуальных онлайн-встреч:</h3>

            <div className="direction-mentor-cards">
              <article className="direction-mentor-card">
                <img
                  className="direction-mentor-icon-svg"
                  src="https://api.iconify.design/tabler:player-play-filled.svg?color=%239c78ff"
                  alt=""
                  aria-hidden="true"
                />
                <p>2 консультации по ходу обучения</p>
              </article>
              <article className="direction-mentor-card">
                <img
                  className="direction-mentor-icon-svg"
                  src="https://api.iconify.design/tabler:chart-line.svg?color=%239c78ff"
                  alt=""
                  aria-hidden="true"
                />
                <p>Карьерная сессия с разбором резюме</p>
              </article>
              <article className="direction-mentor-card">
                <img
                  className="direction-mentor-icon-svg"
                  src="https://api.iconify.design/tabler:user-square-rounded.svg?color=%239c78ff"
                  alt=""
                  aria-hidden="true"
                />
                <p>Мок-интервью в формате реального собеседования</p>
              </article>
              <article className="direction-mentor-card direction-mentor-card-wide">
                <img
                  className="direction-mentor-icon-svg"
                  src="https://api.iconify.design/tabler:message-chatbot.svg?color=%239c78ff"
                  alt=""
                  aria-hidden="true"
                />
                <p>Обратная связь по тестовому заданию из вакансии</p>
              </article>
              <article className="direction-mentor-card direction-mentor-card-wide">
                <img
                  className="direction-mentor-icon-svg"
                  src="https://api.iconify.design/tabler:briefcase.svg?color=%239c78ff"
                  alt=""
                  aria-hidden="true"
                />
                <p>Консультация после трудоустройства</p>
              </article>
            </div>
          </section>

          <section className="direction-skills-section">
            <h2>Ваши навыки после обучения</h2>

            <div className="direction-skills-card">
              <aside className="direction-skills-role">
                <div className="direction-skills-avatar" aria-hidden="true" />
                <div className="direction-skills-role-label">Должность</div>
                <h3>Python-разработчик</h3>
              </aside>

              <div className="direction-skills-main">
                <div className="direction-skills-head">Навыки</div>
                <div className="direction-skills-divider" />

                <div className="direction-skills-grid">
                  <ul>
                    {directionSkillsLeft.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul>
                    {directionSkillsRight.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="direction-tech-stack">
                {directionTechStack.map((tech) => (
                  <span key={tech} className="direction-tech-chip">
                    <img
                      className="direction-tech-chip-icon"
                      src="/image/icon_skills/python.png"
                      alt=""
                      aria-hidden="true"
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="direction-projects-section">
            <h2>На курсе вы создадите до 10 проектов</h2>

            <div
              className="direction-projects-viewport"
              onPointerDown={handleDirectionProjectsPointerDown}
              onPointerMove={handleDirectionProjectsPointerMove}
              onPointerUp={stopDirectionProjectsDragging}
              onPointerCancel={stopDirectionProjectsDragging}
              onPointerLeave={stopDirectionProjectsDragging}
            >
              <div className="direction-projects-track" ref={directionProjectsTrackRef}>
                {directionProjects.map((project) => (
                  <article className="direction-project-card" key={project.title}>
                    <div
                      className="direction-project-image"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className="direction-project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="direction-projects-controls">
              <button
                type="button"
                className="direction-projects-control"
                aria-label="Предыдущий проект"
                onClick={() => scrollDirectionProjects(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="direction-projects-control"
                aria-label="Следующий проект"
                onClick={() => scrollDirectionProjects(1)}
              >
                ›
              </button>
            </div>
          </section>

          <section className="direction-career-section">
            <div className="direction-career-top">
              <h2>
                Курс помогает уверенно подготовиться к поиску работы в IT
              </h2>
              <p>
                <span>Первое место работы после обучения</span> — важный шаг к стабильной
                карьере, и его лучше проходить с понятной стратегией.
              </p>
            </div>

            <div className="direction-career-bottom">
              <div className="direction-career-stats">
                <article className="direction-career-stat-card">
                  <h3>3 месяца</h3>
                  <p>средний срок трудоустройства при соблюдении карьерного плана и рекомендаций</p>
                </article>
                <article className="direction-career-stat-card">
                  <h3>74% студентов</h3>
                  <p>находят работу благодаря сопровождению карьерного трека и практике интервью</p>
                </article>
              </div>

              <article className="direction-career-resume">
                <h3>Ваше резюме после курса</h3>
                <div className="direction-career-resume-card">
                  <div className="direction-career-avatar" aria-hidden="true" />
                  <div className="direction-career-resume-copy">
                    <h4>Венедиктов Рафаил</h4>
                    <p className="direction-career-role">Junior Python-разработчик</p>
                    <p className="direction-career-salary-label">Желаемая зарплата</p>
                    <p className="direction-career-salary">от 100 000 ₽</p>
                  </div>
                  <a
                    href="#"
                    className="direction-career-link"
                    onClick={(event) => {
                      event.preventDefault();
                      setIsResumeModalOpen(true);
                    }}
                  >
                    Полное резюме →
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="direction-course-info-section">
            <h2>Курс состоит из</h2>
            <div className="direction-course-info-list">
              {directionCourseInfo.map((item) => (
                <article
                  className={`direction-course-info-row ${item.imageFirst ? "image-first" : ""}`}
                  key={item.title}
                >
                  <div className="direction-course-info-text">
                    <h3>
                      <span>{item.highlighted}</span>
                      {item.rest}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="direction-course-info-image-wrap">
                    <img src={item.image} alt={item.title} className="direction-course-info-image" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="direction-program-section">
            <div className="direction-program-top">
              <h2>Программа обучения</h2>
              <button type="button" className="direction-program-pdf-btn">
                Скачать полную версию в PDF
              </button>
            </div>

            <div className="direction-program-metrics">
              <div className="direction-program-metric">
                <img
                  src="https://api.iconify.design/tabler:user-star.svg?color=%23ffffff"
                  alt=""
                  aria-hidden="true"
                />
                <span>Индивидуальные занятия</span>
              </div>
              <div className="direction-program-metric">
                <img
                  src="https://api.iconify.design/tabler:checklist.svg?color=%23ffffff"
                  alt=""
                  aria-hidden="true"
                />
                <span>300 практических работ</span>
              </div>
              <div className="direction-program-metric">
                <img
                  src="https://api.iconify.design/tabler:book-2.svg?color=%23ffffff"
                  alt=""
                  aria-hidden="true"
                />
                <span>38 теоретических материалов</span>
              </div>
            </div>

            <div className="direction-program-accordion">
              {directionProgramModules.map((module, index) => {
                const isOpen = openProgramModuleIndex === index;

                return (
                  <article
                    className={`direction-program-item ${isOpen ? "is-open" : ""}`}
                    key={module.title}
                  >
                    <button
                      type="button"
                      className="direction-program-item-head"
                      onClick={() => setOpenProgramModuleIndex(isOpen ? -1 : index)}
                    >
                      <span>
                        {index + 1}. {module.title}
                      </span>
                      <span className="direction-program-chevron" aria-hidden="true">
                        {isOpen ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="direction-program-item-body">
                        <p>{module.lead}</p>
                        <div className="direction-program-points">
                          <ul>
                            {module.pointsLeft.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          <ul>
                            {module.pointsRight.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="direction-program-tags">
                          <span>Индивидуальные занятия</span>
                          <span>300 практических работ</span>
                          <span>38 теоретических материалов</span>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

          </section>

          <section className="direction-page-teachers mentors">
            <h2>Наши преподаватели</h2>
            <div className="teacher-grid">
              {teachers.map((teacher) => (
                <article className="teacher-card" key={teacher}>
                  <div className="avatar" />
                  <h3>{teacher}</h3>
                  <p>Практикующий специалист</p>
                </article>
              ))}
            </div>
          </section>

          <section className="direction-graduate-reviews">
            <h2>
              Отзывы выпускников <span>//</span>
            </h2>

            <div className="direction-graduate-reviews-grid">
              {directionGraduateReviews.map((review) => (
                <article className="direction-graduate-review-card" key={review.author}>
                  <div className="direction-graduate-review-bubble">
                    <p>{review.quote}</p>
                    <a href="#">Читать полностью →</a>
                  </div>
                  <div className="direction-graduate-review-author">{review.author}</div>
                  <div className="direction-graduate-review-source">{review.source}</div>
                </article>
              ))}
            </div>

            <button type="button" className="direction-graduate-reviews-btn">
              Все отзывы
            </button>
          </section>

          <section className="direction-pricing-section">
            <h2>Выгодные условия оплаты</h2>

            <div className="direction-pricing-offers">
              <article>
                <h3>Рассрочка под 0%</h3>
                <p>Без переплаты и скрытых платежей</p>
                <span>Без первого взноса</span>
              </article>
              <article>
                <h3>Можно вернуть до 13%</h3>
                <p>от цены курса</p>
                <span>Воспользуйтесь налоговым вычетом</span>
              </article>
            </div>

            <div className="direction-pricing-plans">
              {directionPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`direction-pricing-plan ${plan.featured ? "is-featured" : ""}`}
                >
                  <div className="direction-pricing-plan-meta">
                    <span>{plan.period}</span>
                    <span>{plan.projects}</span>
                  </div>

                  <div className="direction-pricing-plan-card">
                    <h3>{plan.name}</h3>
                    <p className="direction-pricing-old">{plan.oldPrice}</p>
                    <div className="direction-pricing-current">
                      <strong>{plan.price}</strong>
                      <span>{plan.discount}</span>
                    </div>
                    <p className="direction-pricing-meta">{plan.meta}</p>

                    <button type="button" className="direction-pricing-cta">
                      Выбрать и записаться
                    </button>

                    <ul>
                      {plan.features.map((feature) => (
                        <li
                          key={feature.text}
                          className={`${feature.enabled ? "is-enabled" : "is-disabled"} ${feature.highlight ? "is-highlight" : ""}`}
                        >
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="direction-socials-section">
            <div className="direction-socials-content">
              <h2>
                Мы есть <span>в соцсетях!</span>
              </h2>
              <p>
                Общение в сообществе профессионалов, поддержка и актуальные новости школы —
                подпишитесь на нас, чтобы ничего не упустить.
              </p>

              <div className="direction-socials-cards">
                <article className="direction-socials-card">
                  <div className="direction-socials-card-head">
                    <div className="direction-socials-logo">INNO</div>
                    <div>
                      <div>В Telegram канале</div>
                      <strong>&gt; 25 тыс. участников</strong>
                    </div>
                  </div>
                  <a
                    className="direction-socials-join"
                    href="https://t.me/innoprog_admin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Присоединиться
                  </a>
                </article>

                <article className="direction-socials-card">
                  <div className="direction-socials-card-head">
                    <div className="direction-socials-logo">INNO</div>
                    <div>
                      <div>В Telegram чате</div>
                      <strong>&gt; 15 тыс. участников</strong>
                    </div>
                  </div>
                  <a
                    className="direction-socials-join"
                    href="https://t.me/innoprog_admin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Присоединиться
                  </a>
                </article>
              </div>
            </div>

            <div className="direction-socials-visual" aria-hidden="true">
              <div className="direction-social-dot dot-1" />
              <div className="direction-social-dot dot-2" />
              <div className="direction-social-dot dot-3" />
              <div className="direction-social-card social-card-1">✉</div>
              <div className="direction-social-card social-card-2">💬</div>
              <div className="direction-social-card social-card-3">📣</div>
              <div className="direction-social-card social-card-4">↗</div>
            </div>
          </section>

          <section className="direction-lead-section">
            <div className="direction-lead-left">
              <h2>Не уверены, что вам это подходит?</h2>
              <p>Оставьте заявку — мы обо всем расскажем подробнее.</p>

              <div className="direction-lead-facts">
                <span>8,5 месяцев обучения</span>
                <span>334 академических часа</span>
                <span>286 интерактивных уроков</span>
                <span>До 10 крупных проектов в портфолио</span>
                <span>196 практических заданий</span>
                <span>70% обучения — практика</span>
              </div>
            </div>

            <form
              className="direction-lead-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label>
                <span>Имя</span>
                <input type="text" placeholder="Ваше имя" />
              </label>

              <label>
                <span>Телефон</span>
                <div className="direction-lead-phone">
                  <span>🇷🇺</span>
                  <input type="tel" placeholder="+7 (000) 000-00-00" />
                </div>
              </label>

              <label>
                <span>Почта</span>
                <input type="email" placeholder="your@email.com" />
              </label>

              <label>
                <span>Ваш вопрос</span>
                <input type="text" placeholder="Напишите ваш вопрос" />
              </label>

              <label className="direction-lead-checkbox">
                <input
                  type="checkbox"
                  checked={directionCompanyPay}
                  onChange={(event) => setDirectionCompanyPay(event.target.checked)}
                />
                <span>Оплатить от компании</span>
              </label>

              <label className="direction-lead-checkbox">
                <input
                  type="checkbox"
                  checked={directionConsent}
                  onChange={(event) => setDirectionConsent(event.target.checked)}
                />
                <span>
                  Я даю согласие на обработку моих персональных данных и информирование в
                  соответствии с публичной офертой.
                </span>
              </label>

              <button type="submit" disabled={!directionConsent}>
                Оставить заявку
              </button>
            </form>
          </section>

          <section className="direction-faq-section">
            <h2>Часто задаваемые вопросы</h2>
            <div className="direction-faq-list">
              {directionFaqItems.map((item, index) => {
                const isOpen = openDirectionFaqIndexes.includes(index);

                return (
                  <article className={`direction-faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                    <button
                      type="button"
                      className="direction-faq-question"
                      onClick={() => toggleDirectionFaqItem(index)}
                    >
                      <span>{item.question}</span>
                      <span className="direction-faq-toggle" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen ? <div className="direction-faq-answer">{item.answer}</div> : null}
                  </article>
                );
              })}
            </div>
          </section>

          {isResumeModalOpen ? (
            <div
              className="resume-modal-overlay"
              onClick={() => setIsResumeModalOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Полное резюме"
            >
              <article
                className="resume-modal"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="resume-modal-close"
                  aria-label="Закрыть"
                  onClick={() => setIsResumeModalOpen(false)}
                >
                  ×
                </button>

                <aside className="resume-modal-profile">
                  <div className="resume-modal-avatar" aria-hidden="true" />
                  <h3>Венедиктов Рафаил</h3>
                  <p className="resume-modal-role">Junior Python-разработчик</p>
                  <p className="resume-modal-salary-label">Желаемая зарплата</p>
                  <p className="resume-modal-salary">от 100 000 ₽</p>
                </aside>

                <section className="resume-modal-skills">
                  <h4>Что я умею:</h4>
                  <ul>
                    <li>Разрабатываю приложения на Python и использую принципы ООП.</li>
                    <li>Пишу SQL-запросы и проектирую структуру базы данных PostgreSQL.</li>
                    <li>Создаю API на Django/FastAPI и подключаю сторонние сервисы.</li>
                    <li>Использую Git и GitHub для совместной разработки и code review.</li>
                    <li>Провожу unit- и интеграционное тестирование на PyTest.</li>
                    <li>Работаю с Docker, Linux и настройкой CI/CD-пайплайнов.</li>
                    <li>Оптимизирую производительность и читаемость кода.</li>
                    <li>Готовлюсь к интервью и умею презентовать проекты из портфолио.</li>
                  </ul>
                </section>
              </article>
            </div>
          ) : null}
        </main>
        {siteFooter}
      </div>
    );
  }

  return (
    <div className={`site ${isAdult ? "audience-adult" : "audience-kids"}`}>
      <header className="topbar section panel">
        <div className="brand">
          <img className="brand-logo" src="/image/logo_education.png" alt="INNOPROG" />
        </div>
        <nav className="menu">
          <button
            type="button"
            className={isAdult ? "menu-toggle-active" : ""}
            aria-pressed={isAdult}
            onClick={() => setAudience("adult")}
          >
            Для взрослых
          </button>
          <button
            type="button"
            className={!isAdult ? "menu-toggle-active" : ""}
            aria-pressed={!isAdult}
            onClick={() => setAudience("kids")}
          >
            Для детей
          </button>
          <a href="#about" className={!isAdult ? "is-disabled-link" : ""}>
            О нас
          </a>
          <a href="#reviews" className={!isAdult ? "is-disabled-link" : ""}>
            Отзывы
          </a>
        </nav>
        <button className="accent-button" type="button">
          Подобрать направление
        </button>
      </header>

      <section className="section panel learning-panel">
        <div className="intro-blocks panel-block">
          <div className="hero" id="about">
            <h1>INNOPROG</h1>
            <p>Обучение программированию с фокусом на практику и результат</p>
          </div>

          <div className="achievements">
            <div className="benefits">
              {achievements.map((benefit) => (
                <article className="achievement-card" key={benefit.title}>
                  <span className="achievement-icon" aria-hidden="true">
                    <AchievementIcon kind={benefit.icon} />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="tabs">
          <button
            className={`tab ${isAdult ? "tab-active" : ""}`}
            type="button"
            onClick={() => setAudience("adult")}
          >
            Для взрослых
          </button>
          <button
            className={`tab ${!isAdult ? "tab-active" : ""}`}
            type="button"
            onClick={() => setAudience("kids")}
          >
            Для детей
          </button>
        </div>

        {isAdult ? (
          <>
            <div className="panel-block">
              <h2>Направления</h2>
              <div className="direction-grid">
                {directions.map((item) => (
                  <article
                    className="direction-card"
                    key={item.slug}
                    role="button"
                    tabIndex={0}
                    onClick={() => openDirectionDetails(item.slug)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openDirectionDetails(item.slug);
                      }
                    }}
                  >
                    <div className="direction-top-badge">⚡ С наставником</div>
                    <div className="direction-content">
                      <h3>{item.name}</h3>
                      <div className="direction-meta">
                        <span className="meta-pill">10 месяцев</span>
                        <span className="meta-pill meta-pill-accent">Стажировка</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="panel-block split">
              <div>
                <h2>Индивидуальные занятия</h2>
                <p>С действующими разработчиками и персональным планом развития.</p>
              </div>
              <div className="code-preview" />
            </div>

            <div className="panel-block student-support">
              <h2>Наши ученики никогда не остаются 1 на 1 с проблемой</h2>
              <div className="support-layout">
                <div className="support-triangle" aria-hidden="true" />

                <div className="support-center-image">
                  <div className="support-photo center-student-photo" />
                </div>

                <article className="support-person support-teacher">
                  <div className="support-photo teacher-photo" />
                  <h3>Преподаватель</h3>
                  <p>Обсуждайте любые вопросы ежедневно</p>
                </article>

                <article className="support-person support-curator">
                  <div className="support-photo curator-photo" />
                  <h3>Куратор</h3>
                  <p>Настраивайте график и темп обучения под себя</p>
                </article>

                <article className="support-platform">
                  <div className="support-photo student-photo" />
                  <h3>Платформа</h3>
                  <p>Закрепите полученные знания на нашей платформе</p>
                </article>
              </div>
            </div>

            <div className="panel-block certificates">
              <div className="cert-layout">
                <article className="cert-copy">
                  <h3>После обучения вы получите:</h3>
                  <p>
                    Удостоверение о повышении квалификации или диплом о
                    профпереподготовке установленного образца и
                    <span> официальный диплом Академии INNOPROG:</span> они
                    подтвердят вашу квалификацию и помогут в трудоустройстве.
                  </p>
                </article>

                <div className="cert-media" aria-hidden="true">
                  <div className="diploma-card diploma-card-blue">
                    <div className="diploma-title">ДИПЛОМ</div>
                  </div>
                  <div className="diploma-card diploma-card-white">
                    <div className="diploma-brand">INNOPROG</div>
                    <div className="diploma-title">ДИПЛОМ</div>
                    <div className="diploma-line" />
                    <div className="diploma-line short" />
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-block" id="reviews">
              <h2>Отзывы</h2>
              <div className="reviews-showcase">
                <div className="reviews-top">
                  <div className="orbit-ring ring-1" />
                  <div className="orbit-ring ring-2" />
                  <div className="orbit-ring ring-3" />

                  <div className="review-avatar av-1" />
                  <div className="review-avatar av-2" />
                  <div className="review-avatar av-3" />
                  <div className="review-avatar av-4" />
                  <div className="review-avatar av-5" />
                  <div className="review-avatar av-6" />
                  <div className="review-avatar av-7" />

                  <div className="reviews-center">
                    <div className="reviews-percent">91%</div>
                    <p>студентов довольны своими результатами</p>
                  </div>
                </div>

                <div
                  className="reviews-slider"
                  onPointerDown={handleReviewsPointerDown}
                  onPointerUp={handleReviewsPointerUp}
                  onPointerCancel={() => setDragStartX(null)}
                >
                  <div
                    className="reviews-track"
                    style={{
                      ["--reviews-track-gap" as string]: `${REVIEWS_TRACK_GAP}px`,
                      transform: `translateX(calc(-${reviewShiftPercent}% - ${reviewShiftGap}px))`,
                    }}
                  >
                    {reviewStories.map((story) => (
                      <article
                        className="review-story"
                        key={story.slug}
                        role="button"
                        tabIndex={0}
                        onClick={() => openReviewDetails(story.slug)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openReviewDetails(story.slug);
                          }
                        }}
                        style={{
                          flex: `0 0 ${reviewSlideWidth}`,
                          maxWidth: reviewSlideWidth,
                          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.84) 56%, rgba(255, 255, 255, 0.16) 100%), url("${story.image}")`,
                        }}
                      >
                        <div className="review-head">
                          <div className="review-label">{story.name}</div>
                          <div className="review-course">
                            Выпускник курса <span>{story.course}</span>
                          </div>
                        </div>
                        <p>{story.quote}</p>
                        <div className="review-path">{story.path}</div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="reviews-controls">
                  <button
                    className="reviews-control-btn"
                    type="button"
                    onClick={goPrevReview}
                    aria-label="Предыдущий отзыв"
                  >
                    ‹
                  </button>
                  <button
                    className="reviews-control-btn"
                    type="button"
                    onClick={goNextReview}
                    aria-label="Следующий отзыв"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="panel-block compare">
              <div className="compare-grid">
                <article className="compare-side">
                  <div className="compare-image compare-image-left" />
                  <h3>Изучать курсы по видеороликам самостоятельно</h3>
                </article>

                <div className="compare-vs">VS</div>

                <article className="compare-side">
                  <div className="compare-image compare-image-right" />
                  <h3>Еженедельные занятия с преподавателями</h3>
                </article>
              </div>

              <div className="compare-choice">
                <span aria-hidden="true">😐</span>
                <h2>Выбор за тобой</h2>
                <span aria-hidden="true">😁</span>
              </div>
            </div>

            <div className="panel-block cta">
              <form
                className="lead-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!consentAccepted) {
                    return;
                  }
                }}
              >
                <h3>Заявка на обучение</h3>
                <p className="lead-caption">
                  Оставьте <span>заявку</span>, и мы <span>свяжемся</span> с Вами в ближайшее время
                </p>
                <input type="text" placeholder="Ваше имя" />
                <div className="phone-field">
                  <span className="phone-flag" aria-hidden="true">
                    🇷🇺
                  </span>
                  <input type="tel" placeholder="+7 (000) 000-00-00" />
                </div>
                <button className="lead-submit" type="submit" disabled={!consentAccepted}>
                  Отправить
                </button>
                <label className="consent-row">
                  <input
                    type="checkbox"
                    checked={consentAccepted}
                    onChange={(event) => setConsentAccepted(event.target.checked)}
                  />
                  <span>
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных и
                    соглашаетесь с <a href="#">политикой конфиденциальности</a>
                  </span>
                </label>
              </form>

              <div className="price-column">
                <article className="price-card">
                  <div className="price-badge">-27%</div>
                  <h3>Стоимость обучения</h3>
                  <p className="price-old">9 990 руб/мес.</p>
                  <p className="price">7 250 руб/мес.</p>
                  <p className="price-gift">+ 2 занятия в подарок 🎁</p>
                </article>

                <article className="price-benefits">
                  <ul>
                    <li>
                      Онлайн занятия с опытными преподавателями <strong>1 на 1</strong>
                    </li>
                    <li>
                      Погружение ребенка в <strong>IT-профессию</strong>
                    </li>
                    <li>
                      <strong>Гарантируем результат</strong> или мы вернем вам деньги
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </>
        ) : (
          <div className="panel-empty">
            <h2>Для детей</h2>
            <p>Пока пусто. Здесь появятся направления и секции для детского трека.</p>
          </div>
        )}
      </section>

      {siteFooter}
    </div>
  );
}

export default App;
