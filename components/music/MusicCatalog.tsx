"use client";

import { useMemo, useState } from "react";
import albumsData from "@/content/music/albums.json";
import AlbumCard from "./AlbumCard";
import MusicControls from "./MusicControls";
import type { SortKey } from "./MusicControls";

type Album = {
  id: string;
  title: string;
  artist: string;
  artists: string[];
  year?: number | null;
  genres?: string[];
  image_tag: string;
};

function sortAlbums(albums: Album[], sort: SortKey) {
  const clone = [...albums];
  const cmp = (a: Album, b: Album) => {
    switch (sort) {
      case "artist-asc":
        return (a.artist ?? "").localeCompare(b.artist ?? "");
      case "artist-desc":
        return (b.artist ?? "").localeCompare(a.artist ?? "");
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "year-desc":
        return (b.year ?? 0) - (a.year ?? 0);
      case "year-asc":
        return (a.year ?? 0) - (b.year ?? 0);
      default:
        return 0;
    }
  };
  return clone.sort(cmp);
}

export default function MusicCatalog() {
  const data = albumsData as Record<string, Album[]>;
  const categories = Object.keys(data);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("year-desc");
  const [category, setCategory] = useState("All");

  const allAlbums = useMemo(() => {
    const flattened = categories.flatMap((cat) => data[cat] ?? []);
    const query = search.trim().toLowerCase();

    const filtered = query
      ? flattened.filter(
          (album) =>
            album.title.toLowerCase().includes(query) ||
            album.artists.some((a) => a.toLowerCase().includes(query)) ||
            album.artist.toLowerCase().includes(query),
        )
      : flattened;

    return sortAlbums(filtered, sort);
  }, [categories, data, search, sort]);

  // Map each album id to its source category so we can regroup after sorting.
  const byCategory = useMemo(() => {
    const inverted = new Map<string, Set<string>>();
    categories.forEach((cat) => inverted.set(cat, new Set()));
    categories.forEach((cat) => {
      (data[cat] ?? []).forEach((album) => inverted.get(cat)!.add(album.id));
    });
    return inverted;
  }, [categories, data]);

  const visibleCategories = category === "All" ? categories : [category];

  return (
    <div className="flex h-full flex-col p-6 sm:p-8 w-full">
      <MusicControls
        categories={["All", ...categories]}
        search={search}
        sort={sort}
        category={category}
        onSearchChange={setSearch}
        onSortChange={setSort}
        onCategoryChange={setCategory}
      />

      <div className="flex flex-1 flex-col gap-10">
        {visibleCategories.map((cat) => {
          const albums = sortAlbums(
            allAlbums.filter((album) => byCategory.get(cat)?.has(album.id)),
            sort,
          );
          if (albums.length === 0) return null;
          return (
            <div key={cat}>
              <h2 className="mb-4 border-b-4 border-zinc-200 dark:border-zinc-800 pb-2 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {cat}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    title={album.title}
                    artists={album.artists}
                    year={album.year}
                    genres={album.genres}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {allAlbums.length === 0 && (
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            No albums found.
          </p>
        )}
      </div>
    </div>
  );
}
