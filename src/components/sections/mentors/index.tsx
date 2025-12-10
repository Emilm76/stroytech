import styles from './index.module.scss'
import RaulImg from '@/images/mentors/raul.jpg'
import GevorgImg from '@/images/mentors/gevorg.jpg'
import TatianaImg from '@/images/mentors/tatiana.jpg'
import DmitroImg from '@/images/mentors/dmitro.jpg'
import Tatiana2Img from '@/images/mentors/tatiana-2.jpg'
import NataliaImg from '@/images/mentors/natalia.jpg'
import KarinaImg from '@/images/mentors/karina.jpg'
import EvgeniyImg from '@/images/mentors/evgeniy.jpg'
import AfinaImg from '@/images/mentors/afina.jpg'
import IgorImg from '@/images/mentors/igor.jpg'
import NikitaImg from '@/images/mentors/nikita.jpg'
import AngelicaImg from '@/images/mentors/angelica.jpg'
import { Carousel } from './carousel'

const slides = [
  {
    img: RaulImg,
    name: 'Певадзе Раули Зауриевич',
    description: 'Директор по продажам и маркетингу',
    tag: 'Команда проекта',
  },
  {
    img: AngelicaImg,
    name: 'Гридина Анжелика Владимировна',
    description: 'Директор по продажам',
    tag: 'Команда проекта',
  },
  {
    img: GevorgImg,
    name: 'Мноян Геворг Артушович',
    description: 'Эксперт в сфере недвижимости ',
    tag: 'Тренер отдела продаж партнерского направления',
  },
  {
    img: DmitroImg,
    name: 'Богуш Дмитрий Юрьевич',
    description: 'Руководитель отдела аналитики',
    tag: 'История компании и продукт',
  },
  {
    img: Tatiana2Img,
    name: 'Тищенко Татьяна Алексеевна',
    description: 'Руководитель отдела маркетинга по г. Кисловодск',
    tag: 'Маркетинг и реклама ',
  },
  {
    img: NataliaImg,
    name: 'Буняева Наталия Валерьевна',
    description: 'Руководитель отдела маркетинга по г. Мариуполь',
    tag: 'Маркетинг и реклама ',
  },
  {
    img: KarinaImg,
    name: 'Русинова Карина Юрьевна',
    description: 'Руководитель отдела маркетинга по г. Ростов-на-Дону',
    tag: 'Маркетинг и реклама ',
  },
  {
    img: EvgeniyImg,
    name: 'Колесников Евгений Юрьевич',
    description: 'Руководитель отдела маркетинга по г. Краснодар',
    tag: 'Маркетинг и реклама',
  },
  {
    img: AfinaImg,
    name: 'Караяниди Афина Григорьевна',
    description: 'Руководитель отдела маркетинга по г. Ставрополь',
    tag: 'Маркетинг и реклама',
  },
  {
    img: IgorImg,
    name: 'Бутко Игорь Владимирович',
    description:
      'Руководитель отдела интернет-маркетинга AmoCRM / Allio / Контроль качества',
    tag: 'Интернет-маркетинг',
  },
  {
    img: NikitaImg,
    name: 'Цакадзе Никита Демуриевич',
    description: 'Бизнес тренер практик',
    tag: 'Тренер прямого отдела продаж',
  },
  {
    img: TatianaImg,
    name: 'Енина Татьяна Романовна',
    description: 'Директор по маркетингу',
    tag: 'Команда проекта',
  },
]

export function MentorsSection() {
  return (
    <section id="team" className="section-pt">
      <div className="container">
        <h2 className="h2 section-title">Наставники</h2>
      </div>
      <Carousel slides={slides} />
    </section>
  )
}
