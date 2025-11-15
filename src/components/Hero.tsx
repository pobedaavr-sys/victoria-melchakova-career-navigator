import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  const highlights = [
    "12 лет опыта в подборе персонала и карьерном консультировании",
    "Опыт руководителя в Сбербанке, ВТБ, Газпромбанке, ОТП",
    "Более 20 реализованных проектов по построению команд",
    "Приглашенный эксперт СПб ГБУ «ЦРПП»",
    "Основатель HR-агентства",
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-soft overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-light-lavender rounded-full text-primary font-semibold">
              Карьерный эксперт
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Выйдите из карьерного тупика 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> с четким планом действий</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Индивидуальный разбор вашей ситуации, конкретные шаги для роста и развития, 
              профессиональная поддержка на пути к карьерным целям
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={onCTAClick} 
                size="lg"
                className="bg-gradient-primary text-lg px-8 shadow-strong hover:shadow-medium transition-all"
              >
                Хочу на консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onCTAClick}
                className="text-lg px-8 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Связаться с нами
              </Button>
            </div>
          </div>

          {/* Right: Image with circles */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Main circle with photo */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-strong border-8 border-white">
                <img
                  src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/vika_pol.png"
                  alt="Виктория Мельчакова"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Small badge circle */}
              <div className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-strong border-4 border-white bg-primary">
                <img
                  src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/geroi_krug.png"
                  alt="Badge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
