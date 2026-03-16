"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import React from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        rounded-md border lg:p-2 p-0.5
        ${theme === "dark" ? "border-black" : "border-white"}
        md:p-2 sm:p-1
      `}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="text-black lg:w-6 w-4 lg:h-6 h-4 sm:w-4 sm:h-4" />
      ) : (
        <Moon className="text-primaryFocus lg:w-6 w-4 lg:h-6 h-4 sm:w-4 sm:h-4" />
      )}
    </button>
  )
}