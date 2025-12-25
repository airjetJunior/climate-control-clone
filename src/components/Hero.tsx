import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-technician.jpg";

const Hero = () => {
  const features = [
    "Equipe técnica especializada",
    "Atendimento rápido e eficiente",
    "Garantia em todos os serviços",
  ];

  return (
    <section className="relative pt-20 lg:pt-24 min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold mb-6">
              Mais de 10 anos de experiência
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Climatização
              <span className="text-primary block">Perfeita Para</span>
              Seu Ambiente
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Instalação, manutenção de ar condicionado e retífica de compressores 
              em Ribeirão Preto. Qualidade e confiança garantidas.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="tel:+5516991613129" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (16) 99161-3129
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Técnico profissional da AirJet instalando ar condicionado"
                className="w-full h-auto object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-card rounded-xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-primary">10+</span>
                  <div className="text-sm text-muted-foreground leading-tight">
                    <div>Anos de</div>
                    <div className="font-semibold text-foreground">Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
