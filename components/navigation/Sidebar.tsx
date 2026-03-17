'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Home,
    PlusCircle,
    Image,
    Info,
    ChevronRight,
    X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Campaign Setup', href: '/campaign-setup', icon: PlusCircle },
    { name: 'Gallery', href: '/influencer-history', icon: Image },
    { name: 'About', href: '/about', icon: Info },
]

interface SidebarProps {
    mobileOpen?: boolean
    onMobileClose?: () => void
    onHoverChange?: (hovered: boolean) => void
}

export function Sidebar({ mobileOpen = false, onMobileClose, onHoverChange }: SidebarProps) {
    const pathname = usePathname()
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (val: boolean) => {
        setIsHovered(val)
        onHoverChange?.(val)
    }

    return (
        <>
            {/* Mobile overlay backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[70] md:hidden"
                    onClick={onMobileClose}
                />
            )}

            {/* Sidebar */}
            <aside
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className={cn(
                    // Base styles
                    "bg-background border-r-2 border-foreground transition-all duration-300 ease-in-out shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_0px_0px_0px_rgba(255,255,255,0.2)]",
                    // Desktop: fixed sidebar, hidden on mobile
                    "hidden md:flex md:flex-col fixed top-16 left-0 h-[calc(100vh-64px)] z-40",
                    // Desktop width based on hover
                    isHovered ? "md:w-60" : "md:w-[70px]",
                    // Mobile: fixed overlay drawer
                    mobileOpen && "!block fixed top-16 left-0 bottom-0 w-64 z-[80]"
                )}
            >
                {/* Mobile close button */}
                {mobileOpen && (
                    <button
                        onClick={onMobileClose}
                        className="md:hidden absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-muted rounded-lg border border-border hover:bg-accent transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}

                <div className="flex flex-col gap-2 p-3 overflow-hidden transition-all duration-300 ease-in-out">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onMobileClose}
                                className={cn(
                                    "flex items-center gap-4 rounded-md border-2 border-transparent transition-all duration-200 group relative",
                                    mobileOpen || isHovered ? "p-3" : "p-2",
                                    isActive
                                        ? "bg-primary text-primary-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                        : "hover:bg-accent hover:border-foreground hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-6 h-6 shrink-0 transition-transform group-hover:scale-110",
                                    isActive ? "text-primary-foreground" : "text-foreground"
                                )} />

                                {/* Show labels always on mobile overlay, only on hover on desktop */}
                                <span className={cn(
                                    "font-bold whitespace-nowrap transition-opacity duration-300",
                                    mobileOpen ? "opacity-100" : (isHovered ? "opacity-100" : "opacity-0")
                                )}>
                                    {item.name}
                                </span>

                                {!isHovered && !mobileOpen && (
                                    <div className="absolute left-[70px] ml-2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* Chevron indicator - only on desktop */}
                <div className={cn(
                    "absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 border-foreground rounded-full items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hidden md:flex",
                    isHovered ? "rotate-180" : "rotate-0"
                )}>
                    <ChevronRight className="w-4 h-4" />
                </div>
            </aside>
        </>
    )
}
