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
  const [activeReviewSlug, setActiveReviewSlug] = useState<string | null>(() =>
    getReviewSlugFromPath(window.location.pathname),
  );
  const suppressReviewClickRef = useRef(false);
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
    setActiveReviewSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (activeReview) {
    return (
      <div className="site">
        <main className="section panel review-details-page">
          <button type="button" className="review-back-btn" onClick={closeReviewDetails}>
            ← Назад к отзывам
          </button>

          <article className="review-details-card">
            <div
              className="review-details-cover"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05)), url("${activeReview.image}")`,
              }}
            />
            <div className="review-details-content">
              <div className="review-label">{activeReview.name}</div>
              <h1>{activeReview.course}</h1>
              <p className="review-details-quote">“{activeReview.quote}”</p>
              {activeReview.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="review-path">{activeReview.path}</div>
            </div>
          </article>
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
              <h2>Выбор за тобой</h2>
              <p>Изучать самому по видео или заниматься еженедельно с преподавателем.</p>
            </div>

            <div className="panel-block cta">
              <form className="lead-form">
                <h3>Заявка на обучение</h3>
                <input type="text" placeholder="Ваше имя" />
                <input type="tel" placeholder="+7 (___) ___-__-__" />
                <button className="accent-button" type="submit">
                  Отправить
                </button>
              </form>
              <article className="price-card">
                <h3>Стоимость обучения</h3>
                <p className="price">7 250 руб/мес</p>
                <ul>
                  <li>4 занятия в месяц</li>
                  <li>Проверка домашней работы</li>
                  <li>Персональная программа</li>
                </ul>
              </article>
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
        <div>
          <strong>INNOPROG</strong>
          <p>Школа программирования</p>
        </div>
        <div>
          <p>+7 (999) 123-45-67</p>
          <p>hello@innoprog.ru</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
