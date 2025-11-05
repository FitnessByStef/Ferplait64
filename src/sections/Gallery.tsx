type Props = { files: string[] };

export default function Gallery({ files }: Props) {
  const items = files.filter(Boolean);
  return (
    <section id="galerie" className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-xl font-semibold mb-4">Réalisations</h3>
      {items.length === 0 ? (
        <p className="text-mute">Ajoute tes images dans <code>public/assets/</code>.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((name) => (
            <figure
              key={name}
              className="rounded-xl overflow-hidden border border-line bg-card shadow-soft"
            >
              <img
                src={`/assets/${name}`}
                alt={name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs text-mute px-3 py-2 truncate">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
