import { Button } from "./ui/button";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ПОМОГУ ВАШЕЙ КАРЬЕРЕ{" "}
              <span className="text-accent">ВЫЙТИ НА НОВЫЙ УРОВЕНЬ</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              От подготовки к собеседованию до плана развития на текущем месте
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <Button 
                onClick={onCTAClick} 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-strong hover:shadow-medium transition-all w-full md:w-auto"
              >
                ЗАПИСАТЬСЯ
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onCTAClick}
                className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full md:w-auto"
              >
                ЗАКАЗАТЬ РЕЗЮМЕ
              </Button>
            </div>
          </div>

          {/* Right: Image with circles */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Main circle with photo */}
            <div className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-strong border-8 border-white z-10">
              <img
                src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/vika_pol.png"
                alt="Виктория Мельчакова"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small badge circle - LEFT BOTTOM */}
            <div className="absolute bottom-12 left-4 md:left-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-strong border-4 border-white bg-accent flex items-center justify-center z-20">
              <div className="text-white text-center p-4">
                <p className="font-bold text-sm md:text-base">Виктория Мельчакова</p>
                <p className="text-xs mt-1">• 12 лет в HR</p>
                <p className="text-xs">• Карьерный консультант</p>
              </div>
            </div>

            {/* Small circle with image - RIGHT BOTTOM */}
            <div className="absolute bottom-4 right-4 md:right-8 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-strong border-4 border-white z-20">
              <img
                src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/geroi_krug.png"
                alt="Дополнительное изображение"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
