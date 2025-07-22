import React, { useState } from 'react'
import TikTokDownloader from './TikTokDownloader'
import YouTubeDownloader from './YouTubeDownloader'
import InstagramDownloader from './InstagramDownloader'

const tabs = [
  { id: 'tiktok', label: '🎵 TikTok', icon: '🎵', color: 'from-pink-500 to-red-500' },
  { id: 'youtube', label: '🎬 YouTube', icon: '🎬', color: 'from-red-500 to-red-600' },
  { id: 'instagram', label: '📷 Instagram', icon: '📷', color: 'from-purple-500 to-pink-500' }
]

export default function DownloadTabs() {
  const [activeTab, setActiveTab] = useState('tiktok')

  const renderContent = () => {
    switch (activeTab) {
      case 'tiktok':
        return <TikTokDownloader />
      case 'youtube':
        return <YouTubeDownloader />
      case 'instagram':
        return <InstagramDownloader />
      default:
        return <TikTokDownloader />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-6 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-lg mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="p-6 min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  )
}