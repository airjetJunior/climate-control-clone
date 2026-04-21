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
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-primary/10 border-2 border-primary/30 rounded-xl mb-6">
              <span className="text-3xl font-extrabold text-primary">+10</span>
              <span className="text-sm font-semibold text-primary leading-tight">
                Anos de<br />Experiência
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Instalação e Manutenção de
              <span className="text-primary block">Ar-Condicionado</span>
              em Ribeirão Preto
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              A AirJet Climatização é uma empresa especializada em instalação e manutenção
              de ar-condicionado em Ribeirão Preto, oferecendo soluções completas em
              climatização e refrigeração com atendimento rápido e equipe técnica qualificada.
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
                alt="Técnico em ar-condicionado em Ribeirão Preto realizando manutenção - AirJet Climatização"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
