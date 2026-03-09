import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Star } from 'lucide-react'
import { InfluencerCard } from '@/components/cards/InfluencerCard'
import { EngagementChart } from '@/components/charts/EngagementChart'
import { AudienceChart } from '@/components/charts/AudienceChart'
import { AIInsightBox } from '@/components/common/AIInsightBox'
import { SAMPLE_INFLUENCERS } from '@/lib/constants'

export default function ResultsPage() {
  const engagementData = [
    { week: 'Week 1', engagement: 4.2 },
    { week: 'Week 2', engagement: 5.8 },
    { week: 'Week 3', engagement: 7.1 },
    { week: 'Week 4', engagement: 8.9 },
    { week: 'Week 5', engagement: 9.4 },
    { week: 'Week 6', engagement: 8.7 },
  ]

  const audienceData = [
    { name: '18-24 years', value: 28 },
    { name: '25-34 years', value: 38 },
    { name: '35-44 years', value: 22 },
    { name: '45+ years', value: 12 },
  ]

  return (
    <main className="min-h-screen bg-background">

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 stagger-fade-1">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
            <span className="text-lg font-semibold text-primary">Analysis Complete</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Campaign Analysis Results</h1>
          <p className="text-lg text-foreground/70">
            Your AI-powered insights are ready. Review the metrics and recommendations below.
          </p>
        </div>

        {/* Influencer Performance */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Influencer Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_INFLUENCERS.slice(0, 3).map((influencer, i) => (
              <div key={influencer.id} className={`stagger-fade-${i + 1}`}>
                <InfluencerCard {...influencer} />
              </div>
            ))}
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Reach', value: '2.3M', icon: <Users className="w-8 h-8 text-primary" /> },
            { label: 'Avg Engagement', value: '7.2%', icon: <TrendingUp className="w-8 h-8 text-primary" /> },
            { label: 'Predicted ROI', value: '245%', icon: <DollarSign className="w-8 h-8 text-primary" /> },
            { label: 'Campaign Score', value: '8.9/10', icon: <Star className="w-8 h-8 text-primary" /> },
          ].map((metric, i) => (
            <div key={i} className={`bg-card rounded-2xl border border-border/20 p-6 shadow-sm stagger-fade-${i + 2}`}>
              <div className="mb-2">{metric.icon}</div>
              <p className="text-sm text-foreground/60 mb-1">{metric.label}</p>
              <p className="font-serif text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="stagger-fade-1">
            <EngagementChart data={engagementData} />
          </div>
          <div className="stagger-fade-2">
            <AudienceChart data={audienceData} />
          </div>
        </div>

        {/* AI Insights */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Key Insights</h2>
          <div className="space-y-4">
            <div className="stagger-fade-1">
              <AIInsightBox
                title="Optimal Engagement Window"
                content="Influencers in your campaign show peak engagement between"
                highlight="2-5 PM EST on weekdays"
              />
            </div>
            <div className="stagger-fade-2">
              <AIInsightBox
                title="Audience Quality"
                content="Your selected influencers have an average audience quality score of"
                highlight="8.6/10"
              />
            </div>
            <div className="stagger-fade-3">
              <AIInsightBox
                title="Content Performance"
                content="Video content receives"
                highlight="3.2x more engagement"
              />
            </div>
          </div>
        </div>



        {/* Recommendations */}
        <div className="bg-gradient-to-r from-primary/10 via-card to-card rounded-2xl border border-primary/20 p-8 mb-12 shadow-sm backdrop-blur-sm">
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-foreground text-lg mb-3">Recommendations</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Prioritize video content - it outperforms static posts by 3.2x</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Schedule posts between 2-5 PM EST for maximum engagement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Increase budget allocation to top 2 performers by 30%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Create collaborative content between complementary influencers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Ready to Launch?</h2>
            <p className="text-foreground/70">
              Use these insights to optimize your influencer campaign and maximize ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover-lift active:scale-95 transition-transform shadow-md"
            >
              View Detailed Insights
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/campaign-setup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground text-foreground bg-card rounded-full font-semibold hover-lift active:scale-95 transition-all shadow-sm"
            >
              Start New Campaign
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
