import { ReactNode } from 'react'
import { HOVER_LIFT_CLASSES } from '@/lib/animations'

interface HowItWorksCardProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  variant?: 'pink' | 'blue' | 'green'
}

export function HowItWorksCard({ number, title, description, icon, variant = 'blue' }: HowItWorksCardProps) {
  const bgMap = {
    pink: 'bg-pastel-pink',
    blue: 'bg-pastel-blue',
    green: 'bg-pastel-green'
  }
  const bgColor = bgMap[variant] || 'bg-pastel-blue'

  return (
    <div className={`p-8 rounded-2xl border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] bg-card hover:-translate-y-1 transition-transform`}>
      <div className={`w-16 h-16 rounded-xl ${bgColor} border-2 border-foreground flex items-center justify-center text-foreground mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
        {icon}
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/80 font-serif`}>
          {number}
        </span>
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground text-opacity-80 font-medium leading-relaxed">{description}</p>
    </div>
  )
}
