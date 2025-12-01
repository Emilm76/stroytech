'use client'
import { DotButton, useDotButton } from '@/components/ui/carousel/dot-buttons'
import styles from './index.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { JSX } from 'react'
import clsx from 'clsx'

export function Carousel({ slides }: { slides: JSX.Element[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({})

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{slides}</div>
      </div>

      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} className={clsx('embla__dot', index === selectedIndex && ' embla__dot--selected')} />
        ))}
      </div>
    </div>
  )
}
