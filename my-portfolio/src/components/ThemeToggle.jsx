import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const checked = theme === 'dark'

  return (
    <div className="power-switch">
      <input
        id="theme-toggle-checkbox"
        type="checkbox"
        checked={checked}
        onChange={toggle}
        aria-label={checked ? 'Switch to light theme' : 'Switch to dark theme'}
      />
      <div className="button" aria-hidden>
        <svg className="power-off" viewBox="0 0 150 150" aria-hidden>
          <use xlinkHref="#line" className="line" />
          <use xlinkHref="#circle" className="circle" />
        </svg>
        <svg className="power-on" viewBox="0 0 150 150" aria-hidden>
          <use xlinkHref="#line" className="line" />
          <use xlinkHref="#circle" className="circle" />
        </svg>
      </div>
    </div>
  )
}
