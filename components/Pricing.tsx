'use client'

import AnimatedSection from './AnimatedSection'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Старт',
    price: '25 000',
    period: 'от',
    description: 'Сайт-визитка или лендинг для быстрого запуска',
    features: [
      'До 5 страниц',
      'Адаптивная верстка',
      'Базовая SEO-настройка',
      'Контактная форма',
      'SSL-сертификат',
      'Поддержка 1 месяц',
    ],
    popular: false,
  },
  {
    name: 'Бизнес',
    price: '60 000',
    period: 'от',
    description: 'Многостраничный сайт для среднего бизнеса',
    features: [
      'До 20 страниц',
      'Уникальный UX/UI-дизайн',
      'Полная SEO-оптимизация',
      'CMS для управления контентом',
      'Яндекс.Метрика + Analytics',
      'Интеграция с соцсетями',
      'Поддержка 3 месяца',
    ],
    popular: true,
  },
  {
    name: 'Магазин',
    price: '90 000',
    period: 'от',
    description: 'Полноценный интернет-магазин под ключ',
    features: [
      'Каталог без ограничений',
      'Корзина и оплата онлайн',
      'Интеграция с 1С / CRM',
      'Личные кабинеты клиентов',
      'Email-рассылки',
      'Расширенная аналитика',
      'Поддержка 6 месяцев',
    ],
    popular: false,
  },
  {
    name: 'Платформа',
    price: '150 000',
    period: 'от',
    description: 'Кастомное веб-приложение или SaaS',
    features: [
      'Полностью индивидуальное решение',
      'Сложная бизнес-логика',
      'Любые внешние интеграции',
      'Масштабируемая архитектура',
      'Персональный менеджер',
      'Обучение вашей команды',
      'Поддержка 12 месяцев',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-secondary/10" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Тарифы</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Прозрачные цены
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Фиксированная стоимость без скрытых платежей. Точную цену рассчитаем после брифинга.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.08}>
              <div
                className={`relative rounded-3xl border h-full flex flex-col transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? 'border-primary/60 bg-gradient-to-br from-primary/[0.05] to-secondary/[0.05] shadow-xl shadow-primary/10 scale-105'
                    : 'border-border/40 bg-card/50 backdrop-blur-sm hover:border-border/80 hover:shadow-lg hover:shadow-primary/5'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5 tracking-wide uppercase">
                    Популярный выбор
                  </div>
                )}

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground">{plan.period} </span>
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">&#8381;</span>
                  </div>

                  <a
                    href="#contacts"
                    className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-6 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    Заказать
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <div className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 md:mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Все цены указаны без НДС. Возможна рассрочка. Для крупных проектов предоставляем индивидуальные условия.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
