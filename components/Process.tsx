'use client'

import AnimatedSection from './AnimatedSection'
import {
  MessageSquare,
  PenTool,
  Code2,
  Bug,
  Rocket,
  TrendingUp,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Брифинг',
    description: 'Обсуждаем задачи, аудиторию, конкурентов. Формируем техническое задание и дорожную карту.',
    color: 'text-blue-400',
    border: 'border-blue-400/20',
  },
  {
    icon: PenTool,
    title: 'Дизайн',
    description: 'Прототипы в Figma, утверждение макетов, создание UI-кита и адаптивных решений.',
    color: 'text-pink-400',
    border: 'border-pink-400/20',
  },
  {
    icon: Code2,
    title: 'Разработка',
    description: 'Фронтенд и бэкенд на современном стеке. Чистый код, Git, CI/CD.',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
  },
  {
    icon: Bug,
    title: 'Тестирование',
    description: 'Ручное и автоматическое тестирование, кросс-браузерная проверка, нагрузочные тесты.',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
  },
  {
    icon: Rocket,
    title: 'Запуск',
    description: 'Деплой на продакшен, настройка хостинга, SSL, мониторинг и обучение вашей команды.',
    color: 'text-green-400',
    border: 'border-green-400/20',
  },
  {
    icon: TrendingUp,
    title: 'Развитие',
    description: 'Аналитика, A/B тесты, SEO-продвижение, доработка функционала и масштабирование.',
    color: 'text-cyan-400',
    border: 'border-cyan-400/20',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Процесс</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Как мы работаем
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Прозрачный процесс от первого звонка до запуска и дальнейшего развития проекта
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={step.title} delay={i * 0.08}>
                <div className={`relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 transition-all duration-300 h-full group`}>
                  {/* Step number */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl md:text-6xl font-bold text-foreground/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className={`w-11 h-11 rounded-xl border ${step.border} bg-secondary/50 flex items-center justify-center mb-5`}>
                    <Icon size={20} className={step.color} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
