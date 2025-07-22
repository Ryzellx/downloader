import React from 'react'

export default function VideoResult({ data, platform }) {
  if (!data) return null

  const handleDownload = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename || 'video'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const renderTikTokResult = () => (
    <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt="Video thumbnail"
            className="w-20 h-20 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{data.title || 'TikTok Video'}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">@{data.author || 'unknown'}</p>
        </div>
      </div>
      
      {data.videoUrl && (
        <button
          onClick={() => handleDownload(data.videoUrl, `tiktok_${Date.now()}.mp4`)}
          className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          📥 Download Video (No Watermark)
        </button>
      )}
    </div>
  )

  const renderYouTubeResult = () => (
    <div className="bg-gradient-to-r from-red-50 to-red-50 dark:from-red-900/20 dark:to-red-900/20 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt="Video thumbnail"
            className="w-20 h-20 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{data.title || 'YouTube Video'}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{data.author || 'Unknown Channel'}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        {data.formats?.map((format, index) => (
          <button
            key={index}
            onClick={() => handleDownload(format.url, `youtube_${data.title || Date.now()}.${format.ext}`)}
            className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-between"
          >
            <span>📥 {format.quality} - {format.ext?.toUpperCase()}</span>
            <span className="text-sm opacity-80">{format.filesize || 'Unknown size'}</span>
          </button>
        )) || (
          <button
            onClick={() => handleDownload(data.videoUrl, `youtube_${Date.now()}.mp4`)}
            className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            📥 Download Video
          </button>
        )}
      </div>
    </div>
  )

  const renderInstagramResult = () => (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt="Video thumbnail"
            className="w-20 h-20 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{data.title || 'Instagram Video'}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">@{data.author || 'unknown'}</p>
        </div>
      </div>
      
      {data.videoUrl && (
        <button
          onClick={() => handleDownload(data.videoUrl, `instagram_${Date.now()}.mp4`)}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          📥 Download Video
        </button>
      )}
    </div>
  )

  return (
    <div className="animate-slideUp">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">✨ Download Ready!</h4>
      {platform === 'tiktok' && renderTikTokResult()}
      {platform === 'youtube' && renderYouTubeResult()}
      {platform === 'instagram' && renderInstagramResult()}
    </div>
  )
}