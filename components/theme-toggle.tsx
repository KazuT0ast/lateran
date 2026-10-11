"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Only render the toggle after the component has mounted on the client
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null // Prevents the hydration mismatch flash
    }

    return (
        <section>
            {/* Default is dark, if click, set it to light, click again set it to dark */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-4 py-2 rounded-xl text-sm dark:bg-zinc-900 border-1 dark:border-amber-50/10"

            >
                {theme === "light" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </section>
    )
}
