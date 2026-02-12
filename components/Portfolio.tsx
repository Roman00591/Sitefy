'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  sphere: string
  description: string
  features: string[]
  image: string
}

const projects: Project[] = [
  {
    title: 'Fashion Store',
    category: 'Интернет-магазин',
    sphere: 'Мода и одежда',
    description: 'Стильный интернет-магазин одежды с продвинутыми фильтрами, размерной сеткой, программой лояльности и быстрым оформлением заказа.',
    features: ['Каталог с фильтрами', 'Программа лояльности', 'Быстрый заказ'],
    image: '/portfolio/ecommerce-fashion.jpg',
  },
  {
    title: 'Ресторан "Вкусная жизнь"',
    category: 'Сайт ресторана',
    sphere: 'Ресторанный бизнес',
    description: 'Элегантный сайт ресторана с красочным меню, онлайн-бронированием столиков, фотогалереей блюд и отзывами гостей.',
    features: ['Онлайн-меню', 'Бронирование столиков', 'Галерея блюд'],
    image: '/portfolio/restaurant-website.jpg',
  },
  {
    title: 'Консалтинг Бизнес Групп',
    category: 'Корпоративный сайт',
    sphere: 'Бизнес консультации',
    description: 'Профессиональный корпоративный сайт с презентацией услуг, кейсами клиентов, командой экспертов и формой обратной связи.',
    features: ['Портфолио кейсов', 'Команда', 'Блог экспертов'],
    image: '/portfolio/corporate-business.jpg',
  },
  {
    title: 'FitPro Тренировки',
    category: 'Фитнес-платформа',
    sphere: 'Спорт и здоровье',
    description: 'Онлайн-платформа для фитнес-тренировок с видеоуроками, персональными планами, трекингом прогресса и сообществом.',
    features: ['Видеотренировки', 'Трекинг прогресса', 'Сообщество'],
    image: '/portfolio/fitness-app.jpg',
  },
  {
    title: 'Элитная Недвижимость',
    category: 'Маркетплейс',
    sphere: 'Недвижимость',
    description: 'Премиальный портал недвижимости с 3D-турами по объектам, расширенным поиском, ипотечным калькулятором и личным кабинетом.',
    features: ['3D-туры', 'Расширенный поиск', 'Калькулятор ипотеки'],
    image: '/portfolio/real-estate.jpg',
  },
  {
    title: 'Онлайн Академия',
    category: 'Образовательная платформа',
    sphere: 'Онлайн-обучение',
    description: 'Современная платформа для онлайн-курсов с интерактивными уроками, тестированием знаний, сертификатами и форумом студентов.',
    features: ['Интерактивные уроки', 'Тестирование', 'Сертификаты'],
    image: '/portfolio/education-platform.jpg',
  },
  {
    title: 'Медицинский Центр "Здоровье"',
    category: 'Медицинский портал',
    sphere: 'Здравоохранение',
    description: 'Комплексный сайт медицинского центра с онлайн-записью к врачам, базой специалистов, услугами телемедицины и результатами анализов.',
    features: ['Запись к врачам', 'Телемедицина', 'Результаты анализов'],
    image: '/portfolio/medical-clinic.jpg',
  },
  {
    title: 'Путешествия Мечты',
    category: 'Туристический портал',
    sphere: 'Туризм',
    description: 'Вдохновляющий туристический портал с подборками направлений, онлайн-бронированием туров, отзывами путешественников и блогом.',
    features: ['Бронирование туров', 'Отзывы', 'Блог о путешествиях'],
    image: '/portfolio/travel-agency.jpg',
  },
  {
    title: 'Салон красоты "Грация"',
    category: 'Сайт-сервис',
    sphere: 'Бьюти-индустрия',
    description: 'Элегантный сайт салона красоты с портфолио мастеров, онлайн-записью на услуги, прайс-листом и акционными предложениями.',
    features: ['Портфолио мастеров', 'Онлайн-запись', 'Акции'],
    image: '/portfolio/beauty-salon.jpg',
  },
  {
    title: 'Автосалон "Драйв"',
    category: 'Интернет-магазин',
    sphere: 'Автомобили',
    description: 'Современный сайт автодилера с каталогом автомобилей, детальными характеристиками, онлайн-кредитованием и тест-драйвом.',
    features: ['Каталог авто', 'Онлайн-кредит', 'Запись на тест-драйв'],
    image: '/portfolio/automotive-dealer.jpg',
  },
  {
    title: 'TechStart Solutions',
    category: 'SaaS платформа',
    sphere: 'IT и технологии',
    description: 'Инновационная SaaS-платформа для стартапов с дашбордом аналитики, интеграциями, API документацией и тарифными планами.',
    features: ['Дашборд', 'API', 'Интеграции'],
    image: '/portfolio/tech-startup.jpg',
  },
  {
    title: 'Кофейня "Арома"',
    category: 'Сайт ресторана',
    sphere: 'Кафе и кофейни',
    description: 'Уютный сайт кофейни с атмосферными фото, меню напитков и десертов, программой лояльности и онлайн-заказом на вынос.',
    features: ['Меню', 'Онлайн-заказ', 'Карта лояльности'],
    image: '/portfolio/cafe-coffee.jpg',
  },
]

const categories = ['Все', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [active, setActive] = useState('Все')
  const filtered = active === 'Все' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Портфолио</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Реализованные проекты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Более 12 успешных проектов из совершенно разных отраслей бизнеса. Каждый сайт создан с учетом специфики индустрии и целей заказчика.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.05}>
              <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col cursor-pointer">
                {/* Image */}
                <div className="relative h-52 md:h-60 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-primary" />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm text-foreground font-medium">
                      {project.sphere}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <span className="text-xs text-primary font-medium mb-3">
                    {project.category}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
