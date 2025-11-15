import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <a
              href="tel:+79215925158"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              +7 (921) 592 51 58
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#consultation" className="text-white/80 hover:text-white transition-colors">
                  Консультация
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://disk.yandex.ru/i/q0YqPEJms5wOqA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="https://disk.yandex.ru/i/gDOwFwSRA4i4Fw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-white/20 pt-8 space-y-2 text-sm text-white/60">
          <p>ИП Мельчакова Виктория Вячеславовна</p>
          <p>ОГРНИП 323470400105256</p>
          <p>ИНН 571801154500</p>
        </div>

        <div className="mt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </footer>
  );
};
