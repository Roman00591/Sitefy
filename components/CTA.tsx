'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { Send, Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contacts" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-secondary/10" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Контакты</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground text-balance">
            Обсудим ваш проект?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Оставьте заявку и мы перезвоним в течение 30 минут в рабочее время
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Contact info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2 flex flex-col gap-4">


            <a
              href="mailto:info@sitefy.ru"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">info@sitefy.ru</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card/30">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Мессенджеры</div>
                <div className="font-semibold text-foreground">Telegram / WhatsApp</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/[0.03] mt-auto hidden lg:block">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Бесплатная консультация и предварительная оценка проекта.
                Работаем с клиентами по всей России и СНГ.
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Заявка отправлена</h3>
                  <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm text-muted-foreground mb-1.5 block">Имя *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Как вас зовут"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm text-muted-foreground mb-1.5 block">Телефон</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">О проекте *</label>
                    <textarea
                      id="message"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Расскажите, что хотите создать: тип сайта, основные функции, сроки..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
                  >
                    Отправить заявку
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
