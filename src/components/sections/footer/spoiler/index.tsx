'use client'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useRef, useState } from 'react'

export function Spoiler({
  title,
  tel,
  text,
}: {
  title: string
  tel: string
  text: string
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  const telDigitsOnly = tel.replace(/[^\d]/g, '')
  const isOpen = height !== 0

  function toggleSpoiler() {
    if (!wrapperRef.current || !innerRef.current) return

    setHeight((ls) => {
      if (!innerRef.current) return 0
      if (ls === 0) return innerRef.current.offsetHeight
      return 0
    })
  }

  return (
    <div className={clsx(styles.spoiler, isOpen && styles.open)}>
      <div className={clsx('h4', styles.title)} onClick={toggleSpoiler}>
        {title}
      </div>
      <div
        className={styles.wrapper}
        style={{ height: height }}
        ref={wrapperRef}
      >
        <div className={styles.inner} ref={innerRef}>
          <a className="label label--blue" href={`tel:+${telDigitsOnly}`}>
            {tel}
          </a>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
