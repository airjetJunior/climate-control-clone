import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Manutenção de motor de compressor" },
    { src: gallery2, alt: "Motor de compressor na bancada" },
    { src: gallery3, alt: "Técnico realizando manutenção em motor" },
    { src: gallery4, alt: "Fuso helicoidal de compressor" },
    { src: gallery5, alt: "Motor de compressor industrial" },
    { src: gallery6, alt: "Peças de compressor em manutenção" },
    { src: gallery7, alt: "Bloco de compressor industrial" },
    { src: gallery8, alt: "Estator e rotor de motor elétrico" },
    { src: gallery9, alt: "Compressor Hitachi parafuso" },
    { src: gallery10, alt: "Placa de válvulas de compressor" },
    { src: gallery11, alt: "Compressor instalado em chiller" },
    { src: gallery12, alt: "Compressor parafuso industrial" },
    { src: gallery13, alt: "Compressor em movimentação" },
    { src: gallery14, alt: "Estator de motor elétrico" },
    { src: gallery15, alt: "Fuso e bloco de compressor" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-2 block">Nossos Trabalhos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos realizados com excelência e profissionalismo
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
