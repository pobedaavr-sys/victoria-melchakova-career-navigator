import { FileText, MessageSquare, TrendingUp, Briefcase, Users, Target } from "lucide-react";
import { Button } from "./ui/button";

export const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Разбор и усиление резюме",
      description:
        "Профессиональный анализ вашего резюме, выявление слабых мест и создание сильного профиля, который заметят HR и рекрутеры.",
      features: ["Анализ структуры", "Усиление достижений", "ATS-оптимизация"],
    },
    {
      icon: MessageSquare,
      title: "Подготовка к собеседованию",
      description:
        "Отработка сложных вопросов, стратегия презентации себя, разбор кейсов и подготовка к разным форматам интервью.",
      features: ["Проработка вопросов", "Самопрезентация", "Разбор кейсов"],
    },
    {
      icon: TrendingUp,
      title: "План развития внутри компании",
      description:
        "Составление индивидуального плана карьерного роста в текущей организации с учетом ваших целей и возможностей компании.",
      features: ["Оценка потенциала", "Карта роста", "Стратегия действий"],
    },
    {
      icon: Briefcase,
      title: "Стратегия смены работы",
      description:
        "Комплексный подход к поиску новой позиции: анализ рынка, целевые компании, тактика переговоров о зарплате.",
      features: ["Анализ рынка", "Поиск вакансий", "Переговоры"],
    },
    {
      icon: Users,
      title: "Переход на управленческую позицию",
      description:
        "Подготовка к руководящей роли: развитие необходимых компетенций, позиционирование себя как лидера, план перехода.",
      features: ["Развитие компетенций", "Позиционирование", "План перехода"],
    },
    {
      icon: Target,
      title: "Карьерная стратегия",
      description:
        "Глубокий анализ вашей карьеры, определение целей на 1-3 года и разработка пошаговой стратегии их достижения.",
      features: ["Анализ карьеры", "Постановка целей", "Дорожная карта"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Другие услуги</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all border border-border flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-primary mb-4 flex items-center justify-center">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="#">Подробнее</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
