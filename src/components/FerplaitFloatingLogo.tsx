// src/components/FerplaitFloatingLogo.tsx
import FerplaitLogoCard from "./FerplaitLogoCard";

export default function FerplaitFloatingLogo() {
  return (
    <div
      className="
        fixed
        top-16          /* juste sous le header */
        right-10        /* pas collé au bord */
        z-50
        hidden md:block /* pas sur mobile */
      "
      style={{
        transform: "rotate(-3deg)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(-3deg) scale(1)")}
    >
      <FerplaitLogoCard />
    </div>
  );
}
