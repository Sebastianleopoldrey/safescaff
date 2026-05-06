export const featureFlags = {
  showProjectCases: false,
  ostraSjukhusetCase: true,
  showTestimonials: true,
  careersPage: false,
  gaisSponsorBadge: true,
  customCursor: true,
  preloader: true,
} as const

export type FeatureFlag = keyof typeof featureFlags
