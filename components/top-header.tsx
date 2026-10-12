"use client"

import { useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image";

export default function TopHeader() {
    
    const router = useRouter();

    return (
        <section className="sticky top-0 z-50 w-full px-8 py-2 dark:bg-zinc-900/80 bg-white/80 backdrop-blur-sm flex items-center justify-between shadow-md border-b border-white/20">
            {/* <h1 className="text-2xl text-black dark:text-white">Lateran</h1> */}
            <Image 
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/")}
            src="/Laterano.webp" alt="Lateran" width={50} height={50} />

            <ThemeToggle />
        </section>
    )
}