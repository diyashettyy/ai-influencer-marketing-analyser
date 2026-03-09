'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-16 h-8 bg-muted rounded-full border-2 border-foreground" />

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={cn(
                "relative inline-flex items-center w-[72px] h-10 rounded-full border-2 border-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 overflow-hidden",
                isDark ? "bg-muted shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]" : "bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            )}
            aria-label="Toggle theme"
        >
            {/* Background elements (Stars for dark, Rays for light) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-full">
                {isDark ? (
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                ) : (
                    <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
                )}
            </div>

            {/* Icons inside the track */}
            <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none z-0">
                <Sun className={cn("w-4 h-4 transition-colors duration-300", isDark ? "text-foreground/30" : "text-foreground")} />
                <Moon className={cn("w-4 h-4 transition-colors duration-300", isDark ? "text-foreground" : "text-foreground/30")} />
            </div>

            {/* Sliding Thumb */}
            <div
                className={cn(
                    "absolute left-1 top-1 w-7 h-7 rounded-full border-2 border-foreground transition-transform duration-500 z-10",
                    isDark ? "translate-x-8 bg-primary shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.2)]" : "translate-x-0 bg-accent shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.1)]"
                )}
            />
        </button>
    )
}
