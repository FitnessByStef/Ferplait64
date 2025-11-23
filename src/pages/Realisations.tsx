import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

type FileItem = {
  src: string;
  title: string;
};

const FILES: FileItem[] = [
  { src: "/assets/ConsoleEntree.png", title: "Console d’entrée sur mesure" },
  { src: "/assets/CreationLit.jpg", title: "Structure de lit industriel" },
  { src: "/assets/CreationEtagere.jpg", title: "Étagère murale design" },
  { src: "/assets/CreationMeuble.jpg", title: "Meuble TV acier & bois" },
  {
    src: "/assets/CreationMeubleChaussure.jpg",
    title: "Meuble à chaussures minimaliste",
  },
  { src: "/assets/SupportEtagere.png", title: "Supports d’étagère décoratifs" },
  { src: "/assets/ThomasCreation.png", title: "Création personnalisée Thomas" },
  { src: "/assets/PortailMetal.jpg", title: "Portail et portillon métal" },
  { src: "/assets/PostInstaDevis.png", title: "Plaque déco atelier" },
];

export default function Realisations() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // JSON-LD pour la page de réalisations (galerie)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Réalisations Ferplait64",
    description:
      "Découvrez les réalisations Ferplait64 : console d’entrée sur mesure, meubles TV en acier et bois, portails, enseignes et décorations murales en métal fabriquées dans notre atelier.",
    url: "https://ferplait64.fr/realisations",
    hasPart: FILES.map((file) => ({
      "@type": "ImageObject",
      name: file.title,
      contentUrl: `https://ferplait64.fr${file.src}`,
    })),
  };

  // Gestion clavier pour la lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i !== null ? (i + 1) % FILES.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i !== null ? (i - 1 + FILES.length) % FILES.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <>
      <Helmet>
        {/* SEO principal */}
        <title>
          Réalisations · Ferplait64 | Meubles métal, portails & créations sur
          mesure
        </title>
        <meta
          name="description"
          content="Un aperçu des réalisations Ferplait64 : consoles d’entrée, meubles TV acier & bois, étagères murales, portails et plaques déco en métal. Fabrication artisanale sur mesure dans notre atelier."
        />
        <link rel="canonical" href="https://ferplait64.fr/realisations" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Réalisations Ferplait64 · Créations métalliques sur mesure"
        />
        <meta
          property="og:description"
          content="Découvrez quelques exemples de meubles, portails et décorations en métal réalisés par Ferplait64 dans son atelier."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ferplait64.fr/realisations"
        />
        {/* À adapter si tu as une image OG dédiée */}
        <meta
          property="og:image"
          content="https://ferplait64.fr/assets/ConsoleEntree.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Réalisations Ferplait64 | Atelier métal sur mesure"
        />
        <meta
          name="twitter:description"
          content="Meubles, portails, enseignes et déco en métal fabriqués sur mesure dans notre atelier."
        />

        {/* JSON-LD CollectionPage */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main
        className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0a0a0b] via-[#121317] to-[#0a0a0c]
        py-16 md:py-20
      "
        aria-labelledby="realisations-title"
      >
        {/* texture métal */}
        <div className="absolute inset-0 bg-[url('/assets/MetalDesign2.png')] bg-cover bg-center opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Header de page */}
          <header className="mb-10 md:mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
              Ferplait64 · Atelier métal
            </p>
            <h1
              id="realisations-title"
              className="text-3xl md:text-4xl font-semibold text-white tracking-wide mb-4"
            >
              Nos réalisations en métal sur mesure
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl mx-auto">
              Du mobilier sur mesure aux portails en acier, chaque pièce est
              pensée avec soin, découpée et assemblée dans notre atelier pour
              durer dans le temps.
            </p>
          </header>

          {/* === Galerie === */}
          <section
            className="
            grid gap-5 md:gap-7
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
            aria-label="Galerie des réalisations Ferplait64"
          >
            {FILES.map((file, index) => (
              <article
                key={file.src}
                onClick={() => setLightboxIndex(index)}
                className="
                group relative cursor-pointer
                rounded-2xl
                bg-gradient-to-b from-white/[0.05] to-white/[0.015]
                border border-white/6
                shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:border-accent/50
              "
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#050506] flex items-center justify-center">
                  <img
                    src={file.src}
                    alt={file.title}
                    className="
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.06]
                  "
                    loading="lazy"
                  />

                  {/* Overlay au survol */}
                  <div
                    className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t from-black/70 via-black/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-400
                  "
                  />
                </div>

                {/* Titre sous la vignette */}
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {file.title}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40 group-hover:text-accent/80 transition-colors">
                    Voir
                  </span>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* === Lightbox === */}
        {lightboxIndex !== null && (
          <div
            className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/90 backdrop-blur-sm
          "
            onClick={() => setLightboxIndex(null)}
          >
            <img
              src={FILES[lightboxIndex].src}
              alt={FILES[lightboxIndex].title}
              className="
              max-h-[80vh] max-w-[90vw]
              object-contain
              rounded-2xl
              shadow-[0_0_40px_rgba(0,0,0,0.7)]
            "
            />

            {/* flèches */}
            {FILES.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) =>
                      i !== null ? (i - 1 + FILES.length) % FILES.length : 0
                    );
                  }}
                  className="
                  hidden sm:flex
                  absolute left-6 md:left-10
                  h-11 w-11 items-center justify-center
                  rounded-full border border-white/25
                  bg-black/40 hover:bg-black/70
                  text-white text-3xl
                  opacity-80 hover:opacity-100
                  transition-all
                  select-none
                "
                  aria-label="Image précédente"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) =>
                      i !== null ? (i + 1) % FILES.length : 0
                    );
                  }}
                  className="
                  hidden sm:flex
                  absolute right-6 md:right-10
                  h-11 w-11 items-center justify-center
                  rounded-full border border-white/25
                  bg-black/40 hover:bg-black/70
                  text-white text-3xl
                  opacity-80 hover:opacity-100
                  transition-all
                  select-none
                "
                  aria-label="Image suivante"
                >
                  ›
                </button>
              </>
            )}

            {/* Titre */}
            <div
              className="
              absolute bottom-6 left-1/2 -translate-x-1/2
              px-4 py-2 rounded-full
              bg-black/70 border border-white/15
              text-center text-[0.8rem] md:text-sm text-white/85 tracking-wide
              max-w-[90vw]
            "
            >
              {FILES[lightboxIndex].title}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
