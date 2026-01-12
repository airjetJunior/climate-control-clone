import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5516991613129";
  const message = "Olá! Gostaria de solicitar um orçamento.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Fale conosco!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
