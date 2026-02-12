'use client'

import AnimatedSection from './AnimatedSection'
import {
  Globe,
  ShoppingCart,
  Zap,
  BarChart3,
  Lock,
  Smartphone,
  Code,
  Palette,
  Headphones,
  Search,
} from 'lucide-react'

const services = [
  {
    title: 'Корпоративные сайты',
    description: 'Лендинги, сайты-визитки и многостраничные проекты, которые работают на ваш бренд и конвертируют посетителей.',
    icon: Globe,
    accent: 'group-hover:text-blue-400',
    bg: 'group-hover:bg-blue-400/10',
  },
  {
    title: 'Интернет-магазины',
    description: 'Полноценный e-commerce с каталогом, корзиной, оплатой и CRM-интеграцией. Готовы к масштабированию.',
    icon: ShoppingCart,
    accent: 'group-hover:text-emerald-400',
    bg: 'group-hover:bg-emerald-400/10',
  },
  {
    title: 'Веб-приложения',
    description: 'Сложные SaaS-платформы, личные кабинеты, CRM и ERP-системы с нуля под ваши бизнес-процессы.',
    icon: Code,
    accent: 'group-hover:text-violet-400',
    bg: 'group-hover:bg-violet-400/10',
  },
  {
    title: 'UX/UI-дизайн',
    description: 'Исследование аудитории, прототипирование, уникальный визуал и дизайн-системы для любых цифровых продуктов.',
    icon: Palette,
    accent: 'group-hover:text-pink-400',
    bg: 'group-hover:bg-pink-400/10',
  },
  {
    title: 'SEO-продвижение',
    description: 'Семантическое ядро, техническая оптимизация, контент-стратегия и выход в топ Яндекса и Google.',
    icon: Search,
    accent: 'group-hover:text-amber-400',
    bg: 'group-hover:bg-amber-400/10',
  },
  {
    title: 'Мобильная адаптация',
    description: 'Адаптивная верстка с приоритетом мобильных устройств, быстрая загрузка и PWA-технологии.',
    icon: Smartphone,
    accent: 'group-hover:text-cyan-400',
    bg: 'group-hover:bg-cyan-400/10',
  },
  {
    title: 'Скорость и оптимизация',
    description: 'Core Web Vitals, CDN, lazy loading, оптимизация изображений. Скорость = конверсия.',
    icon: Zap,
    accent: 'group-hover:text-yellow-400',
    bg: 'group-hover:bg-yellow-400/10',
  },
  {
    title: 'Кибербезопасность',
    description: 'SSL, защита от DDoS и SQL-инъекций, бэкапы, мониторинг и оперативное реагирование.',
    icon: Lock,
    accent: 'group-hover:text-red-400',
    bg: 'group-hover:bg-red-400/10',
  },
  {
    title: 'Контекстная реклама',
    description: 'Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads с максимальным ROI.',
    icon: BarChart3,
    accent: 'group-hover:text-orange-400',
    bg: 'group-hover:bg-orange-400/10',
  },
  {
    title: 'Техподдержка',
    description: 'Мониторинг, обновления, резервное копирование и быстрое реагирование на инциденты 24/7.',
    icon: Headphones,
    accent: 'group-hover:text-teal-400',
    bg: 'group-hover:bg-teal-400/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Услуги</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Полный цикл веб-разработки
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            От идеи до запуска и далее. Закрываем все задачи по созданию и продвижению вашего проекта в интернете.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <div className={`group relative p-6 md:p-7 rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-default h-full ${service.bg}`}>
                  <div className={`w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${service.bg}`}>
                    <Icon size={22} className={`text-muted-foreground transition-colors duration-300 ${service.accent}`} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
