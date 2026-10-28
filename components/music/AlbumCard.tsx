interface AlbumCardProps {
  title: string;
  artist: string;
  year?: number | null;
  genres?: string[];
  imageTag: string;
}

export default function AlbumCard({ title, artist, year, genres, imageTag }: AlbumCardProps) {
  const imageSrc = `/api/music/covers/${imageTag}`;

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <img
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <p className="font-medium truncate">{title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{artist}</p>
        <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
          {year && <span>{year}</span>}
          {year && genres && genres.length > 0 && <span>·</span>}
          {genres && genres.length > 0 && (
            <span className="truncate">{genres.join(", ")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
