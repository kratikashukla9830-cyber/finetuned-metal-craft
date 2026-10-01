import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ZoomIn } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Lightbox } from "@/components/gallery/Lightbox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const showcaseImages = [
  { src: "/images/product1.jpeg", alt: "Geometric laser cut railing", title: "Geometric Laser Cut Railing", category: "Railings" },
  { src: "/images/product2.jpeg", alt: "Modern metal railing", title: "Modern Metal Railing", category: "Railings" },
  { src: "/images/product3.jpeg", alt: "Laser cut elevation panel", title: "Laser Cut Elevation Panel", category: "Elevation" },
  { src: "/images/product4.jpeg", alt: "Architectural metal screen", title: "Architectural Metal Screen", category: "Custom Laser Cut" },
  { src: "/images/product5.jpeg", alt: "Balcony safety railing", title: "Balcony Safety Railing", category: "Railings" },
  { src: "/images/product6.jpeg", alt: "Precision laser cut grill", title: "Precision Cut Metal Grill", category: "Gates & Grills" },
  { src: "/images/product7.jpeg", alt: "Decorative building facade", title: "Decorative Exterior Facade", category: "Elevation" },
  { src: "/images/product8.jpeg", alt: "Interior metal divider", title: "Interior Room Divider", category: "Room Dividers" },
  { src: "/images/product9.jpeg", alt: "Staircase ornamental railing", title: "Staircase Ornamental Railing", category: "Railings" },
  { src: "/images/product10.jpeg", alt: "Contemporary laser cut railing", title: "Contemporary Laser Cut Railing", category: "Railings" },
];

const showcaseSlides = showcaseImages.reduce<Array<Array<(typeof showcaseImages)[number]>>>((slides, image, index) => {
  if (index % 2 === 0) {
    slides.push([image]);
  } else {
    const currentSlide = slides[slides.length - 1];
    if (currentSlide) {
      currentSlide.push(image);
    }
  }
  return slides;
}, []);

function ProductTile({ image, imageIndex, featured, onOpen }: {
  image: (typeof showcaseImages)[number];
  imageIndex: number;
  featured?: boolean;
  onOpen: (index: number) => void;
}) {
  return (
    <article className={featured ? "w-full" : "w-full md:mt-16"}>
      <Button
        type="button"
        variant="ghost"
        aria-label={`View ${image.title}`}
        onClick={() => onOpen(imageIndex)}
        className="group relative block h-auto w-full overflow-hidden rounded-none border border-border/70 bg-muted p-0 text-left shadow-soft hover:bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        <div className={featured ? "relative aspect-[4/5] w-full overflow-hidden" : "relative aspect-[3/4] w-full overflow-hidden"}>
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-elevated backdrop-blur-sm transition-transform duration-700 group-hover:scale-100 scale-75">
              <ZoomIn className="h-5 w-5 text-gold" />
            </span>
          </div>
          <span className="absolute left-5 top-5 bg-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            {String(imageIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </Button>

      <div className="mt-5 flex items-start justify-between gap-4 border-b border-border/70 pb-5">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{image.category}</p>
          <h3 className={featured ? "font-display text-2xl font-medium leading-tight text-foreground" : "font-display text-xl font-medium leading-tight text-foreground"}>
            {image.title}
          </h3>
        </div>
        <span className="mt-1 text-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}

export function ProductShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <section className="section-padding relative overflow-hidden bg-secondary/40">
      <div className="pointer-events-none absolute right-[-4rem] top-1/3 select-none font-display text-[22rem] leading-none text-muted-foreground/[0.06]">
        02
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: true }} className="w-full group/carousel">
          <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <ScrollReveal animation="fade-up">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-gold">
                Our Products
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-8xl">
                Explore Our <span className="italic font-normal text-muted-foreground">Products</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore our range of metal railings, elevation panels, name plates, gates,
                room dividers, and more—each custom-built with precision and superior finishing.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex shrink-0 gap-3 md:pb-1">
            <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-border bg-transparent text-foreground shadow-none hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:h-14 md:w-14" />
            <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-border bg-transparent text-foreground shadow-none hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:h-14 md:w-14" />
          </div>
          </div>

          <ScrollReveal animation="fade-right">
            <CarouselContent className="-ml-0">
              {showcaseSlides.map((slide, slideIndex) => {
                const firstImageIndex = slideIndex * 2;
                return (
                  <CarouselItem key={slideIndex} className="basis-full pl-0">
                    <div className="grid items-start gap-8 md:grid-cols-[1.45fr_1fr] md:gap-12 lg:gap-16">
                      <ProductTile
                        image={slide[0]}
                        imageIndex={firstImageIndex}
                        featured
                        onOpen={openLightbox}
                      />
                      {slide[1] ? (
                        <ProductTile
                          image={slide[1]}
                          imageIndex={firstImageIndex + 1}
                          onOpen={openLightbox}
                        />
                      ) : null}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </ScrollReveal>

          <div className="sr-only">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <ScrollReveal animation="fade-up" className="mt-12 text-center md:mt-16">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              What We Make
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
