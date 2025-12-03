import clsx from 'clsx'
import type { AnchorHTMLAttributes } from 'react'
import styles from './index.module.scss'
import { ArrowIcon } from '@/icons/arrow'

export function ExternalLink({
  className,
  children,
  ...props
}: { className?: string; children: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={clsx(styles.link, className)} target="_blank">
      <span>{children}</span>
      <ArrowIcon className={styles.arrow} />
    </a>
  )
}
