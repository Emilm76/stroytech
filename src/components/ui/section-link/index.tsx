'use client'
import { useLenis } from 'lenis/react'
import { MouseEvent, type AnchorHTMLAttributes } from 'react'

function easeInOutSine(x: number) {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

export function SectionLink({
  href,
  children,
  ...props
}: {
  href: string
  children: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const lenis = useLenis()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!lenis && !lenis) return

    e.preventDefault()
    lenis.scrollTo(href, { duration: 1.3, easing: easeInOutSine })
  }

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
