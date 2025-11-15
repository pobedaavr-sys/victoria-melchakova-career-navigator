import { Button } from "./ui/button";
import { Clock, Video, FileText, HeadphonesIcon } from "lucide-react";

interface BookingProps {
  onCTAClick: () => void;
}

export const Booking = ({ onCTAClick }: BookingProps) => {
  const features = [
    { icon: Clock, text: "Длительность: 1,5 часа" },
    { icon: Video, text: "Формат: онлайн-встреча" },
    { icon: FileText, text: "Индивидуальный план действий" },
    { icon: HeadphonesIcon, text: "2 недели сопровождения" },
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-accent/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Записаться на консультацию
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Индивидуальная онлайн-встреча длительностью 1,5 часа, где мы разберем вашу карьерную 
            ситуацию, составим план действий и проработаем конкретные шаги для достижения целей. 
            После консультации вы получите 2 недели поддержки для корректировки стратегии.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 py-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-white text-lg mb-4">
              Стоимость консультации уточните при записи по телефону
            </p>
            <a 
              href="tel:+79215925158" 
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              +7 (921) 592 51 58
            </a>
          </div>

          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 h-auto shadow-strong"
          >
            Хочу на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};
