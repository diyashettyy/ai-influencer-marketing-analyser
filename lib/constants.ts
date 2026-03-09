// Brand Colors
export const BRAND_COLORS = {
  antiquelace: '#E8E1D1',
  deepumber: '#4B342C',
  rosyblush: '#C38380',
  rosetaupe: '#9C7164',
  softpeach: '#D8B69F',
} as const

// Typography
export const TYPOGRAPHY = {
  serif: 'font-serif',
  sans: 'font-sans',
} as const

// Animation Durations (in ms)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 800,
} as const

// Sample Data for Influencer Analysis
export const SAMPLE_INFLUENCERS = [
  {
    id: 1,
    name: 'Sarah Chen',
    handle: '@sarahchen',
    followers: 245000,
    engagement: 8.2,
    category: 'Fashion & Lifestyle',
    description: 'Selected for her exceptional 8.2% engagement rate and high affinity with the 18-24 demographic.',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    handle: '@marcusj',
    followers: 589000,
    engagement: 5.6,
    category: 'Tech & Innovation',
    description: 'Chosen for his massive reach in the tech sector and consistent content quality scores.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    handle: '@elenarod',
    followers: 412000,
    engagement: 7.4,
    category: 'Wellness & Health',
    description: 'Perfect fit for wellness campaigns with a highly active community and authentic storytelling.',
  },
  {
    id: 4,
    name: 'James Wilson',
    handle: '@jamesw',
    followers: 678000,
    engagement: 6.1,
    category: 'Travel & Adventure',
    description: 'Offers broad international reach and visually stunning content that drives high share rates.',
  },
]

export const INFLUENCER_HISTORY_DATA = {
  1: {
    ...SAMPLE_INFLUENCERS[0],
    location: 'New York, USA',
    joinDate: 'March 2019',
    avgReach: '850K',
    collaborations: [
      {
        id: 101,
        brandName: 'Urban Outfitters',
        brandLogo: 'UO',
        campaignType: 'Seasonal Lookbook',
        date: '2023-11-15',
        reach: '1.2M',
        engagement: 9.5,
        conversions: 450,
        sentiment: 92,
        year: 2023
      },
      {
        id: 102,
        brandName: 'Glossier',
        brandLogo: 'GL',
        campaignType: 'Product Launch',
        date: '2023-08-22',
        reach: '980K',
        engagement: 8.8,
        conversions: 320,
        sentiment: 88,
        year: 2023
      },
      {
        id: 103,
        brandName: 'Revolve',
        brandLogo: 'RV',
        campaignType: 'Summer Collection',
        date: '2022-06-10',
        reach: '850K',
        engagement: 7.9,
        conversions: 210,
        sentiment: 85,
        year: 2022
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 210000 },
      { month: 'Feb', followers: 215000 },
      { month: 'Mar', followers: 222000 },
      { month: 'Apr', followers: 228000 },
      { month: 'May', followers: 235000 },
      { month: 'Jun', followers: 245000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 7.2 },
      { campaign: 'C2', rate: 8.5 },
      { campaign: 'C3', rate: 7.9 },
      { campaign: 'C4', rate: 9.1 },
      { campaign: 'C5', rate: 8.2 },
    ]
  },
  2: {
    ...SAMPLE_INFLUENCERS[1],
    location: 'San Francisco, USA',
    joinDate: 'January 2018',
    avgReach: '1.5M',
    collaborations: [
      {
        id: 201,
        brandName: 'Samsung',
        brandLogo: 'SM',
        campaignType: 'Tech Review',
        date: '2023-12-05',
        reach: '2.1M',
        engagement: 5.8,
        conversions: 890,
        sentiment: 89,
        year: 2023
      },
      {
        id: 202,
        brandName: 'Logitech',
        brandLogo: 'LG',
        campaignType: 'Setup Tour',
        date: '2023-09-15',
        reach: '1.8M',
        engagement: 6.2,
        conversions: 550,
        sentiment: 94,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 520000 },
      { month: 'Feb', followers: 535000 },
      { month: 'Mar', followers: 550000 },
      { month: 'Apr', followers: 565000 },
      { month: 'May', followers: 578000 },
      { month: 'Jun', followers: 589000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.2 },
      { campaign: 'C2', rate: 5.9 },
      { campaign: 'C3', rate: 6.1 },
      { campaign: 'C4', rate: 5.6 },
    ]
  },
  3: {
    ...SAMPLE_INFLUENCERS[2],
    location: 'Austin, USA',
    joinDate: 'June 2020',
    avgReach: '600K',
    collaborations: [
      {
        id: 301,
        brandName: 'Athleta',
        brandLogo: 'AT',
        campaignType: 'Yoga Series',
        date: '2023-09-10',
        reach: '550K',
        engagement: 8.1,
        conversions: 280,
        sentiment: 95,
        year: 2023
      },
      {
        id: 302,
        brandName: 'Whole Foods',
        brandLogo: 'WF',
        campaignType: 'Healthy Eating',
        date: '2023-05-20',
        reach: '480K',
        engagement: 7.5,
        conversions: 190,
        sentiment: 90,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 380000 },
      { month: 'Feb', followers: 390000 },
      { month: 'Mar', followers: 395000 },
      { month: 'Apr', followers: 400000 },
      { month: 'May', followers: 405000 },
      { month: 'Jun', followers: 412000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 6.8 },
      { campaign: 'C2', rate: 7.2 },
      { campaign: 'C3', rate: 7.0 },
      { campaign: 'C4', rate: 7.4 },
    ]
  },
  4: {
    ...SAMPLE_INFLUENCERS[3],
    location: 'London, UK',
    joinDate: 'Available since 2019',
    avgReach: '950K',
    collaborations: [
      {
        id: 401,
        brandName: 'The North Face',
        brandLogo: 'NF',
        campaignType: 'Winter Expedition',
        date: '2023-11-01',
        reach: '1.5M',
        engagement: 6.8,
        conversions: 600,
        sentiment: 93,
        year: 2023
      },
      {
        id: 402,
        brandName: 'Airbnb',
        brandLogo: 'AB',
        campaignType: 'Unique Stays',
        date: '2023-07-15',
        reach: '1.2M',
        engagement: 6.0,
        conversions: 450,
        sentiment: 88,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 600000 },
      { month: 'Feb', followers: 615000 },
      { month: 'Mar', followers: 630000 },
      { month: 'Apr', followers: 650000 },
      { month: 'May', followers: 665000 },
      { month: 'Jun', followers: 678000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.5 },
      { campaign: 'C2', rate: 5.8 },
      { campaign: 'C3', rate: 6.2 },
      { campaign: 'C4', rate: 6.1 },
    ]
  }
}

// Processing Status Messages
export const PROCESSING_MESSAGES = [
  'Analyzing influencer profiles...',
  'Evaluating engagement metrics...',
  'Assessing audience demographics...',
  'Calculating ROI potential...',
  'Generating AI insights...',
  'Finalizing recommendations...',
]
