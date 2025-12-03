'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { StaticImageData } from 'next/image'

export function useSlidesInView(emblaApi?: EmblaCarouselType | null) {
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const updateSlidesInView = useCallback(function handleSlidesInView(api: EmblaCarouselType) {
    setSlidesInView((current) => {
      if (current.length === api.slideNodes().length) {
        api.off('slidesInView', handleSlidesInView)
      }
      const inView = api.slidesInView().filter((index) => !current.includes(index))
      return current.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)

    return () => {
      emblaApi.off('slidesInView', updateSlidesInView)
      emblaApi.off('reInit', updateSlidesInView)
    }
  }, [emblaApi, updateSlidesInView])

  return slidesInView
}

export function LazyLoadImage({
  imgSrc,
  alt,
  inView,
}: {
  imgSrc: StaticImageData
  alt?: string | null
  index: number
  inView: boolean
}) {
  return inView && <Image src={imgSrc} alt={alt ?? ''} />
}
