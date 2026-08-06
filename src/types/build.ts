/** Shared types for PC catalog builds. */

export type BuildTier = 'starter' | 'performance' | 'flagship' | 'creator'

export interface BuildSpec {
  label: string
  value: string
}

export interface PcBuild {
  id: string
  name: string
  tagline: string
  tier: BuildTier
  price: number
  /** Primary / fallback thumbnail. */
  image: string
  /** Cropped single-PC angle slides for the catalog carousel. */
  slides?: string[]
  featured?: boolean
  specs: {
    cpu: string
    gpu: string
    ram: string
    storage: string
  }
}
