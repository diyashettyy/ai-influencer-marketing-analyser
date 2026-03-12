'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Sidebar } from '@/components/navigation/Sidebar'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <div className="flex flex-1 pt-16">
        <Sidebar mobileOpen={mobileMenuOpen} onMobileClose={() => setMobileMenuOpen(false)} />
        <main className="flex-1 transition-all duration-300 ease-in-out w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
