"use client";

import { useState } from "react";

export type SortKey = "artist-asc" | "artist-desc" | "title-asc" | "year-desc" | "year-asc";

interface MusicControlsProps {
  categories: string[];
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortKey) => void;
  onCategoryChange: (value: string) => void;
  search: string;
  sort: SortKey;
  category: string;
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "artist-asc", label: "Artist (A–Z)" },
  { value: "artist-desc", label: "Artist (Z–A)" },
  { value: "title-asc", label: "Title (A–Z)" },
  { value: "year-desc", label: "Year (newest first)" },
  { value: "year-asc", label: "Year (oldest first)" },
];

export default function MusicControls({
  categories,
  onSearchChange,
  onSortChange,
  onCategoryChange,
  search,
  sort,
  category,
}: MusicControlsProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search albums or artists…"
        className="flex-1 min-w-0 rounded-xl border border-zinc-300/60 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
      />

      <div className="flex gap-3">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-xl border border-zinc-300/60 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortKey)}
          className="rounded-xl border border-zinc-300/60 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
