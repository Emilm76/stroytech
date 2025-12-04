'use client'
import styles from './index.module.scss'
import { useLayoutEffect, useRef, useState } from 'react'
import { Carousel } from './carousel'
import clsx from 'clsx'
import { ArrowDownIcon } from '@/icons/arrow-down'

type SpoilerType = {
  title: string
  text?: string | string[]
}

type Slide = {
  name: string
  title: string
  spoilers: SpoilerType[]
}

const slides: Slide[] = [
  {
    name: 'Функции LMS',
    title: 'LMS (Learning Management System)',
    spoilers: [
      {
        title: 'Создание контента',
        text: [
          'Курсы, тренинги, вебинары, инструкции и тесты создаются внутри системы или загружаются извне.',
          'Материалы можно оформлять с видео, изображениями, интерактивными заданиями.',
        ],
      },
      {
        title: 'Организация обучения',
        text: [
          'Сотрудники получают персональные программы (например, уровень Start, Smart, Pro).',
          'Система автоматически назначает новые курсы, выдает тесты и напоминания.',
        ],
      },
      {
        title: 'Прохождение обучения',
        text: [
          'Курсы, тренинги, вебинары, инструкции и тесты создаются внутри системы или загружаются извне.',
          'Материалы можно оформлять с видео, изображениями, интерактивными заданиями.',
        ],
      },
      {
        title: 'Мониторинг и аналитика',
        text: [
          'Руководитель видит результаты каждого участника, процент выполнения, средний балл, активность.',
          'Формируются рейтинги по городам, отделам, филиалам.',
        ],
      },
    ],
  },
  {
    name: 'Как работает LMS',
    title: 'Как LMS будет работать на сайте «Стройтех»',
    spoilers: [
      {
        title: 'Встроена в корпоративный сайт',
        text: 'Раздел «Обучение» будет интегрирован с LMS: вход по логину, доступ к курсам, тестам и рейтингу.',
      },
      {
        title: 'Персональные кабинеты сотрудников',
        text: 'В каждом - своя траектория обучения, история прохождения курсов, результаты тестов и достижения.',
      },
      {
        title: 'Панель администратора',
        text: 'Для тренеров и кураторов - возможность загружать контент, отслеживать статистику и формировать отчёты.',
      },
      {
        title: 'Интеграция с корпоративными программами',
        text: 'Возможна связка с CRM, внутренним рейтингом или мотивационной системой (баллы, уровни).',
      },
    ],
  },
  {
    name: 'Для чего LMS компании Стройтех',
    title: 'Для чего нужна LMS компании «Стройтех»',
    spoilers: [
      {
        title: 'Стандартизирует обучение по всем филиалам.',
      },
      {
        title: 'Экономит время и ресурсы на офлайн-тренинги.',
      },
      {
        title: 'Повышает вовлечённость и мотивацию сотрудников.',
      },
      {
        title:
          'Позволяет объективно оценивать знания и эффективность обучения.',
      },
    ],
  },
]

export function LMSSection() {
  const [openSlideIndex, setOpenSlideIndex] = useState(0)

  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className="section-title">
          <h2 className="h2">LMS</h2>
          <p>
            это дистанционная система обучения, цифровая платформа, которая
            позволяет организовать, проводить и контролировать обучение
            сотрудников в онлайн-формате.
          </p>
        </div>

        <Carousel
          wrapperClassName={styles.wrapper}
          slides={slides.map((slide, index) => (
            <LMSSlide
              data={slide}
              isOpen={openSlideIndex === index}
              onClick={() => setOpenSlideIndex(index)}
              key={index}
            />
          ))}
        />
      </div>
    </section>
  )
}

function LMSSlide({
  data,
  onClick,
  isOpen,
}: {
  data: Slide
  onClick: () => void
  isOpen: boolean
}) {
  const [openSpoilerIndex, setOpenSpoilerIndex] = useState(0)

  return (
    <div
      className={clsx(styles.slide, 'embla__slide', isOpen && styles.slideOpen)}
    >
      <div className={clsx(styles.slideName, 'subtitle')} onClick={onClick}>
        <span>{data.name}</span>
        <EdgeIconLg />
        <EdgeIconSm />
      </div>
      <div className={styles.slideContent}>
        <div className={styles.slideSpoilers}>
          <h3 className="h3">{data.title}</h3>
          {data.spoilers.map((spoiler, index) => (
            <Spoiler
              data={spoiler}
              isOpen={openSpoilerIndex === index}
              index={index}
              onToggle={() =>
                setOpenSpoilerIndex(openSpoilerIndex === index ? -1 : index)
              }
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Spoiler({
  data,
  isOpen,
  index,
  onToggle,
}: {
  data: SpoilerType
  isOpen: boolean
  index: number
  onToggle: () => void
}) {
  const slide = useRef<HTMLDivElement>(null)
  const descWrap = useRef<HTMLDivElement>(null)
  const desc = useRef<HTMLDivElement>(null)

  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    if (isOpen && desc.current) {
      setContentHeight(desc.current.offsetHeight)
    }
  }, [isOpen, data.text])

  const height = isOpen ? `${contentHeight}px` : '0'

  const isSpoiler = !!data.text

  return (
    <div
      className={clsx(
        styles.spoiler,
        isSpoiler && styles.isSpoiler,
        isOpen && styles.spoilerOpen
      )}
      ref={slide}
    >
      <div className={clsx(styles.spoilerTitle, 'subtitle')} onClick={onToggle}>
        <span>
          {`${index + 1}. `}
          {data.title}
        </span>
        <ArrowDownIcon />
      </div>
      {isSpoiler && (
        <div
          className={styles.spoilerWrapper}
          style={{ height: height }}
          ref={descWrap}
        >
          <div className={styles.spoilerContent} ref={desc}>
            {Array.isArray(data.text)
              ? data.text.map((li, i) => <p key={i}>– {li}</p>)
              : data.text}
          </div>
        </div>
      )}
    </div>
  )
}

function EdgeIconLg() {
  return (
    <svg
      className={styles.edgeIconLg}
      viewBox="0 0 104 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M104 87.5H0V0H21.7543C27.9045 0 33.5103 3.52518 36.1748 9.0682L57.1244 52.6504C59.7888 58.1934 65.3947 61.7186 71.5448 61.7186H88C96.8365 61.7186 104 68.8821 104 77.7186V87.5Z" />
    </svg>
  )
}

function EdgeIconSm() {
  return (
    <svg
      className={styles.edgeIconSm}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      fill="none"
      viewBox="0 0 20 19"
    >
      <path d="M20 0H0v19C.5 9 9 0 20 0" />
    </svg>
  )
}
