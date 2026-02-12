'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Counter from './Counter'

const words = ['сайты', 'магазины', 'приложения', 'платформы', 'порталы']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient orbs - hidden on mobile for performance */}
      <div className="hidden lg:block">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-accent/8 to-transparent blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 md:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs md:text-sm text-primary font-medium">
            Принимаем заказы на 2026 год
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 text-balance leading-[1.15]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
            Создаём цифровые
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
              {words[wordIndex].slice(0, charIndex)}
            </span>
            <span className="inline-block w-[3px] h-[0.85em] bg-gradient-to-b from-primary to-secondary ml-0.5 align-middle animate-pulse" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Веб-студия полного цикла. Проектируем, разрабатываем и запускаем сайты, 
          интернет-магазины и веб-приложения для бизнеса любого масштаба.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 md:mb-20">
          <a
            href="#contacts"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 hover:bg-pos-100 text-primary-foreground font-bold text-base md:text-lg shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-500"
          >
            <span className="relative z-10">Начать проект</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-2xl border-2 border-border bg-background/80 backdrop-blur-md text-foreground font-bold text-base md:text-lg hover:border-primary/60 hover:bg-background transition-all duration-300 hover:scale-[1.02]"
          >
            Смотреть работы
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            { value: 150, suffix: '+', label: 'проектов' },
            { value: 98, suffix: '%', label: 'довольных клиентов' },
            { value: 8, suffix: '+', label: 'лет опыта' },
            { value: 24, suffix: '/7', label: 'поддержка' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Листайте вниз</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
