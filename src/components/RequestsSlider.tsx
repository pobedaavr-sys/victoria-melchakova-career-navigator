import { Slider } from "./Slider";

const requests = [
  {
    title: "Поиск новой работы",
    description: "Помогу найти вакансии и увеличить доход на 30-50%",
  },
  {
    title: "Смена сферы деятельности",
    description: "Переход в новую отрасль без потери в зарплате",
  },
  {
    title: "Выход из карьерного тупика",
    description: "Определим точки роста и составим план развития",
  },
  {
    title: "Подготовка к собеседованию",
    description: "Отработаем сложные вопросы и презентацию себя",
  },
  {
    title: "Переговоры о повышении",
    description: "Стратегия и аргументы для разговора с руководством",
  },
  {
    title: "Усиление резюме и профиля",
    description: "Сделаем ваше резюме заметным для HR и рекрутеров",
  },
  {
    title: "План карьерного развития",
    description: "Пошаговый маршрут к желаемой позиции",
  },
  {
    title: "Переход на руководящую должность",
    description: "Подготовка к управленческой роли и новым задачам",
  },
];

export const RequestsSlider = () => {
  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          САМЫЕ ПОПУЛЯРНЫЕ ЗАПРОСЫ <br />НА КОНСУЛЬТАЦИЮ
        </h2>

        <Slider cardsPerView={{ mobile: 2, tablet: 4, desktop: 6 }}>
          {requests.map((request, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all h-full border border-border"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{request.title}</h3>
                <p className="text-sm text-muted-foreground">{request.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
