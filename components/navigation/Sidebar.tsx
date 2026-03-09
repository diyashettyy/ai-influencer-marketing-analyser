'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Home,
    PlusCircle,
    Loader2,
    BarChart3,
    Image,
    Lightbulb,
    Info,
    ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Campaign Setup', href: '/campaign-setup', icon: PlusCircle },
    { name: 'Gallery', href: '/influencer-history', icon: Image },
    { name: 'Insights', href: '/insights', icon: Lightbulb },
    { name: 'About', href: '/about', icon: Info },
]

export function Sidebar() {
    const pathname = usePathname()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <aside
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "sticky top-16 h-[calc(100vh-64px)] z-40 bg-background border-r-2 border-foreground transition-all duration-300 ease-in-out shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_0px_0px_0px_rgba(255,255,255,0.2)]",
                isHovered ? "w-60" : "w-[70px]"
            )}
        >
            <div className="flex flex-col gap-2 p-3 overflow-hidden">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 p-3 rounded-md border-2 border-transparent transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary text-primary-foreground border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                    : "hover:bg-accent hover:border-foreground hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
                            )}
                        >
                            <item.icon className={cn(
                                "w-6 h-6 shrink-0 transition-transform group-hover:scale-110",
                                isActive ? "text-primary-foreground" : "text-foreground"
                            )} />

                            <span className={cn(
                                "font-bold whitespace-nowrap transition-opacity duration-300",
                                isHovered ? "opacity-100" : "opacity-0"
                            )}>
                                {item.name}
                            </span>

                            {!isHovered && (
                                <div className="absolute left-[70px] ml-2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    )
                })}
            </div>

            <div className={cn(
                "absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 border-foreground rounded-full flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300",
                isHovered ? "rotate-180" : "rotate-0"
            )}>
                <ChevronRight className="w-4 h-4" />
            </div>
        </aside>
    )
}
