import React, { useState } from 'react'
import { downloadVideo } from '../services/api'
import DownloadForm from './DownloadForm'
import VideoResult from './VideoResult'

export default function TikTokDownloader() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleDownload = async (url) => {
    if (!url.includes('tiktok.com')) {
      setError('Please enter a valid TikTok URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const data = await downloadVideo(url, 'tiktok')
      setResult(data)
    } catch (err) {
      setError('Failed to download video. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🎵 TikTok Video Downloader
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Download TikTok videos without watermark in high quality
        </p>
      </div>

      <DownloadForm
        onSubmit={handleDownload}
        loading={loading}
        placeholder="Paste TikTok video URL here..."
        buttonText="Download TikTok Video"
        buttonColor="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
      />

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
        </div>
      )}

      {result && <VideoResult data={result} platform="tiktok" />}
    </div>
  )
}