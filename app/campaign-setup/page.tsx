'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function CampaignSetupPage() {
  const [campaignName, setCampaignName] = useState('')
  const [campaignBudget, setCampaignBudget] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [location, setLocation] = useState('')
  const [locationWarn, setLocationWarn] = useState(false)
  const [niche, setNiche] = useState('')
  const [nicheWarn, setNicheWarn] = useState(false)
  const [influencerCount, setInfluencerCount] = useState(5)
  const [description, setDescription] = useState('')

  // Only allow letters, spaces, and commas — show a caution if bad chars are typed
  const handleLettersOnly = (
    value: string,
    setter: (v: string) => void,
    setWarn: (w: boolean) => void
  ) => {
    const hasBad = /[^a-zA-Z\s,]/.test(value)
    setWarn(hasBad)
    const filtered = value.replace(/[^a-zA-Z\s,]/g, '')
    setter(filtered)
  }

  const descriptionWordCount = description.trim().split(/\s+/).filter(Boolean).length
  const descriptionValid =
    description.trim().length >= 20 && descriptionWordCount >= 4

  const canProceed =
    campaignName.trim() &&
    descriptionValid &&
    ageGroup.trim() &&
    location.trim() &&
    niche.trim()

  return (
    <main className="min-h-screen bg-background">

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-foreground/60">Setup Campaign</span>
            <ChevronRight className="w-4 h-4 text-foreground/40" />
            <span className="text-foreground font-semibold">Step 1 of 3</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Create Campaign</h1>
          <p className="text-lg text-foreground/70">
            Select influencers and set up your campaign for AI analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Campaign Details Form */}
            <div className="bg-card rounded-2xl border border-border/20 p-8 mb-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Campaign Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Campaign Name</label>
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    placeholder="e.g., Summer Product Launch"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Targeted Age Group</label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background font-sans ${ageGroup ? 'text-foreground' : 'text-foreground/50'}`}
                    >
                      <option value="" disabled className="bg-background text-foreground/50 font-sans">Select Age Group</option>
                      <option value="18-30" className="bg-background text-foreground font-sans">18–30</option>
                      <option value="18-34" className="bg-background text-foreground font-sans">18–34</option>
                      <option value="18-35" className="bg-background text-foreground font-sans">18–35</option>
                      <option value="18-40" className="bg-background text-foreground font-sans">18–40</option>
                      <option value="20-40" className="bg-background text-foreground font-sans">20–40</option>
                      <option value="22-35" className="bg-background text-foreground font-sans">22–35</option>
                      <option value="24-40" className="bg-background text-foreground font-sans">24–40</option>
                      <option value="25-40" className="bg-background text-foreground font-sans">25–40</option>
                      <option value="28-40" className="bg-background text-foreground font-sans">28–40</option>
                      <option value="All Ages" className="bg-background text-foreground font-sans">All Ages</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Geographical Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => handleLettersOnly(e.target.value, setLocation, setLocationWarn)}
                      placeholder="e.g., United States, Global"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Influencer Niche</label>
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => handleLettersOnly(e.target.value, setNiche, setNicheWarn)}
                    placeholder="e.g., Fashion, Tech, Wellness"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Number of Influencers to Display</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={3}
                      max={10}
                      value={influencerCount}
                      onChange={(e) => setInfluencerCount(Number(e.target.value))}
                      className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-primary bg-foreground/10"
                    />
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-lg border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]">
                      {influencerCount}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 mt-1.5">Choose between 3 and 10 influencers</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="block text-sm font-semibold text-foreground">Campaign Description</label>
                    <span className={`text-xs font-medium ${descriptionValid ? 'text-green-500' : 'text-foreground/50'}`}>
                      {description.trim().length} chars · {descriptionWordCount} word{descriptionWordCount !== 1 ? 's' : ''}
                      {description.trim().length > 0 && !descriptionValid && ' · min 20 chars & 4 words'}
                    </span>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your campaign goals, deliverables, and key messaging..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30 resize-none"
                  />
                  {description.trim().length > 0 && !descriptionValid && (
                    <p className="text-xs text-red-400 mt-1.5">
                      Please enter at least 20 characters and 4 words.
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-semibold text-foreground">Campaign Budget (USD)</label>
                    <span className="text-xs text-foreground/50 font-medium">Optional</span>
                  </div>
                  <input
                    type="number"
                    value={campaignBudget}
                    onChange={(e) => setCampaignBudget(e.target.value)}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-foreground/30"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border/20 p-8 sticky top-20 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Campaign Summary</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Campaign Name</p>
                  <p className="font-semibold text-foreground">{campaignName || 'Not set'}</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 mb-1">Budget</p>
                  <p className="font-semibold text-foreground">
                    {campaignBudget ? `$${parseInt(campaignBudget).toLocaleString()}` : 'Not set'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 mb-1">Targeting</p>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-sm">
                      <span className="opacity-70">Age: </span>{ageGroup || '-'}
                    </p>
                    <p className="font-medium text-foreground text-sm">
                      <span className="opacity-70">Loc: </span>{location || '-'}
                    </p>
                    <p className="font-medium text-foreground text-sm">
                      <span className="opacity-70">Niche: </span>{niche || '-'}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 mb-1">Influencers</p>
                  <p className="font-semibold text-foreground">{influencerCount}</p>
                </div>

                <Link
                  href={canProceed ? `/processing?count=${influencerCount}` : '#'}
                  onClick={(e) => !canProceed && e.preventDefault()}
                  className={`w-full py-3 px-2 rounded-lg font-bold text-center transition-all text-sm sm:text-base flex items-center justify-center ${canProceed
                    ? 'bg-primary text-primary-foreground hover-lift active:scale-95 cursor-pointer shadow-md'
                    : 'bg-muted text-muted-foreground cursor-not-allowed border border-border/10'
                    }`}
                >
                  Start Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
