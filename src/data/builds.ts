import type { PcBuild } from '../types/build'

/** Cropped single-PC slides from the studio triptych (one visible per frame). */
export const pcSlides = [
  '/images/catalog/slide-01.jpg',
  '/images/catalog/slide-02.jpg',
  '/images/catalog/slide-03.jpg',
] as const

/** Catalog of Yard Components custom builds. */
export const builds: PcBuild[] = [
  {
    id: 'pulse-entry',
    name: 'Pulse Entry',
    tagline: 'Esports-ready without the excess.',
    tier: 'starter',
    price: 1299,
    image: pcSlides[0],
    slides: [...pcSlides],
    specs: {
      cpu: 'Ryzen 5 5600',
      gpu: 'RTX 4060 8GB',
      ram: '32GB DDR4 3600MHz',
      storage: '1TB NVMe SSD',
    },
  },
  {
    id: 'velocity-pro',
    name: 'Velocity Pro',
    tagline: '1440p gaming with headroom to spare.',
    tier: 'performance',
    price: 1899,
    image: pcSlides[1],
    slides: [...pcSlides],
    specs: {
      cpu: 'Ryzen 7 5700X',
      gpu: 'RTX 4070 Super 12GB',
      ram: '32GB DDR4 3600MHz',
      storage: '2TB NVMe SSD',
    },
  },
  {
    id: 'apex-x3d',
    name: 'Apex X3D',
    tagline: 'High performance. Zero compromises.',
    tier: 'flagship',
    price: 2799,
    image: pcSlides[0],
    slides: [...pcSlides],
    featured: true,
    specs: {
      cpu: 'Ryzen 7 5800X3D',
      gpu: 'RTX 3080 Ti 12GB',
      ram: '64GB DDR4 3600MHz',
      storage: '4TB NVMe SSD',
    },
  },
  {
    id: 'forge-creator',
    name: 'Forge Creator',
    tagline: 'Render, edit, and stream without waiting.',
    tier: 'creator',
    price: 2499,
    image: pcSlides[2],
    slides: [...pcSlides],
    specs: {
      cpu: 'Ryzen 9 5900X',
      gpu: 'RTX 4070 Ti 12GB',
      ram: '64GB DDR4 3600MHz',
      storage: '2TB NVMe + 4TB HDD',
    },
  },
  {
    id: 'shadow-ultra',
    name: 'Shadow Ultra',
    tagline: '4K-capable power for competitive edge.',
    tier: 'flagship',
    price: 3299,
    image: pcSlides[1],
    slides: [...pcSlides],
    specs: {
      cpu: 'Ryzen 7 7800X3D',
      gpu: 'RTX 4080 Super 16GB',
      ram: '64GB DDR5 6000MHz',
      storage: '4TB NVMe SSD',
    },
  },
  {
    id: 'core-compact',
    name: 'Core Compact',
    tagline: 'Small footprint. Serious frame rates.',
    tier: 'starter',
    price: 1099,
    image: pcSlides[0],
    slides: [...pcSlides],
    specs: {
      cpu: 'Ryzen 5 5600G',
      gpu: 'RTX 4060 8GB',
      ram: '16GB DDR4 3200MHz',
      storage: '1TB NVMe SSD',
    },
  },
]

export const tierLabels: Record<PcBuild['tier'], string> = {
  starter: 'Starter',
  performance: 'Performance',
  flagship: 'Flagship',
  creator: 'Creator',
}

/** Featured Apex build specs shown in the hero showcase. */
export const featuredSpecs = [
  {
    id: 'cpu',
    title: 'CPU',
    detail: 'RYZEN 7 5800X3D',
    sub: '8 Cores / 16 Threads',
  },
  {
    id: 'gpu',
    title: 'GPU',
    detail: 'RTX 3080 Ti 12GB',
    sub: 'GDDR6X',
  },
  {
    id: 'ram',
    title: 'RAM',
    detail: '64GB DDR4',
    sub: '(2x32GB) 3600MHz',
  },
  {
    id: 'storage',
    title: 'STORAGE',
    detail: '4TB NVMe SSD',
    sub: '(2x2TB) Samsung EVO',
  },
] as const
