import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";

const SITE_URL = "https://ferplait64.fr";
const BRAND = "FerPlait64";
const PHONE = "+33 6 47 80 84 33"; 
const ADDRESS = {
  street: "Chemin du Stade",
  locality: "Thèze",
  postalCode: "64450",
  region: "Nouvelle-Aquitaine",
  country: "FR",
};

const BANNERS = [
  "/banners/1-ChaqueJourneeCommenceIci.png",
  "/banners/2-LesIdeesDeviennentDesPlans.png",
  "/banners/3-LesPlansDeviennentDesProjets.png",
  "/banners/4-LArtDuMetalJourApresJour.png",
];

const BANNER_ALTS = [
  "Atelier métallique artisanal – créations sur mesure en acier découpé",
  "Les idées deviennent des plans – conception d’enseignes et décor mural",
  "Des plans aux projets – signalétique et plaques personnalisées dans le 64",
  "L’art du métal jour après jour – découpe plasma haute précision au Béarn",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#company`,
  name: BRAND,
  image: `${SITE_URL}/assets/Logo-FerPlait64.png`,
  url: SITE_URL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    postalCode: ADDRESS.postalCode,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  areaServed: ["Pau", "Béarn", "Orthez", "Pyrénées-Atlantiques", "64"],
  priceRange: "€€",
  sameAs: [
     "https://www.instagram.com/ferplait64",
     "https://www.facebook.com/profile.php?id=100054695803216"
  ],
  description:
    "Atelier métal artisanal dans le Béarn (Pau, 64) : enseignes, signalétique, décor mural, plaques personnalisées et mobilier industriel. Conception sur mesure, découpe plasma haute précision.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  department: [
    { "@type": "Service", name: "Découpe plasma" },
    { "@type": "Service", name: "Enseignes & signalétique" },
    { "@type": "Service", name: "Décor mural acier" },
    { "@type": "Service", name: "Plaques personnalisées" },
    { "@type": "Service", name: "Mobilier industriel" },
  ],
};

