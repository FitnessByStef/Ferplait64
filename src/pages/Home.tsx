import Carousel from "../components/Carousel";

const BANNERS = [
  "/banners/1-ChaqueJourneeCommenceIci.png",
  "/banners/2-LesIdeesDeviennentDesPlans.png",
  "/banners/3-LesPlansDeviennentDesProjets.png",
  "/banners/4-LArtDuMetalJourApresJour.png",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050506]">
      <section
        className="
          relative overflow-hidden py-16 md:py-20
          bg-gradient-to-b from-[#0a0a0b] via-[#121317] to-[#0a0a0c]
        "
      >
        {/* Effet métal texturé */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/assets/MetalDesign1.png')] bg-cover bg-center opacity-[0.03]" />

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
              >
                <span className="h-[1px] w-5 bg-accent/70" />
                Atelier métal · Béarn
              </span>
            </div>

            <div className="border-l-0 lg:border-l-4 border-accent/70 lg:pl-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Pièces uniques en{" "}
                <span className="text-accent">acier découpé</span>
              </h1>

              <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto lg:mx-0">
                Enseignes, signalétique, décor mural, plaques personnalisées.
                <br className="hidden sm:block" />
                <span className="text-white/60">
                  Fabrication artisanale dans le Béarn, du croquis à la pose.
                </span>
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-medium text-sm md:text-[0.95rem]
                    bg-accent text-bg
                    shadow-[0_0_15px_rgba(255,255,255,0.15)]
                    hover:brightness-110 hover:-translate-y-[1px]
                    transition-all duration-200
                    w-full sm:w-auto
                  "
                >
                  Demander un devis
                </a>
                <a
                  href="/realisations"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-medium text-sm md:text-[0.95rem]
                    border border-white/20
                    text-white bg-white/5
                    hover:bg-white/10 hover:border-accent/70
                    transition-all duration-200
                    w-full sm:w-auto
                  "
                >
                  Voir les réalisations
                </a>
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
            >
              <Carousel
                images={BANNERS}
                height="h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]"
              />
            </div>

            {/* Halo de lumière */}
            <div className="pointer-events-none absolute -inset-10 bg-gradient-radial from-accent/18 via-transparent to-transparent rounded-full blur-3xl opacity-80" />
          </div>
        </div>
      </section>
    </main>
  );
}
