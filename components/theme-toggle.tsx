"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <section>
            {/* Default is dark, if click, set it to light, click again set it to dark */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800"

            >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </section>
    )
}
