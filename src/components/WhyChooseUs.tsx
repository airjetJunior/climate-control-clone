import { Shield, Clock, Award, Users } from "lucide-react";
import komecoAsset from "@/assets/komeco.png.asset.json";
import agrattoAsset from "@/assets/agratto.png.asset.json";
import tclsempAsset from "@/assets/tclsemp.png.asset.json";

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
            Empresa de Climatização Sediada em Ribeirão Preto – SP
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            A AirJet Climatização atua há mais de 10 anos como empresa de climatização
            sediada em Ribeirão Preto - SP, atendendo Ribeirão Preto e região e também
            todos os estados do Brasil (AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG,
            PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE e TO) com técnicos em
            ar-condicionado especializados em serviços residenciais, comerciais e
            industriais. Solicite um orçamento rápido pelo WhatsApp ou telefone.
          </p>
          <h3 className="text-base font-semibold text-primary">
            Técnico em ar-condicionado em Ribeirão Preto e região · Atendimento em todo o Brasil
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

        {/* Credenciadas */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Credenciada com as Principais Marcas
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serviço técnico autorizado e especializado nas principais marcas do mercado de climatização
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-2 border-orange-500/30 rounded-xl p-6 flex items-center justify-center hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
              <img
                src={komecoAsset.url}
                alt="Logo Komeco"
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-card border-2 border-green-600/30 rounded-xl p-6 flex items-center justify-center hover:border-green-600 hover:shadow-lg hover:shadow-green-600/10 transition-all duration-300">
              <img
                src={agrattoAsset.url}
                alt="Logo Agratto"
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-card border-2 border-red-600/30 rounded-xl p-6 flex items-center justify-center hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300">
              <img
                src={tclsempAsset.url}
                alt="Logo TCL Semp"
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
