import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function MuiThemeProvider({ children }) {
  const getMode = () => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }

  const [mode, setMode] = useState(getMode())

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setMode(root.classList.contains('dark') ? 'dark' : 'light')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: { main: '#009966' },
        secondary: { main: mode === 'dark' ? '#fbbf24' : '#f59e0b' },
        background: mode === 'dark'
          ? { default: '#0b0f12', paper: '#0f172a' }
          : { default: '#ffffff', paper: '#ffffff' },
      },
      typography: {
        fontFamily: 'Roboto, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif',
      },
      shape: { borderRadius: 8 },
    })
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider