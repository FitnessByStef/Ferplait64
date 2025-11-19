import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const progressionImages = [
  {
    src: "/assets/SavoirFaire1.jpg",
    title: "La matière arrive",
    text: "Profilés, plaques, acier brut. Le point de départ.",
  },
  {
    src: "/assets/SavoirFaire2.jpg",
    title: "Découpe de précision",
    text: "On prépare chaque élément, au millimètre.",
  },
  {
    src: "/assets/SavoirFaire3.jpg",
    title: "Assemblage & soudures",
    text: "La structure commence à ressembler à un meuble.",
  },
  {
    src: "/assets/SavoirFaire4.jpg",
    title: "La forme est là",
    text: "On voit la console, même sans finitions.",
  },
  {
    src: "/assets/SavoirFaire5.jpg",
    title: "Finitions métal",
    text: "On meule, on adoucit, on nettoie. C’est plus artisanal qu’industriel.",
  },
  {
    src: "/assets/SavoirFaire6.jpg",
    title: "Le bois rejoint l’acier",
    text: "C’est là que ça commence à devenir beau.",
  },
  {
    src: "/assets/SavoirFaire7.jpg",
    title: "Fixations & détails",
    text: "On prépare pour que ça ne bouge pas dans le temps.",
  },
  {
    src: "/assets/SavoirFaire8.jpg",
    title: "Peinture / protection",
    text: "On habille la pièce, on lui donne son style.",
  },
  {
    src: "/assets/SavoirFaire9.jpg",
    title: "Pose du tiroir",
    text: "Ajustements, quincaillerie, c’est là qu’on voit le sérieux.",
  },
  {
    src: "/assets/SavoirFaire10.jpg",
    title: "Pièce terminée ✨",
    text: "Console métal/bois prête à partir chez le client.",
  },
];

export default function SavoirFaire() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Fabrication d'une console métal/bois sur mesure",
    description:
      "Étapes de fabrication d'une pièce métal/bois dans l’atelier Ferplait64, de la matière brute à la console terminée.",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Profilés acier, plaques métal, bois",
      },
    ],
    tool: [
      { "@type": "HowToTool", name: "Poste à souder" },
      { "@type": "HowToTool", name: "Meuleuse" },
      { "@type": "HowToTool", name: "Matériel de peinture/protection" },
    ],
    step: progressionImages.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
      image: `https://ferplait64.fr${step.src}`,
    })),
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Savoir-faire Ferplait64",
    description:
      "Découvrez le savoir-faire de l’atelier Ferplait64 : travail du métal et du bois, fabrication artisanale de consoles, meubles sur mesure, enseignes et pièces uniques.",
    url: "https://ferplait64.fr/savoir-faire",
  };

  return (
    <>
      <Helmet>
        {/* SEO principal */}
        <title>
          Savoir-faire · Ferplait64 | Atelier métal & bois sur mesure
        </title>
        <meta
          name="description"
          content="Ferplait64 fabrique à la main des meubles et pièces métalliques sur mesure : consoles, meubles TV, enseignes et projets pros. Découvrez le savoir-faire atelier, du métal brut à la pièce finie."
        />
        <link rel="canonical" href="https://ferplait64.fr/savoir-faire" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Savoir-faire Ferplait64 · Atelier métal & bois"
        />
        <meta
          property="og:description"
          content="Du profilé brut à la console terminée : découvrez les étapes de fabrication dans l’atelier Ferplait64."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ferplait64.fr/savoir-faire"
        />
        <meta
          property="og:image"
          content="https://ferplait64.fr/assets/SavoirFaire10.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Savoir-faire Ferplait64 | Métal & bois sur mesure"
        />
        <meta
          name="twitter:description"
          content="Consoles, meubles, enseignes et pièces uniques fabriqués à la main dans notre atelier métal & bois."
        />

        {/* JSON-LD WebPage + HowTo */}
        <script type="application/ld+json">
          {JSON.stringify(pageJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToJsonLd)}
        </script>
      </Helmet>

      <main
        className="min-h-screen bg-[#050607] text-white"
        aria-labelledby="savoir-faire-title"
      >
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.12),transparent_55%)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="uppercase tracking-[0.35em] text-xs text-white/40 mb-3">
                Atelier métal & bois
              </p>
              <h1
                id="savoir-faire-title"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 leading-tight"
              >
                On ne vend pas du métal.
                <br />
                On fabrique des pièces qui ont une histoire.
              </h1>
              <p className="text-white/65 text-sm md:text-lg leading-relaxed max-w-xl">
                Vous nous montrez une photo Pinterest, un croquis, un besoin.
                Nous, on le rend réel. À la main. Dans notre atelier. Avec du
                vrai acier.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Badge>Consoles sur-mesure</Badge>
                <Badge>Découpe & enseignes</Badge>
                <Badge>Pièces uniques</Badge>
              </div>
            </div>

            {/* Pièce finie */}
            <div className="flex-1 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
              <div className="aspect-[4/3] bg-black/30 rounded-xl flex items-center justify-center">
                <img
                  src="/assets/SavoirFaire10.jpg"
                  alt="Console métal/bois terminée réalisée dans l’atelier Ferplait64"
                  className="max-h-full max-w-full object-contain rounded-md"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-white/40 mt-3">
                Console métal/bois réalisée à partir d’un projet client.
              </p>
            </div>
          </div>
        </section>

        {/* CARROUSEL PROCESS */}
        <section className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Comment on fabrique vos pièces
          </h2>
          <p className="text-center text-white/50 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Faites défiler les étapes de fabrication. Ce sont vos vraies images
            d’atelier, pas des photos de banque d’image.
          </p>
          <CarouselSavoirFaire items={progressionImages} />
        </section>

        {/* OFFRES */}
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            Ce qu’on peut faire pour vous
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <OfferCard
              title="Meuble sur-mesure"
              text="Console, meuble TV, banc, desserte. Adapté à VOTRE mur, pas l’inverse."
            />
            <OfferCard
              title="Projet pro"
              text="Enseignes découpées, plaques, signalétique, supports métal robustes."
            />
            <OfferCard
              title="Pièce unique"
              text="Vous avez vu un truc sur Insta ? On le refait à votre sauce."
            />
          </div>
        </section>

        <footer className="py-8 text-center text-white/35 text-xs md:text-sm">
          Atelier Ferplait64 — fabrication locale, métal & bois.
        </footer>
      </main>
    </>
  );
}

