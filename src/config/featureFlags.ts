export const featureFlags = {
  showProjectCases: false,
  ostraSjukhusetCase: true,
  // Off until real customer quotes are collected — current copy is placeholder.
  showTestimonials: false,
  careersPage: false,
  gaisSponsorBadge: true,
  customCursor: true,
  preloader: true,
} as const

export type FeatureFlag = keyof typeof featureFlags
