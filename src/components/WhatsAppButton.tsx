import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppButton = () => {
  const phoneNumber = "5516991613129";
  const message = "Olá! Gostaria de solicitar um orçamento.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-16 h-16 object-contain drop-shadow-lg"
      />
      
      {/* Tooltip */}
      <span className="absolute right-18 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Fale conosco!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