function CarouselSavoirFaire({
  items,
}: {
  items: { src: string; title: string; text: string }[];
}) {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[index];

  return (
    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6">
      {/* image + texte */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <div className="bg-black/30 rounded-xl flex items-center justify-center aspect-[4/3]">
            <img
              src={current.src}
              alt={current.title}
              className="max-h-full max-w-full object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <p className="text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-white/35 mb-2">
            Étape {index + 1} / {items.length}
          </p>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {current.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {current.text}
          </p>
          <p className="text-white/25 text-[0.7rem]">
            Fabriqué à l’atelier, pas en sous-traitance.
          </p>
        </div>
      </div>

      {/* boutons prev/next */}
      <button
        onClick={goPrev}
        className="
          absolute left-3 sm:left-4 top-1/2 -translate-y-1/2
          h-9 w-9 sm:h-10 sm:w-10 rounded-full
          bg-black/40 border border-white/10
          flex items-center justify-center
          hover:bg-black/70 hover:scale-105
          transition
        "
        aria-label="Précédent"
        type="button"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="
          absolute right-3 sm:right-4 top-1/2 -translate-y-1/2
          h-9 w-9 sm:h-10 sm:w-10 rounded-full
          bg-black/40 border border-white/10
          flex items-center justify-center
          hover:bg-black/70 hover:scale-105
          transition
        "
        aria-label="Suivant"
        type="button"
      >
        ›
      </button>

      {/* dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2.5 rounded-full transition-all
              ${i === index ? "w-6 bg-pink-400" : "w-2.5 bg-white/20"}
            `}
            aria-label={`Aller à l’étape ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm">
      {children}
    </span>
  );
}

function OfferCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="
        rounded-xl border border-white/8
        bg-white/5 backdrop-blur-sm
        p-5 md:p-6
        hover:border-pink-400/80 hover:bg-pink-400/5
        transition
      "
    >
      <h3 className="text-white font-medium mb-2 text-sm md:text-base">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
