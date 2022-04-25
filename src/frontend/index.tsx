import React from 'react'
import { createRoot } from 'react-dom/client'
import { PositionRefined } from '../data'
import { getTimeStringAtTimeZone } from '../util'
// Vite does not support assert yet
import processedData from '../../public/data-processed.json'// assert { type: "json" }
import { PositionsTable } from './components/PositionsTable'
import 'virtual:windi.css'
// import 'animate.css'

import './index.css'

export type Theme = 'dracula' | 'material'

export interface NavProps {
  onThemeChange?: (theme: 'dracula' | 'material') => void
}

function Nav ({ onThemeChange, }: NavProps) {
  // Using https://github.com/upupming/tailwindcss-themeable for theme switching
  const [theme, setTheme] = React.useState<Theme>('dracula')
  return (
    <nav className='bg-themeable-background flex justify-between items-center p-4 border-themeable-selection border-b-width-1px sticky top-0 z-10'>
      <h1 className='text-2xl font-semibold'>new-grad-positions</h1>
      <div className='flex items-center space-x-6'>
        <button
          className='inline-flex text-xl p-2 items-center' onClick={() => {
            setTheme((theme) => {
              let newTheme: Theme
              if (theme === 'dracula') {
                newTheme = 'material'
              } else {
                newTheme = 'dracula'
              }
              onThemeChange?.(newTheme)
              return newTheme
            })
          }}
        >
          <svg className='nav-icon' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' style={{ display: theme === 'dracula' ? undefined : 'none', }}><path fill='currentColor' d='M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z' /></svg>
          <svg className='nav-icon' preserveAspectRatio='xMidYMid meet' viewBox='0 0 512 512' style={{ display: theme === 'material' ? undefined : 'none', }}><path d='M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4z' fill='currentColor' /><path d='M256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4z' fill='currentColor' /><path d='M125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4z' fill='currentColor' /><path d='M448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4z' fill='currentColor' /><path d='M152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5z' fill='currentColor' /><path d='M359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5z' fill='currentColor' /><path d='M130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z' fill='currentColor' /><path d='M370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7z' fill='currentColor' /><path d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z' fill='currentColor' /></svg>
        </button>
        <span>
          <a id='a-to-github' aria-label='GitHub 链接' href='https://github.com/upupming/new-grad-positions/'><svg aria-hidden='true' role='img' className='octicon octicon-mark-github nav-icon' viewBox='0 0 16 16' fill='currentColor' style={{ display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible', }}><path fillRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' /></svg></a>
        </span>
      </div>
    </nav>
  )
}

function Footer () {
  return (
    <footer className='p-4 flex flex-col items-center justify-center bg-themeable-selection space-y-4'>
      <div><a href='./data-processed.json'>网页数据</a>上次更新于 {getTimeStringAtTimeZone(new Date(processedData.updatedAt))} (UTC+8)</div>
      <div><a href='https://github.com/upupming/new-grad-positions/edit/main/src/data.ts' target='_blank' rel='noreferrer'>前往 GitHub 新增数据 👉 </a></div>
      <div className='text-xl w-full flex flex-col justify-center items-center'>
        <div>Made with <span className='text-themeable-pink scale-90 animate-love inline-block'>♥</span> by  <a className='text-themeable-green' href='https://github.com/upupming' target='_blank' rel='noreferrer'>Yiming Li</a></div>
        <div>under <a className='text-themeable-orange' href='https://github.com/upupming/new-grad-positions/blob/main/LICENSE' target='blank'>MIT license</a></div>
      </div>
    </footer>
  )
}

function App () {
  const [theme, setTheme] = React.useState<Theme>('dracula')
  return (
    <div className={`flex flex-col bg-themeable-background h-screen text-themeable-foreground themeable-${theme}`}>
      <Nav onThemeChange={setTheme} />
      <PositionsTable positions={processedData.positions as PositionRefined[]} />
      <Footer />
    </div>
  )
}

const container = document.getElementById('root')
if (container == null) throw new Error('Cannot found root container to mount React App')
const root = createRoot(container)
root.render(<App />)
