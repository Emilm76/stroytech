import clsx from 'clsx'
import styles from './index.module.scss'
import { LogoIcon } from '@/icons/logo'
import { Carousel } from './carousel'

export function MainSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <LogoIcon className={styles.logo} />

        <div className={styles.container}>
          <h1 className={clsx(styles.title, 'h1')}>
            Расти. Достигай. Побеждай вместе со Стройтех и&nbsp;ЮгСтройИнвест
          </h1>

          <Carousel
            slides={[
              <div className="embla__slide" key={1}>
                <div className="h3">100+</div>
                <p>
                  Сотрудников прошли обучение и уже показывают реальные результаты: уверенные продажи, сильная
                  коммуникация и высокий уровень профессионализма в работе.
                </p>
              </div>,
              <div className="embla__slide" key={2}>
                <div className="h3">50+</div>
                <p>
                  Практических курсов, методических записок, тестирований созданных внутренними экспертами
                  ЮгСтройИнвест.
                </p>
              </div>,
              <div className="embla__slide" key={3}>
                <div className="h3">5+</div>
                <p>
                  Стройтех объединяет филиалы компании по всей стране - от Ставрополя до Мариуполя. Обучение доступно
                  каждому сотруднику, где бы он ни находился, единые стандарты, общая философия, общая цель.
                </p>
              </div>,
            ]}
          />
        </div>
      </div>
    </section>
  )
}
