import React from 'react'

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 z-50 transition-all duration-300 transform hover:scale-110 border
