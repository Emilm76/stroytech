'use client'
import styles from './index.module.scss'
import Image from 'next/image'
import PillowImg from '@/images/pillow.png'

export function AboutsSection() {
  return (
    <section className="section-pt">
      <div className="blue-section">
        <div className="container">
          <div className={styles.whiteBlock}>
            <h2 className="h3">
              Стройтех - все необходимые навыки на одной платформе!
            </h2>
            <p>
              Стройтех — это онлайн — университет ГК «ЮгСтройИнвест», созданный
              для развития и прокачки сотрудников внутри компании. Здесь собраны
              все ключевые знания и инструменты, необходимые для эффективной
              работы в строительной отрасли — от навыков коммуникации и продаж
              до понимания бизнес-процессов и внутренней культуры компании.
            </p>
            <div className={styles.pillowImg}>
              <Image src={PillowImg} alt="" />
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.blueItem}>
              <div className={styles.blueInner}>
                <h3 className="h3">Быстрая адаптация</h3>
                <p>
                  С первых дней — в ритме команды. Программа помогает новым
                  сотрудникам быстро влиться в рабочие процессы, разобраться
                  в структуре компании и освоить базовые инструменты.
                  Уже с первых дней вы чувствуете уверенность и начинаете
                  приносить результат.
                </p>
              </div>
            </div>
            <div className={styles.blueItem}>
              <div className={styles.blueInner}>
                <h3 className="h3">
                  Эффективность <br />
                  в кубе
                </h3>
                <p>
                  Мы обучаем тому, что работает на практике.
                  <br />
                  Каждый курс «Стройтеха» - это реальные кейсы, тесты и
                  поддержка кураторов, чтобы знания превращались в результат.
                </p>
              </div>
            </div>
            <div className={styles.blueItem}>
              <div className={styles.blueInner}>
                <h3 className="h3">
                  Можно всегда <br />
                  пройти снова
                </h3>
                <p>
                  Все курсы доступны для повторного прохождения в любое время,
                  можно вспомнить забытый материал.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
