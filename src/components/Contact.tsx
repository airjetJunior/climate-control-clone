import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(16) 99161-3129",
      href: "tel:+5516991613129",
    },
    {
      icon: Mail,
      title: "Email",
      value: "Junior.airjet@gmail.com",
      href: "mailto:Junior.airjet@gmail.com",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Ribeirão Preto - SP",
      subtitle: "Atendemos toda a região",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicite um orçamento sem compromisso ou tire suas dúvidas com nossa equipe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                    {info.subtitle && (
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Solicite um Orçamento
            </h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário ou entre em contato diretamente pelos nossos canais. 
              Nossa equipe responderá o mais rápido possível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild variant="hero" size="lg" className="flex-1">
                <a href="tel:+5516991613129" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="flex-1">
                <a 
                  href="https://wa.me/5516991613129" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Orçamento gratuito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Atendimento rápido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
