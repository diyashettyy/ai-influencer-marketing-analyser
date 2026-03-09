'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { ModeToggle } from '@/components/ModeToggle'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  // Route-specific CTA logic
  let showCTA = true
  let ctaText = 'Start Analysis'
  let ctaHref = '/campaign-setup'

  if (pathname === '/campaign-setup') {
    showCTA = false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-md border-b-2 border-foreground h-16">
      <Link href="/" className="flex items-center gap-3 hover-lift group ml-2">
        <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
          {/* Black & White Badge-style Logo */}
          <svg viewBox="0 0 120 120" className="w-full h-full text-foreground drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            <defs>
              <path id="textPathTop" d="M 25 60 A 35 35 0 0 1 95 60" />
              <path id="textPathBottom" d="M 95 60 A 35 35 0 0 1 25 60" />
            </defs>

            {/* Main Outer Seal / Badge */}
            <path
              d="M 60 5 L 68 15 L 80 12 L 85 24 L 98 25 L 98 38 L 110 42 L 105 54 L 115 60 L 105 66 L 110 78 L 98 82 L 98 95 L 85 96 L 80 108 L 68 105 L 60 115 L 52 105 L 40 108 L 35 96 L 22 95 L 22 82 L 10 78 L 15 66 L 5 60 L 15 54 L 10 42 L 22 38 L 22 25 L 35 24 L 40 12 L 52 15 Z"
              className="fill-foreground"
            />

            {/* Inner White Circle Background */}
            <circle cx="60" cy="60" r="46" className="fill-background stroke-foreground" strokeWidth="2" />

            {/* Bold Inner Border Removed */}

            {/* Circular Text */}
            <text className="font-sans fill-foreground" fontSize="13" fontWeight="bold" letterSpacing="1.5">
              <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">THE SOCIAL</textPath>
            </text>
            <text className="font-sans fill-foreground" fontSize="13" fontWeight="bold" letterSpacing="2">
              <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">ANIMAL</textPath>
            </text>

            {/* Elegant Minimal Sheep Motif */}
            <g transform="translate(0, -2)">
              {/* Legs */}
              <rect x="52" y="72" width="3" height="12" className="fill-foreground" />
              <rect x="65" y="72" width="3" height="10" className="fill-foreground" />
              <rect x="56" y="72" width="3" height="12" className="fill-foreground" />
              <rect x="69" y="70" width="3" height="12" className="fill-foreground" />

              {/* Simplistic stylized Wool Cloud */}
              <path
                d="M 50 48 C 50 38, 60 35, 65 40 C 75 35, 85 45, 85 55 C 92 55, 92 70, 85 75 C 80 82, 65 80, 60 75 C 50 82, 40 70, 45 60 C 40 55, 40 45, 50 48 Z"
                className="fill-background stroke-foreground"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Head / Face */}
              <ellipse cx="50" cy="56" rx="7" ry="9" className="fill-foreground" />

              {/* Ears */}
              <path d="M 43 50 Q 35 52 38 56 Q 43 54 43 50 Z" className="fill-foreground" />
              <path d="M 57 50 Q 65 52 62 56 Q 57 54 57 50 Z" className="fill-foreground" />

              {/* Wool Tuft on Head */}
              <path
                d="M 46 50 C 46 45, 54 45, 54 50 C 54 45, 62 45, 62 50 C 62 55, 46 55, 46 50 Z"
                className="fill-background stroke-foreground"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <span className="font-brand text-2xl font-normal text-foreground tracking-tight lowercase pt-1 hidden sm:block">the social animal</span>
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        <ModeToggle />

        {showCTA && (
          <Link
            href={ctaHref}
            className="px-4 py-1.5 bg-foreground text-background border-2 border-foreground rounded-full font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-0.5 active:shadow-none flex items-center gap-1.5"
          >
            {ctaText}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </nav>
  )
}
