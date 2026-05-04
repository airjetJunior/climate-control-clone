import { Wind, Wrench, Settings, Snowflake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Instalação de Ar-Condicionado em Ribeirão Preto e Região",
      description: "Instalação profissional de ar-condicionado para atendimento residencial, comercial e industrial em Ribeirão Preto e região.",
      features: ["Split", "Multi-split", "VRF", "Cassete"],
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva e Corretiva de Ar-Condicionado",
      description: "Serviços completos de manutenção de ar-condicionado em Ribeirão Preto e região para garantir o funcionamento perfeito do seu equipamento.",
      features: ["Limpeza de filtros", "Recarga de gás", "Troca de peças", "Verificação elétrica"],
    },
    {
      icon: Settings,
      title: "Retífica e Manutenção de Compressores",
      description: "Especialistas em retífica de compressores de climatização, refrigeração e ar comprimido com equipamentos de ponta e garantia.",
      features: ["Diagnóstico", "Retífica completa", "Teste de qualidade", "Garantia estendida"],
    },
    {
      icon: Snowflake,
      title: "Instalação e Manutenção de Chiller",
      description: "Projeto, instalação e manutenção preventiva e corretiva de chillers para aplicações comerciais e industriais em todo o Brasil.",
      features: ["Instalação completa", "Manutenção preventiva", "Manutenção corretiva", "Atendimento industrial"],
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços de Climatização e Refrigeração
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em climatização e refrigeração para atendimento residencial,
            comercial e industrial em Ribeirão Preto e região, com cobertura em todos os
            estados do Brasil.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
