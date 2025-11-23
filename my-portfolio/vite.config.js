import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using custom domain (www.veliunusdu.site) so base must be '/'
// If switching back to GitHub project pages, change to '/react-portfolio/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
