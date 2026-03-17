'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Sidebar } from '@/components/navigation/Sidebar'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarHovered, setSidebarHovered] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <div className="flex flex-1 pt-16">
        <Sidebar
          mobileOpen={mobileMenuOpen}
          onMobileClose={() => setMobileMenuOpen(false)}
          onHoverChange={setSidebarHovered}
        />
        <main className="flex-1 w-full overflow-x-hidden md:pl-[70px] relative">
          {/* Blur overlay shown when sidebar is hovered on desktop */}
          <div
            className={`absolute inset-0 z-30 pointer-events-none transition-all duration-300 hidden md:block ${
              sidebarHovered
                ? 'backdrop-blur-sm bg-background/30 opacity-100'
                : 'opacity-0'
            }`}
          />
          {children}
        </main>
      </div>
    </div>
  )
}
