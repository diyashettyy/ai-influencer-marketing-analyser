import { Sparkles } from 'lucide-react'

interface AIInsightBoxProps {
  title: string
  content: string
  highlight?: string
}

export function AIInsightBox({ title, content, highlight }: AIInsightBoxProps) {
  return (
    <div className="flex gap-4 p-6 bg-card rounded-2xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-transform">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-pastel-pink border-2 border-foreground rounded-md flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="w-4 h-4 text-foreground" />
        </div>
      </div>

      <div className="flex-1">
        <h4 className="font-serif font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-foreground text-opacity-80 leading-relaxed">
          {content}
          {highlight && <span className="font-semibold text-primary"> {highlight}</span>}
        </p>
      </div>
    </div>
  )
}
