/**
 * Prefix a public-folder path with Vite's base URL (required for GitHub Pages).
 * Input: "/images/logo.png" or "images/logo.png". Output: "/YardComponents/images/logo.png" in prod.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
