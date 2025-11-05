import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import FerplaitLogoCard from "./FerplaitLogoCard";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c0e]/95 border-b border-slate-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO + NOM */}
        <Link to="/" className="flex items-center gap-4 group">
          <FerplaitLogoCard />
          <span
            className="
              text-white font-bold tracking-tight text-2xl
              group-hover:text-[#ff8c3f] transition-colors duration-300
            "
          >
            Ferplait64
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <NavLink
            to="/realisations"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-slate-200/80 hover:text-white transition-colors"
            }
          >
            Réalisations
          </NavLink>
          <NavLink
            to="/savoir-faire"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-slate-200/80 hover:text-white transition-colors"
            }
          >
            Savoir-faire
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-slate-200/80 hover:text-white transition-colors"
            }
          >
            Contact
          </NavLink>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://www.facebook.com/profile.php?id=100054695803216"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#3b5998]/90 transition-all duration-300"
              aria-label="Facebook Ferplait64"
            >
              <FaFacebookF
                className="text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#3b5998] transition-transform duration-300"
                size={18}
              />
            </a>
            <a
              href="https://www.instagram.com/ferplait64/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E4405F]/90 transition-all duration-300"
              aria-label="Instagram Ferplait64"
            >
              <FaInstagram
                className="text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#E4405F] transition-transform duration-300"
                size={18}
              />
            </a>
          </div>
        </nav>

        {/* BOUTON MENU MOBILE */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MENU MOBILE ANIMÉ */}
      <div
        className={`
          md:hidden bg-[#0b0c0e]/95 border-t border-slate-800
          overflow-hidden origin-top transform transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-slate-200">
          <NavLink
            to="/realisations"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-[#ff8c3f]"
            }
          >
            Réalisations
          </NavLink>
          <NavLink
            to="/savoir-faire"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-[#ff8c3f]"
            }
          >
            Savoir-faire
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-[#ff8c3f]"
            }
          >
            Contact
          </NavLink>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100054695803216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-[#3b5998] transition-colors"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.instagram.com/ferplait64/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
