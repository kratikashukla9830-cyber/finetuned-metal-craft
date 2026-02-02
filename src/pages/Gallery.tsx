import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Lightbox, GalleryImage } from "@/components/gallery/Lightbox";
import { cn } from "@/lib/utils";

// Gallery project data
const projects = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Modern stainless steel staircase railing",
    title: "Contemporary Staircase Railing",
    category: "Railings",
    location: "Bhopal",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Elegant balcony railing design",
    title: "Balcony Railing - Geometric Pattern",
    category: "Railings",
    location: "Jabalpur",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Brass name plate for residence",
    title: "Premium Brass Name Plate",
    category: "Name Plates",
    location: "Satna",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Metal elevation cladding on building",
    title: "Building Facade - Laser Cut Panels",
    category: "Elevation",
    location: "Indore",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    alt: "Custom gate design",
    title: "Ornate Entry Gate",
    category: "Gates",
    location: "Rewa",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Corporate name plate signage",
    title: "Corporate Office Signage",
    category: "Name Plates",
    location: "Delhi",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    alt: "Terrace railing with modern design",
    title: "Terrace Railing - Minimalist",
    category: "Railings",
    location: "Mumbai",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Window grill with intricate pattern",
    title: "Decorative Window Grill",
    category: "Grills",
    location: "Pune",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Metal art installation",
    title: "Custom Laser Cut Art",
    category: "Custom",
    location: "Bangalore",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    alt: "Staircase railing traditional design",
    title: "Traditional Staircase Railing",
    category: "Railings",
    location: "Gwalior",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Shop signage metal board",
    title: "Retail Shop Signage",
    category: "Name Plates",
    location: "Hyderabad",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    alt: "Main entrance gate",
    title: "Villa Main Gate",
    category: "Gates",
    location: "Chennai",
  },
];

const categories = ["All", "Railings", "Name Plates", "Gates", "Grills", "Elevation", "Custom"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredProjects.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 gradient-hero overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(38_70%_50%_/_0.1)] rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[hsl(38_70%_50%)] uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(40_20%_98%)] mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-[hsl(40_20%_98%_/_0.8)]">
              Explore our completed projects across India. Each piece showcases 
              our commitment to precision and premium finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-[hsl(38_70%_50%)] text-[hsl(240_15%_13%)] shadow-[0_4px_20px_-4px_hsl(38_70%_50%_/_0.3)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <>
              <p className="text-center text-muted-foreground mb-8">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProjects.map((project, index) => (
                  <GalleryImage
                    key={project.id}
                    src={project.src}
                    alt={project.alt}
                    title={project.title}
                    category={`${project.category} • ${project.location}`}
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[hsl(40_30%_95%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Cities Served" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-[hsl(38_70%_50%)]">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something beautiful together. Get a free quote and 
              see your vision come to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-base font-semibold bg-[hsl(38_70%_50%)] text-[hsl(240_15%_13%)] hover:bg-[hsl(36_75%_40%)] shadow-[0_4px_20px_-4px_hsl(38_70%_50%_/_0.3)] transition-all duration-300"
              >
                Get Free Quote
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-base font-semibold border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredProjects.map((p) => ({
          src: p.src,
          alt: p.alt,
          title: p.title,
          category: `${p.category} • ${p.location}`,
        }))}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </Layout>
  );
}
