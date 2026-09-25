import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Maximize2 } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Lightbox } from "@/components/gallery/Lightbox";

const showcaseImages = [
  {
    src: "/images/railing.jpeg",
    alt: "Custom metal railings for stairs and balconies",
    title: "Metal Railings",
    description: "Statement railings for staircases, balconies, terraces, and mezzanines — shaped around your space.",
    href: "/products/railings",
  },
  {
    src: "/images/elevation.jpeg",
    alt: "Laser cut metal elevation and cladding panel",
    title: "Metal Elevation & Cladding",
    description: "Architectural screens and facade panels that bring depth, shade, and a distinctive identity to buildings.",
    href: "/products/elevation",
  },
  {
    src: "/images/nameplate.jpeg",
    alt: "Premium custom metal name plate",
    title: "Name Plates & Signage",
    description: "Precision-cut signs and name plates finished to make homes, offices, and businesses memorable.",
    href: "/products/nameplates",
  },
  {
    src: "/images/gates.jpeg",
    alt: "Decorative metal gates and grills",
    title: "Gates & Grills",
    description: "Secure entry and window solutions where dependable protection meets a design that feels like yours.",
    href: "/products/gates",
  },
  {
    src: "/images/dividers.jpeg",
    alt: "Decorative metal room divider and partition",
    title: "Room Dividers & Partitions",
    description: "Functional metal screens that define open spaces while keeping light, movement, and visual flow intact.",
    href: "/products/dividers",
  },
  {
    src: "/images/custom.jpeg",
    alt: "Custom CNC laser cut metal artwork",
    title: "Custom Laser Cutting",
    description: "Have a pattern, logo, or idea in mind? We turn your drawing into a precise finished piece.",
    href: "/products/custom",
  },
];

export function ProductShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === showcaseImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? showcaseImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold text-gold uppercase tracking-[0.18em] mb-4">
              What We Make
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-balance">
              Explore Our Products
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              From a single name plate to a complete architectural facade, every piece is custom-built
              with precision and superior finishing.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] gap-6 lg:gap-10 items-stretch">
            <div className="relative min-h-[420px] sm:min-h-[520px] overflow-hidden rounded-lg border border-primary-foreground/10 bg-primary/40 group">
              <img
                key={showcaseImages[activeIndex].src}
                src={showcaseImages[activeIndex].src}
                alt={showcaseImages[activeIndex].alt}
                className="absolute inset-0 h-full w-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-3">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(showcaseImages.length).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {showcaseImages[activeIndex].title}
                    </h3>
                    <p className="max-w-xl text-sm sm:text-base text-primary-foreground/75">
                      {showcaseImages[activeIndex].description}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`View ${showcaseImages[activeIndex].title} image larger`}
                    onClick={() => openLightbox(activeIndex)}
                    className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary/60 text-primary-foreground transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-3 sm:p-4">
              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/45">
                Browse categories
              </p>
              <div className="grid grid-cols-1 gap-1">
                {showcaseImages.map((item, index) => (
                  <Button
                    key={item.title}
                    type="button"
                    variant="ghost"
                    size="default"
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`group h-auto min-h-14 w-full justify-between rounded-none border-l-2 px-3 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                      activeIndex === index
                        ? "border-gold bg-primary-foreground/[0.08] text-primary-foreground"
                        : "border-transparent text-primary-foreground/60 hover:border-gold/50 hover:bg-primary-foreground/[0.05] hover:text-primary-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gold/80">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-semibold sm:text-base">{item.title}</span>
                    </span>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${activeIndex === index ? "translate-x-1 text-gold" : "text-primary-foreground/30 group-hover:translate-x-1"}`} />
                  </Button>
                ))}
              </div>
              <div className="mt-auto border-t border-primary-foreground/10 px-3 pt-5">
                <p className="text-sm leading-relaxed text-primary-foreground/55 mb-4">
                  Looking for something made only for you?
                </p>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/your-project">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} className="mt-10 text-center">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/products">
              Explore All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={showcaseImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
