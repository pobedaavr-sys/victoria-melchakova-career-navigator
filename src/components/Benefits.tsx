export const Benefits = () => {
  const benefits = [
    {
      title: "Результаты, а не советы",
      description:
        "Вы получите конкретный план действий с четкими шагами, а не общие рекомендации. Каждая консультация заканчивается индивидуальной стратегией, которую можно применить сразу.",
    },
    {
      title: "Мотивация и уверенность",
      description:
        "Мы разберем ваши сильные стороны и точки роста. Вы поймете свою реальную ценность на рынке труда, избавитесь от сомнений и тревоги по поводу карьеры.",
    },
    {
      title: "Профессиональный взгляд",
      description:
        "Экспертный взгляд HR-руководителя с 12-летним опытом в крупных банках и карьерного консультанта. Вы получите инсайты изнутри индустрии и реальное понимание, как работает рынок труда.",
    },
  ];

  return (
    <section className="py-20 bg-light-lavender relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ЧТО ВЫ ПОЛУЧИТЕ <br />НА КОНСУЛЬТАЦИИ
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary mb-6 flex items-center justify-center text-white font-bold text-2xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative circles - adaptive sizing */}
        <div 
          className="absolute top-16 -right-8 rounded-full overflow-hidden shadow-strong border-8 border-white hidden lg:block"
          style={{
            width: 'clamp(180px, 14vw, 280px)',
            height: 'clamp(180px, 14vw, 280px)',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/dev_rezum_krug.png"
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute -bottom-8 right-1/4 rounded-full overflow-hidden shadow-medium border-4 border-white hidden xl:block"
          style={{
            width: 'clamp(110px, 8vw, 170px)',
            height: 'clamp(110px, 8vw, 170px)',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/pech_noutbook.png"
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
