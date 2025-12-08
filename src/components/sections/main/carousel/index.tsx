'use client'
import styles from './index.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { JSX } from 'react'
import clsx from 'clsx'
import { DotButton, useDotButton } from '@/components/ui/carousel/dot-buttons'
import AutoScroll from 'embla-carousel-auto-scroll'

export function Carousel({ slides }: { slides: JSX.Element[] }) {
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
        <div className="embla__container">{slides}</div>
      </div>

      <div className="embla__dots">
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

export function CarouselLoop({
  slides,
  className,
}: {
  slides: string[]
  className?: string
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 1.5 }),
  ])

  return (
    <div className={clsx('embla', className)} ref={emblaRef}>
      <div className="embla__container">
        {slides.map((text, index) => (
          <div
            className={clsx(styles.slideTag, 'embla__slide subtitle')}
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
