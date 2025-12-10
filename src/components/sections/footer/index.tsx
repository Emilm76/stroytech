import clsx from 'clsx'
import styles from './index.module.scss'
import { LogoIcon } from '@/icons/logo'
import { ExternalLink } from '@/components/ui/arrow-link'
import { WriteIcon } from '@/icons/tab'
import Image from 'next/image'
import QrCodeImg from '@/images/qr-code.jpg'
import { SectionLink } from '@/components/ui/section-link'
import { Spoiler } from './spoiler'

export function Footer() {
  return (
    <footer className="section-pt">
      <div className={styles.wrapper}>
        <div className="container-lg">
          <div className={styles.row}>
            <Spoiler
              title="Куратор обучения"
              tel="+7 (918) 877-35-52"
              text="Тарчинский Дмитрий"
            />
            <Spoiler
              title="Директор по&nbsp;продажам"
              tel="+7 (918) 873-92-71"
              text="Гридина Анжелика"
            />
            <Spoiler
              title="РОП г. Ставрополь"
              tel="+7 961 470-75-13"
              text="Решетникова Елена"
            />
            <Spoiler
              title="РОП г. Ростов-на-Дону"
              tel="+7 (989) 611-89-76"
              text="Рябикина Виктория"
            />
          </div>
          <div className={styles.row}>
            <Spoiler
              title="РОП г. Краснодар"
              tel="+7 (964) 896-89-04"
              text="Маковецкий Александр"
            />
            <Spoiler
              title="РОП г. Краснодар"
              tel="+7 (966) 760-99-84"
              text="Трушинская Надежда"
            />
            <Spoiler
              title="РОП г. Мариуполь"
              tel="+7 (911) 029-13-30"
              text="Проскурин Денис"
            />
            <Spoiler
              title="РОП г. Кисловодск"
              tel="+7 (905) 469-89-88"
              text="Арендаренко Антонина"
            />
          </div>

          <div className={styles.grid}>
            <div className={styles.mainBlock}>
              <div>
                <LogoIcon className={styles.logo} />
                <div className={clsx(styles.subtitle, 'subtitle')}>
                  Нас рекомендуют друзьям
                </div>
              </div>
              <div className={styles.links}>
                <ExternalLink href="">Телеграмм канал платформы</ExternalLink>
                <ExternalLink href="">Обучающая платформа</ExternalLink>
              </div>

              <a className={styles.writeBtn} href="" target="_blank">
                <WriteIcon className={styles.writeIcon} />
                <span className="subtitle">
                  Есть вопрос или предложение? Напишите&nbsp;нам.
                </span>
              </a>
            </div>

            <div className={styles.whiteBlock}>
              {/* <div className={styles.col}>
                <h2 className="h4">Контакты</h2>
                <p>
                  <b>
                    <a href="tel:+78652222897">+7 (8652) 22-28-97</a>
                  </b>{' '}
                  - единый номер горячей линии для сотрудников и партнёров
                </p>
                <p>
                  <b>
                    <a href="mailto:mail26@usmail.ru">mail26@usmail.ru</a>
                  </b>
                </p>
                <p>
                  <b>г. Ставрополь, ул. Павла Буравцева, 42/1</b>
                </p>
              </div> */}
              <div className={styles.col}>
                <h2 className="h4">Навигация</h2>
                <nav>
                  <SectionLink href="#main" className="link">
                    Главная
                  </SectionLink>
                  <SectionLink href="#courses" className="link">
                    Курсы
                  </SectionLink>
                  <SectionLink href="#team" className="link">
                    Команда
                  </SectionLink>
                </nav>
              </div>
              <div className={styles.col}>
                <h2 className="h4">Наши соц-сети</h2>
                <Image className={styles.qrCodeImg} src={QrCodeImg} alt="" />
              </div>
            </div>
          </div>

          <p className={styles.info}>
            <span>
              © 2025 Группа компаний «ЮгСтройИнвест».{' '}
              <span className="blue">Все&nbsp;права&nbsp;защищены.</span>
            </span>{' '}
            <span>
              Разработано в рамках корпоративного университета Стройтех.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
