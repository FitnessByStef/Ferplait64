import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
import SavoirFaire from "./pages/SavoirFaire";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/savoir-faire" element={<SavoirFaire />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
