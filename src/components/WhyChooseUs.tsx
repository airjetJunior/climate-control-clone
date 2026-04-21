import { Shield, Clock, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Mais de 10 anos de experiência atendendo Ribeirão Preto e região com excelência",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Equipe pronta para atender suas necessidades com rapidez e eficiência",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Todos os serviços com garantia e certificação de qualidade",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados e treinados nas melhores técnicas do mercado",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresa de Climatização em Ribeirão Preto – SP
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            A AirJet Climatização atua há mais de 10 anos como empresa de climatização em
            Ribeirão Preto, com técnicos em ar-condicionado especializados em atendimento
            residencial, comercial e industrial. Solicite um orçamento rápido pelo WhatsApp
            ou telefone e fale com nossa equipe local.
          </p>
          <h3 className="text-base font-semibold text-primary">
            Técnico em ar-condicionado em Ribeirão Preto · Orçamento rápido e atendimento especializado
          </h3>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
