'use client'

import { useState, useEffect, useCallback } from 'react'
import AnimatedSection from './AnimatedSection'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Иван Петров',
    role: 'Владелец',
    company: 'ТеплоДом',
    text: 'Sitefy создали для нас потрясающий интернет-магазин. Продажи выросли на 300% за первые три месяца. Профессиональный подход, внимание к деталям и оперативная поддержка.',
    initials: 'ИП',
  },
  {
    name: 'Александра Волкова',
    role: 'Партнер',
    company: 'Юрбюро "Закон и Право"',
    text: 'Корпоративный сайт выглядит респектабельно и профессионально. Клиенты часто отмечают удобство онлайн-записи. Рекомендую коллегам без сомнений.',
    initials: 'АВ',
  },
  {
    name: 'Максим Сергеев',
    role: 'Генеральный директор',
    company: 'FitZone Pro',
    text: 'Веб-приложение работает без сбоев. Члены клуба активно используют онлайн-расписание и запись. Поддержка после запуска превзошла все ожидания.',
    initials: 'МС',
  },
  {
    name: 'Екатерина Морозова',
    role: 'Директор по маркетингу',
    company: 'МебельLoft',
    text: 'Инновационная 3D-визуализация на сайте стала нашим конкурентным преимуществом. Конверсия увеличилась на 150%. Sitefy - настоящие профессионалы.',
    initials: 'ЕМ',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Директор',
    company: 'Тур-агентство "Горизонт"',
    text: 'Система бронирования работает стабильно и удобно. Клиенты оформляют заказы самостоятельно, нагрузка на менеджеров снизилась на 60%.',
    initials: 'ДК',
  },
  {
    name: 'Ольга Сидорова',
    role: 'Основатель',
    company: 'EduPro Academy',
    text: 'LMS-платформа позволила запустить онлайн-курсы за 3 недели. Ученики в восторге от геймификации и удобства. Уже планируем второй проект с Sitefy.',
    initials: 'ОС',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Отзывы</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Что говорят клиенты
          </h2>
        </AnimatedSection>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="text-center px-4 md:px-16">
            <Quote size={40} className="mx-auto text-primary/20 mb-6" />

            <div className="min-h-[120px] md:min-h-[100px] flex items-center justify-center">
              <p
                key={current}
                className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light"
                style={{
                  animation: 'fadeSlide 0.4s ease-out',
                }}
              >
                {t.text}
              </p>
            </div>

            <div className="flex gap-1 justify-center mt-6 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>

            <div
              key={`author-${current}`}
              style={{ animation: 'fadeSlide 0.4s ease-out 0.1s both' }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <span className="text-sm font-bold text-primary">{t.initials}</span>
              </div>
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
