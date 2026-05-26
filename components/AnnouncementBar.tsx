'use client'

import React from 'react'

const messages = [
  { text: 'FREE SHIPPING ON PREPAID ABOVE ₹1499', icon: 'truck' },
  { text: 'COD — PAY WHEN IT ARRIVES', icon: 'cod' },
  { text: '7-DAY HASSLE-FREE EXCHANGE', icon: 'return' },
  { text: 'NEW DROP LIVE. MOVE FAST →', icon: 'fire', accent: true },
]

function TruckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function CodIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  )
}

function ReturnIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-4.77" />
    </svg>
  )
}

function FireIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.73 2C10.12 5.17 8.5 7.83 9.5 11c-2-1.17-3-3.67-2.5-5.83C4 7.83 3 12.17 5 15.17c1 2.16 3 4 6 4.5V21h2v-1.33c3-.5 5-2.34 6-4.5C21 8.17 17 5 12.73 2z" />
    </svg>
  )
}

const icons = { truck: TruckIcon, cod: CodIcon, return: ReturnIcon, fire: FireIcon } as const

const repeated = [...messages, ...messages, ...messages, ...messages]

export function AnnouncementBar() {
  return (
    <div className="bg-[#E84A10] text-white overflow-hidden h-9 flex items-center select-none">
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'ticker 32s linear infinite' }}
      >
        {repeated.map((msg, i) => {
          const Icon = icons[msg.icon as keyof typeof icons]
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-8 text-[10.5px] sm:text-xs font-semibold tracking-[0.18em] uppercase ${
                msg.accent ? 'font-extrabold' : ''
              }`}
            >
              <Icon />
              {msg.text}
              <span className="opacity-25 pl-6">|</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
