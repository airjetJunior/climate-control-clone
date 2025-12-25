import { Wind, Wrench, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Instalação de Ar Condicionado",
      description: "Instalação profissional de sistemas de climatização residencial e comercial com garantia de qualidade.",
      features: ["Split", "Multi-split", "VRF", "Cassete"],
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva e Corretiva",
      description: "Serviços completos de manutenção para garantir o funcionamento perfeito do seu equipamento.",
      features: ["Limpeza de filtros", "Recarga de gás", "Troca de peças", "Verificação elétrica"],
    },
    {
      icon: Settings,
      title: "Retífica de Compressores",
      description: "Especialistas em manutenção e retífica de compressores de climatização com equipamentos de ponta.",
      features: ["Diagnóstico", "Retífica completa", "Teste de qualidade", "Garantia estendida"],
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas em climatização com qualidade e garantia
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
