// Staggered animation helper
export const getStaggeredDelay = (index: number, baseDelay = 100) => {
  return `${index * baseDelay}ms`
}

// Generate stagger fade classes
export const getStaggerClass = (index: number): string => {
  const classes = [
    '',
    'stagger-fade-1',
    'stagger-fade-2',
    'stagger-fade-3',
    'stagger-fade-4',
    'stagger-fade-5',
  ]
  return classes[Math.min(index, classes.length - 1)]
}

// Hover lift animation classes
export const HOVER_LIFT_CLASSES = 'transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1'

// Soft shadow variants
export const SHADOW_CLASSES = {
  soft: 'shadow-sm',
  medium: 'shadow-md',
  large: 'shadow-lg',
} as const

// Responsive breakpoint helpers
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const
