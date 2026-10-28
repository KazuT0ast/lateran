import albumsData from "@/content/music/albums.json";
import AlbumCard from "./AlbumCard";

type Album = {
  id: string;
  title: string;
  artist: string;
  artists: string[];
  year?: number | null;
  genres?: string[];
  image_tag: string;
};

type AlbumsByCategory = Record<string, Album[]>;

export default function MusicCatalog() {
  const data = albumsData as AlbumsByCategory;

  return (
    <section className="flex flex-col gap-10">
      {Object.entries(data).map(([category, albums]) => (
        <div key={category}>
          <h2 className="mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 text-lg font-medium text-zinc-700 dark:text-zinc-300">
            {category}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                year={album.year}
                genres={album.genres}
                imageTag={album.image_tag}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
