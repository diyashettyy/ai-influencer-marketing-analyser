import Link from 'next/link'
import { ArrowLeft, Download, Share2, TrendingUp, Users, Clock, Target, Video, Layers, Smartphone, Image } from 'lucide-react'
import { EngagementChart } from '@/components/charts/EngagementChart'
import { AudienceChart } from '@/components/charts/AudienceChart'
import { AIInsightBox } from '@/components/common/AIInsightBox'

export default function InsightsPage() {
  const detailedMetrics = [
    {
      category: 'Reach',
      value: '2.3M',
      change: '+18%',
      description: 'Total potential reach across selected influencers',
    },
    {
      category: 'Engagement Rate',
      value: '7.2%',
      change: '+2.4%',
      description: 'Average engagement rate across campaigns',
    },
    {
      category: 'Audience Quality',
      value: '8.6/10',
      change: '+0.8',
      description: 'Quality score of target audience',
    },
    {
      category: 'Projected ROI',
      value: '245%',
      change: '+52%',
      description: 'Expected return on investment',
    },
  ]

  const contentPerformance = [
    { type: 'Video', engagement: 12.4, reach: '8.2M', icon: <Video className="w-5 h-5 text-secondary" /> },
    { type: 'Carousel Posts', engagement: 8.9, reach: '6.1M', icon: <Layers className="w-5 h-5 text-secondary" /> },
    { type: 'Stories', engagement: 6.2, reach: '4.8M', icon: <Smartphone className="w-5 h-5 text-secondary" /> },
    { type: 'Static Posts', engagement: 4.1, reach: '3.2M', icon: <Image className="w-5 h-5 text-secondary" /> },
  ]

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
    <main className="min-h-screen bg-background bg-grid-pattern">

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 stagger-fade-1">
          <Link href="/results" className="flex items-center gap-2 text-primary hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to Results</span>
          </Link>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Detailed Campaign Insights</h1>
          <p className="text-lg text-foreground/70">
            In-depth analysis of your influencer campaign performance and recommendations.
          </p>

          <div className="flex gap-3 mt-6">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/20 rounded-lg hover:border-primary transition-colors">
              <Download className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Download Report</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/20 rounded-lg hover:border-primary transition-colors">
              <Share2 className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Share</span>
            </button>
          </div>
        </div>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {detailedMetrics.map((metric, i) => (
            <div key={i} className={`bg-card rounded-2xl border border-border/20 p-6 shadow-sm stagger-fade-${Math.min(i + 2, 5)}`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif font-bold text-foreground">{metric.category}</h3>
                <span className="text-sm font-semibold text-primary">{metric.change}</span>
              </div>
              <p className="font-serif text-3xl font-bold text-foreground mb-2">{metric.value}</p>
              <p className="text-sm text-foreground/60">{metric.description}</p>
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

        {/* Content Performance */}
        <div className="bg-card rounded-2xl border border-border/20 p-8 mb-12 shadow-sm stagger-fade-1">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Content Type Performance</h2>

          <div className="space-y-4">
            {contentPerformance.map((content, i) => (
              <div key={i} className="p-4 border border-border/10 rounded-lg hover:border-primary transition-colors bg-background/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{(content.icon as any)}</span>
                    <h4 className="font-semibold text-foreground">{content.type}</h4>
                  </div>
                  <span className="font-serif font-bold text-primary text-lg">{content.engagement}%</span>
                </div>
                <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                    style={{ width: `${(content.engagement / 15) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-foreground/60">Reach: {content.reach}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-secondary/5 -skew-y-2 -z-10 scale-105" />
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">Strategic Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="stagger-fade-1">
              <div className="bg-card rounded-2xl border-2 border-border p-6 shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-y-1 transition-transform">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                    <Clock className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground self-center">Timing Optimization</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4 font-medium leading-relaxed">
                  Peak engagement occurs between 2-5 PM EST on weekdays. Consider scheduling 60% of content during this window.
                </p>
                <ul className="space-y-2 text-xs text-foreground/70 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Mon-Fri: 2-5 PM EST</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Weekend: 11 AM - 2 PM EST</li>
                  <li className="flex items-center gap-2 text-destructive"><span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Avoid: 7-10 AM & 6-10 PM</li>
                </ul>
              </div>
            </div>

            <div className="stagger-fade-2">
              <div className="bg-card rounded-2xl border-2 border-border p-6 shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-y-1 transition-transform rotate-1">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                    <Target className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground self-center">Audience Targeting</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4 font-medium leading-relaxed">
                  Primary audience segment is 25-34 years old (38%). Focus messaging on career advancement and lifestyle topics.
                </p>
                <ul className="space-y-2 text-xs text-foreground/70 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Demographics: 25-44 (60%)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Platforms: Instagram & TikTok</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Type: Authentic & Relatable</li>
                </ul>
              </div>
            </div>

            <div className="stagger-fade-3">
              <div className="bg-card rounded-2xl border-2 border-border p-6 shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-y-1 transition-transform -rotate-1">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                    <TrendingUp className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground self-center">Growth Opportunities</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4 font-medium leading-relaxed">
                  Video content shows 3.2x higher engagement. Shift 40% of budget to short-form video production immediately.
                </p>
                <ul className="space-y-2 text-xs text-foreground/70 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Video budget: +40%</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Length: 15-30 Seconds</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Feature: Captions Required</li>
                </ul>
              </div>
            </div>

            <div className="stagger-fade-4">
              <div className="bg-card rounded-2xl border-2 border-border p-6 shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-y-1 transition-transform">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground self-center">Influencer Synergy</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4 font-medium leading-relaxed">
                  Top performers: Sarah Chen & Marcus Johnson. Recommend collaborative content for secondary boost.
                </p>
                <ul className="space-y-2 text-xs text-foreground/70 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Pair: Sarah C. + Elena R.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Effect: +35% Engagement</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Strategy: Hashtag Collab</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-primary/10 via-card to-card rounded-2xl border border-primary/20 p-8 mb-12 shadow-sm stagger-fade-1 backdrop-blur-sm">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">AI Recommendations Summary</h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm border border-border/10">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Pivot to Video-First Strategy</p>
                <p className="text-sm text-foreground/80">
                  Video content achieves 3.2x higher engagement. Allocate 40% of budget to short-form video production.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm border border-border/10">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Optimize Publishing Schedule</p>
                <p className="text-sm text-foreground/80">
                  Schedule 60% of content between 2-5 PM EST on weekdays for maximum engagement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm border border-border/10">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Increase Budget to Top Performers</p>
                <p className="text-sm text-foreground/80">
                  Reallocate 30% of budget from lower-performing influencers to Sarah Chen and Marcus Johnson.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm border border-border/10">
                4
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Launch Collaborative Campaigns</p>
                <p className="text-sm text-foreground/80">
                  Cross-promotion between Sarah Chen and Elena Rodriguez shows +35% engagement boost potential.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm border border-border/10">
                5
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Implement A/B Testing</p>
                <p className="text-sm text-foreground/80">
                  Test messaging variations targeting 25-34 demographic. Expected improvement: +15% engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Ready to implement these insights?</h2>
          <p className="text-foreground/70 mb-8">
            Use this data-driven strategy to maximize your campaign ROI and influencer performance.
          </p>
          <Link
            href="/campaign-setup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover-lift active:scale-95 transition-transform shadow-md"
          >
            Run Another Campaign
          </Link>
        </div>
      </section>
    </main>
  )
}