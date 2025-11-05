// src/components/FerplaitLogoCard.tsx
export default function FerplaitLogoCard() {
  return (
    <div
      className="
        relative
        w-14 h-14 md:w-16 md:h-16
        rounded-2xl
        bg-gradient-to-b from-[#1d1e22] to-[#090a0b]
        border border-[#2a2a2a]
        shadow-[0_6px_25px_rgba(0,0,0,0.55)]
        flex items-center justify-center
        transition-all duration-400 ease-out
        group-hover:rotate-[-3deg] group-hover:scale-[1.08]
      "
    >
      <img
        src="assets/Logo.png"
        alt="Ferplait"
        className="w-[88%] drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)] pointer-events-none select-none"
      />

      {/* --- Halo orangé "métal chaud" animé --- */}
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none
          animate-[haloPulse_8s_ease-in-out_infinite]
          bg-[radial-gradient(circle_at_center,rgba(255,140,63,0.20)_0%,transparent_70%)]
        "
      />

      {/* halo un peu plus fort au survol */}
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none
          opacity-0 group-hover:opacity-100
          bg-[radial-gradient(circle_at_center,rgba(255,140,63,0.35)_0%,transparent_70%)]
          transition-opacity duration-700
        "
      />
    </div>
  );
}