export default function Home() {
  const title =
    "Atelier métal Béarn (Pau, 64) – Enseignes, Décor, Plaques sur mesure | FerPlait64";
  const description =
    "FerPlait64 : atelier métal artisanal dans le Béarn (Pau, 64). Enseignes, signalétique, décor mural, plaques personnalisées et mobilier industriel. Conception • Découpe plasma • Finitions.";

  return (
    <main className="min-h-screen bg-[#050506]">
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={BRAND} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/og-cover.jpg`}
        />
        <meta
          property="og:image:alt"
          content="Créations métal sur mesure FerPlait64 – enseignes, décor, plaques"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/assets/og-cover.jpg`} />

        {/* Perf : précharger la première image du carrousel (LCP) */}
        <link rel="preload" as="image" href={BANNERS[0]} />

        {/* JSON-LD LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section
        className="
          relative overflow-hidden py-16 md:py-20
          bg-gradient-to-b from-[#0a0a0b] via-[#121317] to-[#0a0a0c]
        "
        aria-labelledby="section-hero"
      >
        {/* Effet métal texturé */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.06),transparent_50%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[url('/assets/MetalDesign1.png')] bg-cover bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div
          className="
            relative max-w-6xl mx-auto px-4
            grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]
            gap-12 md:gap-14 lg:gap-16
            items-center
          "
        >
          {/* Texte à gauche */}
          <div className="relative z-10 text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/10
                  bg-white/5 px-4 py-1
                  text-[0.7rem] sm:text-xs md:text-sm
                  uppercase tracking-[0.2em]
                  text-slate-200/80
                "
                aria-label="Atelier métal dans le Béarn"
              >
                <span className="h-[1px] w-5 bg-accent/70" />
                Atelier métal · Béarn
              </span>
            </div>

            <div className="border-l-0 lg:border-l-4 border-accent/70 lg:pl-5">
              <h1
                id="section-hero"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
              >
                Pièces uniques en{" "}
                <span className="text-accent">acier découpé</span> – Pau & Béarn
                (64)
              </h1>

              <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto lg:mx-0">
                Enseignes, signalétique, décor mural, plaques personnalisées et
                mobilier industriel.
                <br className="hidden sm:block" />
                <span className="text-white/60">
                  Fabrication artisanale dans le Béarn – du croquis à la pose.
                  Découpe plasma haute précision.
                </span>
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-medium text-sm md:text-[0.95rem]
                    bg-accent text-bg
                    shadow-[0_0_15px_rgba(255,255,255,0.15)]
                    hover:brightness-110 hover:-translate-y-[1px]
                    transition-all duration-200
                    w-full sm:w-auto
                  "
                  aria-label="Demander un devis personnalisé"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/realisations"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-medium text-sm md:text-[0.95rem]
                    border border-white/20
                    text-white bg-white/5
                    hover:bg-white/10 hover:border-accent/70
                    transition-all duration-200
                    w-full sm:w-auto
                  "
                  aria-label="Voir nos réalisations en métal"
                >
                  Voir les réalisations
                </Link>
              </div>

              {/* Ligne de confiance */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-6 text-[0.75rem] sm:text-xs text-white/55 items-center justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <span className="h-[1px] w-6 bg-accent/70" />
                  Découpe plasma haute précision
                </span>
                <span>Pièces uniques ou petites séries</span>
              </div>
            </div>

            {/* Maillage interne SEO (discret) */}
            <nav aria-label="Liens utiles" className="text-xs text-white/60">
              <ul className="flex flex-wrap gap-3">
                <li>
                  <Link
                    to="/savoir-faire"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Découpe plasma & finitions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/realisations"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Enseignes & signalétique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/realisations"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Plaques personnalisées 64
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Carrousel à droite */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative w-full
                max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
                rounded-[2.4rem]
                shadow-[0_0_60px_rgba(255,255,255,0.08)]
                ring-1 ring-white/10
                backdrop-blur-sm
              "
              role="region"
              aria-label="Galerie – créations métal"
            >
              <Carousel
                images={BANNERS}
                alts={BANNER_ALTS}
                height="h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]"
                autoPlay
                showArrows
              />
              {/* Fallback accessibilité si jamais alts/images évoluent */}
              <p className="sr-only">
                Galerie d’images présentant nos enseignes, décor mural et
                plaques personnalisées en acier.
              </p>
            </div>

            {/* Halo de lumière */}
            <div
              className="pointer-events-none absolute -inset-10 bg-gradient-radial from-accent/18 via-transparent to-transparent rounded-full blur-3xl opacity-80"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Bloc descriptif SEO (H2 + texte) */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 text-white/85">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Atelier métal dans le Béarn – Pau, Orthez & Pyrénées-Atlantiques
            (64)
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            {BRAND} conçoit et fabrique des pièces en acier découpé sur mesure :{" "}
            <strong>enseignes</strong>, <strong>signalétique</strong>,{" "}
            <strong>décor mural</strong>,{" "}
            <strong>plaques personnalisées</strong> et{" "}
            <strong>mobilier industriel</strong>. Basés dans le{" "}
            <strong>Béarn</strong> (proche de <strong>Pau</strong>), nous
            accompagnons particuliers, commerces et entreprises du{" "}
            <strong>64</strong> : conception, découpe plasma, finitions et
            pose.
          </p>
        </div>
      </section>

      {/* Bandeau NAP (Local SEO) */}
      <footer className="pb-12">
        <div className="max-w-6xl mx-auto px-4 text-xs text-white/60">
          <address className="not-italic">
            <strong className="text-white">{BRAND}</strong> – {ADDRESS.street},{" "}
            {ADDRESS.postalCode} {ADDRESS.locality} – {ADDRESS.region},{" "}
            {ADDRESS.country} •{" "}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="underline underline-offset-2 hover:text-white"
            >
              {PHONE}
            </a>
          </address>
        </div>
      </footer>
    </main>
  );
}
