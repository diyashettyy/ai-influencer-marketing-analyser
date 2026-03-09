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
    <div className="w-full bg-white rounded-2xl border border-border p-6">
      <h3 className="font-serif text-lg font-bold text-foreground mb-6">Engagement Trend</h3>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="week" stroke="#2D2D2D" style={{ fontSize: '12px', fontWeight: 'bold' }} />
          <YAxis stroke="#2D2D2D" style={{ fontSize: '12px', fontWeight: 'bold' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '2px solid #2D2D2D',
              borderRadius: '12px',
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)'
            }}
            itemStyle={{ color: '#2D2D2D', fontWeight: 'bold' }}
            labelStyle={{ color: '#2D2D2D', fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value) => [`${value}%`, 'Engagement']}
          />
          <Line
            type="monotone"
            dataKey="engagement"
            stroke="#2D2D2D"
            strokeWidth={3}
            dot={{ fill: '#FFC4D6', stroke: '#2D2D2D', strokeWidth: 2, r: 6 }}
            activeDot={{ fill: '#FFC4D6', stroke: '#2D2D2D', strokeWidth: 2, r: 8 }}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
