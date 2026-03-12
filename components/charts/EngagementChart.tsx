'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface EngagementChartProps {
  data: Array<{
    week: string
    engagement: number
  }>
  height?: number
}

export function EngagementChart({ data, height = 300 }: EngagementChartProps) {
  return (
    <div className="w-full bg-card rounded-2xl border border-border p-6">
      <h3 className="font-serif text-lg font-bold text-foreground mb-6">Engagement Trend</h3>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="[&_line]:stroke-border" />
          <XAxis dataKey="week" className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
          <YAxis className="[&_text]:fill-foreground" style={{ fontSize: '12px', fontWeight: 'bold' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '2px solid hsl(var(--border))',
              borderRadius: '12px',
              boxShadow: '4px 4px 0px 0px hsl(var(--border))',
              color: 'hsl(var(--foreground))'
            }}
            itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
            labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value) => [`${value}%`, 'Engagement']}
          />
          <Line
            type="monotone"
            dataKey="engagement"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--pastel-pink))', stroke: 'hsl(var(--foreground))', strokeWidth: 2, r: 6 }}
            activeDot={{ fill: 'hsl(var(--pastel-pink))', stroke: 'hsl(var(--foreground))', strokeWidth: 2, r: 8 }}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
