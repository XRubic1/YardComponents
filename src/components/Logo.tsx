interface LogoProps {
  /** Compact nav size vs. larger brand mark. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'h-12 w-auto',
  md: 'h-16 w-auto',
  lg: 'h-24 w-auto md:h-28',
} as const

/**
 * Brand mark using the official Yard Components transparent logo.
 * Inputs: optional size + className. Output: accessible logo image.
 */
export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <img
      src="/images/logo-mark.png"
      alt="Yard Components"
      className={`${sizeMap[size]} object-contain object-left ${className}`}
    />
  )
}
