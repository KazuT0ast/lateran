"use client"

import TopHeader from "@/components/top-header";
import { useRouter } from "next/navigation";

export default function MusicPage() {
    const router = useRouter();

    return (
        <section className="w-full min-h-screen flex flex-col">
            <TopHeader />

            <main className="flex p-10">
                <section className="p-10 flex-1 flex border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                    {/* Dashboard sections will go here */}
                    {/* - Catalog */}
                    <section className="flex w-full gap-10">
                        <section
                        onClick={() => router.push("/music/catalog")} 
                        className="flex h-30 w-full justify-center items-center bg-zinc-900 hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 border border-zinc-800 rounded-2xl cursor-pointer">
                            <p>Jellyfin Music</p>
                        </section>
                        <section className="flex h-30 w-full justify-center items-center bg-zinc-900 hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 border border-zinc-800 rounded-2xl cursor-pointer">
                            <p>Catalog2</p>
                        </section>
                        <section className="flex h-30 w-full justify-center items-center bg-zinc-900 hover:bg-indigo-600/50 dark:hover:bg-indigo-500/50 border border-zinc-800 rounded-2xl cursor-pointer">
                            <p>Catalog3</p>
                        </section>
                    </section>
                    {/* - Music Gear */}
                    {/* - Music Resources */}
                    {/* - Unreleased Tracks */}
                </section>
            </main>
        </section>
    )
}