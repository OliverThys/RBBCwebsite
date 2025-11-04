// Utility function to get the correct image path with base URL
export const getImagePath = (path: string): string => {
  // If path already starts with http or https, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // Get base URL from Vite (includes /RBBCwebsite/ in production)
  const base = import.meta.env.BASE_URL
  
  // Remove leading slash from path if present, then add base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return `${base}${cleanPath}`
}

