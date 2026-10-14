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
    const [loading, setLoading] = useState(true)

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
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLastFmStats()
    }, [])

    const skeletonCards = Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`p-6 ${i === 0 ? "border-b dark:border-zinc-800" : ""}`}>
            <div className="flex flex-col space-y-2 animate-pulse">
                <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-800 rounded" />
                <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
                <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
            </div>
        </div>
    ))

    const trackCards = tracks.slice(0, 6).map((track, index) => {
        const isFirst = index === 0
        const classes = `group block p-6 hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 transition-colors duration-200 ${isFirst ? "text-lg border-b dark:border-zinc-800" : "text-sm"}`

        return (
            <a
                key={index}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                <div className="flex flex-col">
                    {isFirst && track.nowPlaying && (
                        <span className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 text-xs font-medium mb-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
                            Now Playing
                        </span>
                    )}
                    <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{track.name}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 truncate">{track.artist}</p>
                        {track.album && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{track.album}</p>
                        )}
                    </div>
                </div>
            </a>
        )
    })

    return (
        <section className="w-full">
            <section className="flex flex-col w-full bg-zinc-50 border dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-2xl">
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">RECENT TRACKS</span>
                    <a
                        href="https://www.last.fm/user/AzaKoast"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 dark:text-purple-400 text-xs font-medium tracking-wider hover:underline"
                    >
                        LAST.FM
                    </a>
                </div>
                {loading ? skeletonCards : trackCards}
            </section>
        </section>
    )
}
