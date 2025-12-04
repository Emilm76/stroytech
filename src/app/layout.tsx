import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { ReactNode } from 'react'
import ReactLenis from 'lenis/react'

const InterFont = Inter({
  subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
  title: 'Стройтех',
  description:
    'Стройтех — это онлайн — университет ГК «ЮгСтройИнвест», созданный для развития и прокачки сотрудников внутри компании. Здесь собраны все ключевые знания и инструменты, необходимые для эффективной работы в строительной отрасли — от навыков коммуникации и продаж до понимания бизнес-процессов и внутренней культуры компании',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={InterFont.className}>
        <ReactLenis root />
        {children}
      </body>
    </html>
  )
}
