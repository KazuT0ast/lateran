import { ThemeToggle } from "./theme-toggle"

export default function TopHeader() {
    return (
        <section className="w-full px-8 py-4 dark:bg-zinc-900 bg-white flex items-center justify-between shadow-md border-b border-white/20">
            <h1 className="text-2xl text-black dark:text-white">Lateran</h1>

            <ThemeToggle />
        </section>
    )
}