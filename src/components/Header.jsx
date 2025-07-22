import React from 'react'

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              📱
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              VideoDownloader
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#tiktok" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition">
              TikTok
            </a>
            <a href="#youtube" className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition">
              YouTube
            </a>
            <a href="#instagram" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition">
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}