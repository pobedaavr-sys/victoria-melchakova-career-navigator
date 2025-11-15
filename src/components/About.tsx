import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Briefcase, label: "12 лет", description: "опыта в HR и карьерном консультировании" },
    { icon: Users, label: "20+ проектов", description: "по построению команд и бизнес-процессов" },
    { icon: Award, label: "10+ лет", description: "руководящего опыта в топ-банках" },
    { icon: TrendingUp, label: "Эксперт", description: "СПб ГБУ «ЦРПП»" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-strong">
              <img
                src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/foto_vika_za_stolom.png"
                alt="Виктория Мельчакова за работой"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Обо мне</h2>
            
            <h3 className="text-2xl font-semibold text-primary">
              Карьерный эксперт с управленческим опытом в крупных банках
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Я — Виктория Мельчакова, универсальный карьерный консультант, работающий на всех рынках. 
                За 12 лет в сфере HR и подбора персонала я помогла сотням людей найти работу мечты, 
                выйти из карьерного тупика и увеличить доход.
              </p>
              <p>
                Мой путь начался с экономического образования и развился в богатую карьеру руководителя 
                в крупнейших российских и международных банках: Сбербанк, ВТБ, Газпромбанк, ОТП. 
                Более 10 лет управленческого опыта дали мне глубокое понимание того, как устроены 
                компании изнутри и что они ищут в кандидатах.
              </p>
              <p>
                Я не просто консультант — я практикующий HR-руководитель и основатель собственного 
                HR-агентства. Реализовала более 20 проектов по выстраиванию колл-центров, отделов 
                продаж, систем адаптации и обучения команд. Также я была операционным директором 
                крупного бизнес-сообщества Санкт-Петербурга и организатором мероприятий для предпринимателей.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-soft border border-border"
                >
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <div className="font-bold text-lg">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
