import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoAirjet from "@/assets/logo-airjet.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img
                src={logoAirjet}
                alt="AirJet Climatização e Refrigeração"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Especialistas em climatização com mais de 10 anos de experiência. 
              Instalação, manutenção e retífica de compressores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5516991613129" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  (16) 99161-3129
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:junior.airjet@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  junior.airjet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary-foreground/70">Ribeirão Preto - SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Instagram className="w-4 h-4 text-primary" />
                <a
                  href="https://www.instagram.com/airjet_climatizacao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  @airjet_climatizacao
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} AirJet Climatização. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
