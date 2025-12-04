'use client'
import styles from './index.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import { JSX } from 'react'
import { DotButton, useDotButton } from '@/components/ui/carousel/dot-buttons'

export function Carousel({
  slides,
  wrapperClassName,
}: {
  slides: JSX.Element[]
  wrapperClassName?: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    breakpoints: {
      '(min-width: 767px)': { active: false },
    },
  })

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={clsx(wrapperClassName, 'embla__container')}>
          {slides}
        </div>
      </div>

      <div className="embla__dots embla__dots--lg">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={clsx(
              'embla__dot',
              index === selectedIndex && 'embla__dot--selected'
            )}
          />
        ))}
      </div>
    </div>
  )
}
