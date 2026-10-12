"use client"

// Can add an (i) in the top left or right of the card, leading to my lastfm => jellyfin setup blog
import { useEffect, useState } from "react";

interface Track {
    name: string;
    artist: string;
    album: string | null;
    url: string;
    image: string | null;
    nowPlaying: boolean;
}

export default function LastFMCard() {
    const [tracks, setTracks] = useState<Track[]>([])

    async function getLastFmStats() {
        try {
            const response = await fetch('/api/last-fm/fetch-recent-tracks')

            if (!response.ok) {
                console.error("Failed to fetch tracks")
                return
            }

            const data = await response.json()
            setTracks(data.tracks)
        } catch {
            console.error("Error fetching Last.fm data")
        }
    }

    useEffect(() => {
        getLastFmStats()
    }, [])

    return (
        <section className="w-full ">
            <section className="flex flex-col w-full gap-4 bg-zinc-50 border dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                {tracks.map((track, index) => (
                    <a
                        key={index}
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block p-6 rounded-2xl hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 transition-colors duration-200 ${index === 0 ? "text-lg" : "text-sm"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">{track.name}</p>
                                <p className="text-zinc-500 dark:text-zinc-400 truncate">{track.artist}</p>
                            </div>
                            {index === 0 && (
                                <span className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
                                    Now Playing
                                </span>
                            )}
                        </div>
                    </a>
                ))}
            </section>
        </section>
    )
}
