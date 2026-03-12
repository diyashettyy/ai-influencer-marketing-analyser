'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

interface AudienceChartProps {
  data: Array<{
    name: string
    value: number
  }>
  height?: number
}

const COLORS = ['#FFC4D6', '#B4E1FF', '#D4E9D4', '#FFF5B8', '#e5e5e5'] // Pink, Blue, Green, Yellow, Grey

export function AudienceChart({ data, height = 300 }: AudienceChartProps) {
  return (
    <div className="w-full bg-card rounded-2xl border-2 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
      <h3 className="font-serif text-lg font-bold text-foreground mb-6">Audience Demographics</h3>

      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={800}
            stroke="hsl(var(--foreground))"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '2px solid hsl(var(--border))',
              borderRadius: '12px',
              boxShadow: '4px 4px 0px 0px hsl(var(--border))',
              color: 'hsl(var(--foreground))'
            }}
            itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
            labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
            formatter={(value) => [`${value}%`, 'Percentage']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-foreground text-xs">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
