import clsx from 'clsx'
import styles from './index.module.scss'
import { Carousel, CarouselLoop } from './carousel'
import { LogoIcon } from '@/icons/logo'
import CapIcon from '@/images/cap.png'
import HumanIcon from '@/images/smart-human.png'
import MouseIcon from '@/images/mouse.png'
import FolderIcon from '@/images/folder.png'
import Image from 'next/image'

export function MainSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrap}>
          <LogoIcon className={styles.logo} />
        </div>

        <div className={styles.container}>
          <h1 className={clsx(styles.title, 'h1')}>
            Расти. Достигай. Побеждай вместе со&nbsp;Стройтех
            и&nbsp;ЮгСтройИнвест
          </h1>

          <Carousel
            slides={[
              <div className={clsx(styles.slide, 'embla__slide')} key={1}>
                <div className="h3">100+</div>
                <p>
                  Сотрудников прошли обучение и уже показывают реальные
                  результаты: уверенные продажи, сильная коммуникация и высокий
                  уровень профессионализма в работе.
                </p>
              </div>,
              <div className={clsx(styles.slide, 'embla__slide')} key={2}>
                <div className="h3">50+</div>
                <p>
                  Практических курсов, методических записок, тестирований
                  созданных внутренними экспертами ЮгСтройИнвест.
                </p>
              </div>,
              <div className={clsx(styles.slide, 'embla__slide')} key={3}>
                <div className="h3">5+</div>
                <p>
                  Стройтех объединяет филиалы компании по всей стране - от
                  Ставрополя до Мариуполя. Обучение доступно каждому сотруднику,
                  где бы он ни находился, единые стандарты, общая философия,
                  общая цель.
                </p>
              </div>,
            ]}
          />
        </div>

        <CarouselLoop
          className={styles.carouselLoop}
          slides={[
            'Развивайся',
            'Практикуй',
            'Следи за прогрессом',
            'Развивайся',
            'Практикуй',
            'Следи за прогрессом',
            'Развивайся',
            'Практикуй',
            'Следи за прогрессом',
            'Развивайся',
            'Практикуй',
            'Следи за прогрессом',
          ]}
        />

        <div className={styles.capIcon}>
          <Image src={CapIcon} alt="" />
        </div>
        <div className={styles.humanIcon}>
          <Image src={HumanIcon} alt="" />
        </div>
        <div className={styles.mouseIcon}>
          <Image src={MouseIcon} alt="" />
        </div>
        <div className={styles.folderIcon}>
          <Image src={FolderIcon} alt="" />
        </div>
      </div>
    </section>
  )
}
