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

const directions = [
  "Python разработчик",
  "Data Science",
  "Фронтенд разработчик",
  "Разработчик С++",
  "Java разработчик",
  "Unreal Engine",
  "ML-инженер",
  "Мобильный разработчик",
  "Data-аналитик",
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

function App() {
  const [audience, setAudience] = useState<"adult" | "kids">("adult");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPerView, setReviewsPerView] = useState(2);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [activeReviewSlug, setActiveReviewSlug] = useState<string | null>(() =>
    getReviewSlugFromPath(window.location.pathname),
  );
  const suppressReviewClickRef = useRef(false);
  const shouldScrollToReviewsRef = useRef(false);
  const isAdult = audience === "adult";
  const maxReviewIndex = Math.max(reviewStories.length - reviewsPerView, 0);
  const reviewSlideWidth = `calc((100% - ${(reviewsPerView - 1) * REVIEWS_TRACK_GAP}px) / ${reviewsPerView})`;
  const reviewShiftPercent = (100 / reviewsPerView) * reviewIndex;
  const reviewShiftGap = (REVIEWS_TRACK_GAP / reviewsPerView) * reviewIndex;
  const activeReview = activeReviewSlug
    ? reviewStories.find((story) => story.slug === activeReviewSlug)
    : null;

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

  const closeReviewDetails = () => {
    window.history.pushState({}, "", "/");
    shouldScrollToReviewsRef.current = true;
    setActiveReviewSlug(null);
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
                  <article className="direction-card" key={item}>
                    <div className="direction-top-badge">⚡ С наставником</div>
                    <div className="direction-content">
                      <h3>{item}</h3>
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

            <div className="panel-block mentors">
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

      <footer className="footer section">
        <div className="footer-col footer-brand">
          <img className="footer-logo" src="/image/logo_innoprog_white.png" alt="INNOPROG Education" />
          <div className="footer-socials" aria-label="Социальные сети">
            <a href="tel:+79586067980" aria-label="Телефон">
              ☎
            </a>
            <a href="mailto:education@innoprog.ru" aria-label="Почта">
              ✉
            </a>
            <a href="https://t.me/innoprog_admin" target="_blank" rel="noreferrer" aria-label="Telegram">
              ↗
            </a>
            <a href="https://wa.me/79586067980" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              ◉
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
    </div>
  );
}

export default App;
