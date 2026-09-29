import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const transformationStages = [
  {
    label: "Metal Sheet",
    detail: "Precision-cut canvas",
    image: null,
    alt: "A raw metal sheet ready for precision laser cutting",
  },
  {
    label: "Gate",
    detail: "Statement entrances",
    image: "/images/gates.jpeg",
    alt: "Laser-cut decorative metal gate",
  },
  {
    label: "Grill",
    detail: "Security with detail",
    image: "/images/product6.jpeg",
    alt: "Precision laser-cut architectural grill",
  },
  {
    label: "Elevation",
    detail: "Architectural facades",
    image: "/images/elevationcladding.jpeg",
    alt: "Laser-cut metal elevation and cladding panels",
  },
] as const;

function TransformationStage() {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % transformationStages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const stage = transformationStages[activeStage];

  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-label="Metal sheet transformation sequence">
      <div className="relative aspect-[5/4] overflow-hidden border border-primary-foreground/10 bg-primary shadow-elevated sm:aspect-[4/3]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--primary-foreground)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground)/0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute left-5 top-5 z-20 flex items-center gap-3 text-primary-foreground sm:left-7 sm:top-7">
          <span className="flex h-8 w-8 items-center justify-center border border-gold/60 text-xs font-semibold text-gold">
            0{activeStage + 1}
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-primary-foreground sm:text-base">{stage.label}</p>
            <p className="text-xs text-primary-foreground/60">{stage.detail}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {stage.image ? (
            <motion.div
              key={stage.label}
              initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(46% 46% 46% 46%)", scale: 0.92 }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, clipPath: "inset(0% 48% 0% 48%)", scale: 1.04 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img src={stage.image} alt={stage.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-primary/30" />
            </motion.div>
          ) : (
            <motion.div
              key={stage.label}
              initial={reduceMotion ? false : { opacity: 0, rotateY: -22, scale: 0.82 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, rotateY: 18, scale: 0.88 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-[18%] bottom-[15%] top-[25%] border border-primary-foreground/30 gradient-metallic shadow-elevated"
            >
              <motion.div
                animate={reduceMotion ? undefined : { x: ["-130%", "180%"] }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 skew-x-[-16deg] bg-primary-foreground/25 blur-md"
              />
              <div className="absolute inset-4 border border-primary/10 sm:inset-6" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-primary via-primary/90 to-transparent px-5 pb-5 pt-14 sm:px-7 sm:pb-7">
          <div className="mb-3 flex items-center gap-2" aria-hidden="true">
            {transformationStages.map((item, index) => (
              <div key={item.label} className="h-px flex-1 overflow-hidden bg-primary-foreground/20">
                <motion.div
                  className="h-full origin-left bg-gold"
                  animate={{ scaleX: index === activeStage ? 1 : index < activeStage ? 1 : 0 }}
                  transition={{ duration: index === activeStage && !reduceMotion ? 2.6 : 0.3, ease: "linear" }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-2">
            {transformationStages.map((item, index) => (
              <span
                key={item.label}
                className={`text-[10px] font-semibold uppercase sm:text-xs ${index === activeStage ? "text-gold" : "text-primary-foreground/45"}`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-gold/60 sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32" aria-hidden="true" />
    </div>
  );
}

export function ValueProposition() {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="text-center lg:text-left">
            <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Architectural Metal Solutions
            </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Bold, Beautiful Spaces Deserve Premium Metal Work
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                ASDE LaserCuttings creates design-forward metal railings, elevation panels, 
                name plates, and custom installations that elevate offices, hotels, restaurants, 
                and upscale homes. Whether you're looking for a single name plate or a large-scale 
                architectural facade, our team provides precision craftsmanship, superior finishing, 
                and unmatched dedication to quality.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/gallery#hero">
                  View Our Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={0.15}>
            <TransformationStage />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
