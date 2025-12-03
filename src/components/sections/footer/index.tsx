import clsx from 'clsx'
import styles from './index.module.scss'
import { LogoIcon } from '@/icons/logo'
import { ExternalLink } from '@/components/ui/arrow-link'
import { WriteIcon } from '@/icons/tab'
import Image from 'next/image'
import QrCodeImg from '@/images/qr-code.jpg'

export function Footer() {
  return (
    <footer className="section-pt">
      <div className={styles.wrapper}>
        <div className="container-lg">
          <div className={styles.grid}>
            <div className={styles.mainBlock}>
              <div>
                <LogoIcon className={styles.logo} />
                <div className={clsx(styles.subtitle, 'subtitle')}>Нас рекомендуют друзьям</div>
              </div>
              <div className={styles.links}>
                <ExternalLink href="">Телеграмм канал платформы</ExternalLink>
                <ExternalLink href="">Обучающая платформа</ExternalLink>
              </div>

              <a className={styles.writeBtn} href="" target="_blank">
                <WriteIcon className={styles.writeIcon} />
                <span className="subtitle">Есть вопрос или предложение? Напишите&nbsp;нам.</span>
              </a>
            </div>

            <div className={styles.whiteBlock}>
              <div className={styles.col}>
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
              </div>
              <div className={styles.col}>
                <h2 className="h4">Навигация</h2>
                <nav>
                  <a href="" className="link">
                    Главная
                  </a>
                  <a href="" className="link">
                    Курсы
                  </a>
                  <a href="" className="link">
                    Новости
                  </a>
                  <a href="" className="link">
                    Команда
                  </a>
                  <a href="" className="link">
                    Контакты
                  </a>
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
            <span>Разработано в рамках корпоративного университета Стройтех.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
