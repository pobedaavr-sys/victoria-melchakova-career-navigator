import { Phone, FileText, Video, MessageCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: Phone,
      title: "Звонок и запись",
      description:
        "Позвоните по телефону +7 (921) 592 51 58. Обсудим ваш запрос, согласуем удобное время и формат консультации (онлайн).",
    },
    {
      icon: FileText,
      title: "Подготовка",
      description:
        "Я уточню детали вашей ситуации. При необходимости попрошу прислать резюме, примеры вакансий или описание текущей позиции для более глубокого разбора.",
    },
    {
      icon: Video,
      title: "Онлайн-консультация",
      description:
        "Встреча длится 1,5 часа. Разберем вашу ситуацию, проработаем стратегию действий, усилим резюме, подготовимся к собеседованиям или переговорам.",
    },
    {
      icon: MessageCircle,
      title: "Сопровождение",
      description:
        "В течение 2 недель после консультации я отвечаю на ваши вопросы и помогаю скорректировать план действий по мере продвижения к цели.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          КАК ПРОХОДИТ КОНСУЛЬТАЦИЯ
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all h-full border border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-primary mb-4 flex items-center justify-center text-white">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">
                  Шаг {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative circles - adaptive sizing */}
        <div 
          className="absolute top-12 -left-8 rounded-full overflow-hidden shadow-strong border-8 border-white hidden lg:block"
          style={{
            width: 'clamp(200px, 15vw, 300px)',
            height: 'clamp(200px, 15vw, 300px)',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/devuchka_pichet.png"
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute -bottom-10 left-1/4 rounded-full overflow-hidden shadow-medium border-4 border-white hidden xl:block"
          style={{
            width: 'clamp(120px, 9vw, 180px)',
            height: 'clamp(120px, 9vw, 180px)',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/chahka_nout.png"
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
