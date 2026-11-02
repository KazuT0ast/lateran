interface AlbumCardProps {
  title: string;
  artists: string[];
  year?: number | null;
  genres?: string[];
}

export default function AlbumCard({ title, artists, year, genres }: AlbumCardProps) {
  const displayArtists = artists.length > 0 ? artists.join(" · ") : "Unknown Artist";

  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md">
      <div className="flex flex-col">
        <p className="font-medium leading-snug line-clamp-2">{title}</p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">{displayArtists}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
          {year && <span>{year}</span>}
          {year && genres && genres.length > 0 && <span>·</span>}
          {genres && genres.length > 0 && (
            <span className="line-clamp-1">{genres.join(", ")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
