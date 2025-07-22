import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import DownloadTabs from './components/DownloadTabs'
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎬 All Video Downloader
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Download videos from TikTok, YouTube, and Instagram with ease!
          </p>
        </div>
        <DownloadTabs />
      </main>
      <Footer />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  )
}