import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    if (!formRef.current) {
      setLoading(false);
      return;
    }

    const formData = new FormData(formRef.current);
    const from_name = formData.get("from_name") as string;
    const from_email = formData.get("from_email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const file = fileRef.current?.files?.[0];
    const attachmentName = file ? file.name : "Aucun fichier joint";

    emailjs
      .send(
        "service_k4zbbo9", // Service ID
        "template_pk1hydl", // Template ID
        {
          from_name,
          from_email,
          phone,
          message,
          attachment_name: attachmentName, // variable utilisée dans ton template EmailJS
        },
        "gJWMor4mNkpxe8-y_" // Public Key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current?.reset();
        if (fileRef.current) fileRef.current.value = "";
        setFileName(null);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Une erreur est survenue lors de l’envoi. Merci de réessayer dans quelques instants."
        );
        setLoading(false);
      });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName(null);
      return;
    }

    // On ne l'envoie pas mais on affiche un petit rappel sur la limite technique
    setFileName(file.name);
  };

  return (
    <main className="min-h-[80vh] bg-gradient-to-b from-[#090a0d] via-[#0f1116] to-[#08090b] py-12 px-4 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
        {/* Bloc texte / info */}
        <section className="space-y-5 md:space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Contact · Ferplait64
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Parlez-nous de votre projet.
          </h1>
          <p className="text-sm sm:text-base text-white/65 max-w-md">
            Console, enseigne, déco murale, plaque pour atelier…  
            Donnez-nous quelques infos, on revient vers vous avec un{" "}
            <span className="text-white">visuel + un tarif personnalisé</span>.
          </p>

          <div className="mt-4 space-y-3 text-sm text-white/55">
            <p className="font-medium text-white/70">
              Pour aller plus vite, indiquez :
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Le type de pièce (meuble, enseigne, plaque, etc.)</li>
              <li>Les dimensions approximatives</li>
              <li>Si vous avez un logo ou une photo d’inspiration</li>
            </ul>
          </div>

          <div className="mt-4 text-xs sm:text-sm text-white/40 border-l border-white/15 pl-4">
            <p>
              📎 Les fichiers ne sont pas envoyés directement (limite technique
              de 50&nbsp;Ko sur les pièces jointes).
            </p>
            <p>
              Mentionnez simplement que vous avez un logo ou une image : nous
              vous proposerons un moyen de nous le transmettre (mail de réponse,
              lien, etc.).
            </p>
          </div>
        </section>

        {/* Formulaire */}
        <section>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="
              w-full
              bg-[#121317]/95
              p-6 sm:p-7
              rounded-2xl
              shadow-[0_14px_40px_rgba(0,0,0,0.6)]
              border border-slate-800/80
              flex flex-col gap-4
            "
          >
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="from_name"
                required
                placeholder="Nom complet"
                className="
                  bg-[#0f1014] border border-slate-700/80
                  rounded-lg px-4 py-2.5 text-sm
                  text-white placeholder-white/35
                  focus:border-accent focus:outline-none
                  transition
                "
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Adresse e-mail"
                className="
                  bg-[#0f1014] border border-slate-700/80
                  rounded-lg px-4 py-2.5 text-sm
                  text-white placeholder-white/35
                  focus:border-accent focus:outline-none
                  transition
                "
              />

              <input
                type="tel"
                name="phone"
                placeholder="Téléphone (facultatif)"
                className="
                  bg-[#0f1014] border border-slate-700/80
                  rounded-lg px-4 py-2.5 text-sm
                  text-white placeholder-white/35
                  focus:border-accent focus:outline-none
                  transition
                "
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Décrivez votre projet (type de pièce, dimensions, style, finitions souhaitées...)"
              className="
                bg-[#0f1014] border border-slate-700/80
                rounded-lg px-4 py-2.5 text-sm
                text-white placeholder-white/35
                focus:border-accent focus:outline-none
                transition
                resize-y
              "
            ></textarea>

            {/* Pièce jointe (info seulement côté EmailJS) */}
            <div className="space-y-1">
              <label className="text-white/80 text-sm flex flex-col gap-1">
                <span>Ajouter un fichier (logo, croquis, photo) :</span>
                <input
                  ref={fileRef}
                  type="file"
                  name="attachment_local"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-xs text-white/70 file:text-xs file:px-3 file:py-1.5 file:mr-3 file:border-0 file:rounded-md file:bg-white/10 file:text-white hover:file:bg-white/15 cursor-pointer"
                />
              </label>
              <p className="text-[0.7rem] text-white/40">
                Limite technique EmailJS&nbsp;: 50&nbsp;Ko. Le fichier n’est pas
                joint directement au mail, mais son nom est transmis pour que
                nous vous recontactions à ce sujet.
              </p>
              {fileName && (
                <p className="text-[0.75rem] text-white/55 mt-1">
                  Fichier sélectionné :{" "}
                  <span className="text-white">{fileName}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                mt-2 px-6 py-3 rounded-xl
                bg-accent text-bg font-medium text-sm
                hover:brightness-110 hover:-translate-y-[1px]
                transition
                disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed
              "
            >
              {loading ? "Envoi en cours..." : "Envoyer la demande"}
            </button>

            {/* Messages de retour */}
            {sent && (
              <div className="mt-3 text-xs sm:text-sm text-green-400 bg-green-400/10 border border-green-500/60 rounded-lg px-3 py-2 text-center">
                ✅ Message envoyé avec succès.  
                Vous recevrez une réponse avec visuel et tarif personnalisé.
              </div>
            )}
            {error && (
              <div className="mt-3 text-xs sm:text-sm text-red-400 bg-red-500/10 border border-red-500/60 rounded-lg px-3 py-2 text-center">
                {error}
              </div>
            )}
          </form>

          <p className="text-white/30 text-[0.7rem] sm:text-xs mt-4 text-center">
            Temps de réponse en général : sous 24&nbsp;h (hors week-end).
          </p>
        </section>
      </div>
    </main>
  );
}
