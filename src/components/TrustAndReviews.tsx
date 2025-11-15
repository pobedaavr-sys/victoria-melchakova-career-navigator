import { Shield, Award, Users, Briefcase, TrendingUp } from "lucide-react";

export const TrustAndReviews = () => {
  const trustReasons = [
    {
      icon: Briefcase,
      title: "Большой практический опыт",
      description: "12 лет в HR и карьерном консультировании, работа с сотнями клиентов",
    },
    {
      icon: Award,
      title: "Работа в крупных банках",
      description: "Опыт руководителя в Сбербанке, ВТБ, Газпромбанке, ОТП",
    },
    {
      icon: Users,
      title: "Построение команд",
      description: "Реализовано более 20 проектов по выстраиванию отделов и бизнес-процессов",
    },
    {
      icon: Shield,
      title: "Экспертный статус",
      description: "Приглашенный эксперт СПб ГБУ «ЦРПП»",
    },
    {
      icon: TrendingUp,
      title: "Собственный бизнес",
      description: "Основатель HR-агентства, экс-операционный директор бизнес-сообщества",
    },
  ];

  const reviews = [
    {
      text: "Пришла на консультацию в полной растерянности. Сидела на одном месте 7 лет, не понимала, куда двигаться. Виктория за полтора часа разложила всё по полочкам: мои сильные стороны, варианты развития, конкретные шаги. Составили план на 6 месяцев. Сейчас получила повышение и чувствую себя уверенно в карьере!",
      author: "Елена, 34 года, менеджер по продажам",
    },
    {
      text: "Долго искал работу после сокращения, постоянно проваливал финальные собеседования. Виктория разобрала мои ошибки, помогла усилить резюме и проработали сложные вопросы. Уже на следующей неделе получил два оффера! Выбрал компанию с ростом зарплаты на 45%. Очень благодарен за помощь.",
      author: "Дмитрий, 29 лет, IT-специалист",
    },
    {
      text: "Хотела сменить сферу, но боялась начинать с нуля. Работа с Викторией дала мне уверенность и четкий план действий. Мы нашли, как применить мой опыт в новой отрасли. Через месяц после консультации вышла на новую должность в маркетинге без потери в доходе. Мечта сбылась!",
      author: "Анна, 32 года, маркетолог",
    },
    {
      text: "Виктория — настоящий профессионал! Я готовился к переходу на руководящую позицию и не знал, с чего начать. На консультации получил конкретную стратегию подготовки, список компетенций для развития и план действий. Через 4 месяца стал руководителем отдела. Консультация окупилась в первый же месяц работы!",
      author: "Сергей, 38 лет, руководитель отдела",
    },
    {
      text: "После декрета потеряла связь с рынком труда, резюме не работало совсем. Виктория помогла пересобрать профиль, показала, как правильно презентовать себя. Проработали мои страхи и неуверенность. За три недели получила оффер с зарплатой даже выше, чем до декрета! Спасибо огромное!",
      author: "Мария, 31 год, HR-менеджер",
    },
    {
      text: "Нужно было договориться о повышении, но не знал, как правильно подойти к руководству. Виктория дала стратегию переговоров, помогла собрать аргументы и отработали возможные возражения. Через неделю получил прибавку к зарплате и новые задачи. Рекомендую всем, кто хочет развиваться!",
      author: "Алексей, 35 лет, аналитик",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Why Trust Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему мне стоит доверять
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-light-lavender rounded-2xl p-6 hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary mb-4 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all border border-border"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>
                <div className="text-sm font-semibold text-primary">{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
