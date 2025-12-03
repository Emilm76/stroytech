'use client'
import styles from './index.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import { LazyLoadImage, useSlidesInView } from '@/components/ui/carousel/lay-load-image'
import { StaticImageData } from 'next/image'
import { useTweenScale } from '@/components/ui/carousel/tween-scale'
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/ui/carousel/arrow-buttons'
import { useEffect, useState } from 'react'

type Slide = {
  img: StaticImageData
  name: string
  description: string
  tag: string
}

export function Carousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const slidesInView = useSlidesInView(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  useTweenScale(emblaApi)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setCurrentSlideIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  const currentSlide = slides[currentSlideIndex]

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className={clsx(styles.slide, 'embla__slide')} key={index}>
              <div className={clsx('embla__slideWrapper', styles.slideWrapper)}>
                <LazyLoadImage
                  imgSrc={slide.img}
                  alt=""
                  index={index}
                  inView={slidesInView.indexOf(index) > -1}
                  key={index}
                />
                <div className={styles.tag}>
                  <span>{slide.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <h3 className="h4">{currentSlide.name}</h3>
        <p>{currentSlide.description}</p>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}
