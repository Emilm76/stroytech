'use client'
import styles from './index.module.scss'
import { useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Bg1Img from '@/images/plan-start.jpg'
import Bg2Img from '@/images/plan-smart.jpg'
import Bg3Img from '@/images/plan-pro.jpg'

type Slide = {
  img: StaticImageData
  name: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    img: Bg1Img,
    name: 'Start',
    title: 'Для новых сотрудников и для тех, кто хочет освежить знания',
    description:
      'Start - это первый шаг в системе обучения «Стройтех». Программа помогает новичкам разобраться в структуре компании, ценностях ЮгСтройИнвест, продукте и стандартах клиентского сервиса. Курс включает основы продаж и работу в CRM. После прохождения вы сможете уверенно вести клиентов и показывать первые результаты уже с первых дней.',
  },
  {
    img: Bg2Img,
    name: 'Smart',
    title: 'От теории к действию - Сделай шаг к результату',
    description:
      'Smart - это следующий этап развития. Программа направлена на формирование стратегического и критического мышления, развитие навыков ведения переговоров и аналитики. Мы помогаем сотрудникам стать уверенными экспертами и добиваться стабильных результатов в продажах недвижимости.',
  },
  {
    img: Bg3Img,
    name: 'PRO',
    title: 'Стань лидером своей команды',
    description:
      ' Pro - это уровень для тех, кто уже уверенно работает в продажах и стремится к большему. Программа развивает лидерские качества, управленческое мышление и умение вдохновлять команду. Участники осваивают навыки стратегических переговоров, построения долгосрочных отношений с клиентами и эффективного управления результатами. Курс включает модули по психологии, коммуникации и современным методам управления.',
  },
]

export function PlansSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const desc = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    function updateHeight() {
      if (desc.current) {
        const textNodes: NodeListOf<HTMLDivElement> =
          desc.current.querySelectorAll?.(`.${styles.text}`)

        const currentText = textNodes[activeSlideIndex]

        if (currentText) {
          desc.current.style.height = `${currentText.offsetHeight}px`
        }
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [activeSlideIndex])

  return (
    <section className="section-pt">
      <div className="container">
        <div className={styles.wrapper}>
          {slides.map((slide, index) => {
            const opacity = activeSlideIndex === index ? '1' : '0'
            return (
              <Image
                style={{ opacity: opacity }}
                className={styles.imgBg}
                src={slide.img}
                alt={`${slide.name} формат`}
                key={index}
              />
            )
          })}

          <div className={styles.content}>
            <div className={styles.textWrap} ref={desc}>
              {slides.map((slide, index) => {
                const opacity = activeSlideIndex === index ? '1' : 0
                return (
                  <div
                    style={{ opacity: opacity }}
                    className={styles.text}
                    key={index}
                  >
                    <h2 className="h3">{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                )
              })}
            </div>

            <div className={styles.tabsList}>
              {slides.map((slide, index) => {
                return (
                  <div
                    className={clsx(
                      'tab subtitle',
                      activeSlideIndex === index && 'active'
                    )}
                    onClick={() => setActiveSlideIndex(index)}
                    key={index}
                  >
                    {slide.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
