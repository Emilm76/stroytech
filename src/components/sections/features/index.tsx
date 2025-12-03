'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './index.module.scss'
import Bg1Img from '@/images/features/1.jpg'
import Bg2Img from '@/images/features/2.jpg'
import Bg3Img from '@/images/features/3.jpg'
import Bg4Img from '@/images/features/4.jpg'
import Bg5Img from '@/images/features/5.jpg'
import Bg6Img from '@/images/features/6.jpg'
import Bg7Img from '@/images/features/7.jpg'
import Bg8Img from '@/images/features/8.jpg'
import Bg9Img from '@/images/features/9.jpg'
import { useRef } from 'react'
import { Carousel } from './carousel'
import clsx from 'clsx'

type slide = {
  img: StaticImageData
  title: string
  subtitle: string
  description: string
}

const slides: slide[] = [
  {
    img: Bg1Img,
    title: 'AmoCRM',
    subtitle: 'Превращаем лиды в лояльных клиентов',
    description:
      'После прохождения курса вы освоите полный цикл работы в AmoCRM: от приёма и обработки заявок до сопровождения клиента на всех этапах сделки. Вы научитесь грамотно вести коммуникацию, соблюдать стандарты компании и эффективно управлять воронкой продаж, повышая конверсию и качество сервиса.',
  },
  {
    img: Bg2Img,
    title: 'Allio',
    subtitle: 'От задач к результатам',
    description:
      'Интенсивный курс, который научит эффективно работать в Allio и использовать систему для управления задачами и проектами. Вы освоите практические инструменты, повышающие личную и командную эффективность, научитесь планировать, контролировать и достигать цели в срок.',
  },
  {
    img: Bg3Img,
    title: 'Контроль качества и количества',
    subtitle: 'Экспертиза, которая говорит языком бизнеса',
    description:
      'Курс формирует аналитическое мышление и помогает смотреть на процессы глазами эксперта. Вы научитесь работать с показателями, видеть взаимосвязи между данными и принимать решения, влияющие на ключевые бизнес-результаты компании.',
  },
  {
    img: Bg4Img,
    title: 'Продукт/компания',
    subtitle: 'УТП «ЮгСтройИнвест» - ключ к сделке',
    description:
      'Этот курс — ключ к глубокому пониманию уникального торгового предложения ГК «ЮгСтройИнвест». Вы не просто изучите объекты, а освоите философию компании, научитесь на практике демонстрировать ключевые конкурентные преимущества и уверенно отвечать на самые сложные вопросы клиентов.',
  },
  {
    img: Bg5Img,
    title: 'Аналитика',
    subtitle: 'Как читать цифры и увеличивать конверсию',
    description:
      'Практический курс для тех, кто хочет научиться превращать данные в реальные управленческие решения. Вы узнаете, как анализировать отчёты, находить точки роста и повышать эффективность продаж. Курс поможет видеть за цифрами стратегию и использовать аналитику для личного и командного роста.',
  },
  {
    img: Bg6Img,
    title: 'Маркетинг и реклама',
    subtitle: 'Как упаковать недвижимость так, чтобы купили сразу',
    description:
      'Этот курс раскрывает ключевые принципы современного маркетинга в недвижимости. Вы узнаете, как создавать сильные офферы, визуально и смыслово упаковывать продукт,  выстраивать системный маркетинг. Программа сочетает практику, реальные кейсы и инструменты, привлекающие клиентов эффективно.',
  },
  {
    img: Bg7Img,
    title: 'Продажи (прямые для менеджеров ОП)',
    subtitle: 'От звонка до брони: закрывай 90% встреч',
    description:
      'Мы не будем говорить о «техниках общения». Мы разберем пошаговую систему действий, которая превращает холодный контакт в твердую бронь. Вы научитесь не «общаться», а управлять клиентом, мягко подводя его к нужному вам решению.',
  },
  {
    img: Bg8Img,
    title: 'Продажи (риелт-направление)',
    subtitle: 'Риелтор или эксперт? Выбор, который определит ваш доход',
    description:
      'По итогам курса вы создадите систему, где клиенты идут к вам, доверяя вашему экспертного статусу. Научитесь использовать вместо интуиции конкретные данные, а холодные звонки превратите в осмысленную работу с базой.',
  },
  {
    img: Bg9Img,
    title: 'Корпоративные коммуникации',
    subtitle: 'Ваш профиль в соцсетях - актив или угроза?',
    description:
      'Курс посвящен корпоративным коммуникациям, поведению в публичном пространстве и правилам работы в соцсетях. Изучаются регламенты, деловое общение и типичные ошибки, чтобы стать экспертом и амбассадором бренда.',
  },
]

export function FeaturesSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <h2 className="h2 section-title">
          Сделайте первый шаг к&nbsp;карьере <br />
          вашей мечты
        </h2>

        <Carousel
          slides={slides.map((slide, index) => (
            <Feature data={slide} key={index} />
          ))}
        />
      </div>
    </section>
  )
}

function Feature({ data }: { data: slide }) {
  const slide = useRef<HTMLDivElement>(null)
  const descWrap = useRef<HTMLDivElement>(null)
  const desc = useRef<HTMLParagraphElement>(null)

  function onHover() {
    if (!descWrap.current || !desc.current || !slide.current) return

    descWrap.current.style.height = `${desc.current.offsetHeight}px`
    slide.current.classList.add(styles.slideHover)
  }

  function onLeave() {
    if (!descWrap.current || !slide.current) return

    descWrap.current.style.height = '0'
    slide.current.classList.remove(styles.slideHover)
  }

  return (
    <div
      className={styles.slide}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      ref={slide}
    >
      <Image src={data.img} alt="" />
      <div className={styles.slideContent}>
        <h3 className="h4">{data.title}</h3>
        <p>
          <b>{data.subtitle}</b>
        </p>
        <div className={styles.descWrap} ref={descWrap}>
          <p className={styles.desc} ref={desc}>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
