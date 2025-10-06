import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const checked = theme === 'dark'

  return (
    <div className="theme-toggle-wrapper">
      <input
        id="theme-toggle-checkbox"
        className="theme-toggle-input"
        type="checkbox"
        checked={checked}
        onChange={toggle}
        aria-label={checked ? 'Switch to light theme' : 'Switch to dark theme'}
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-animated" aria-hidden>
        <span className="thumb" aria-hidden></span>
      </label>
    </div>
  )
}
