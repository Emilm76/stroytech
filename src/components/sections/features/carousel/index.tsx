'use client'
import styles from './index.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import { JSX, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

export function Carousel({ slides }: { slides: JSX.Element[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    breakpoints: {
      '(min-width: 1023px)': { active: false },
    },
  })
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // eslint-disable-next-line
    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={clsx(styles.grid, 'embla__container')}>
          {slides.map((slide, index) => (
            <div className={clsx(styles.slide, 'embla__slide')} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={clsx(styles.progress, 'embla__progress')}>
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  )
}
