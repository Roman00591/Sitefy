'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const serviceLinks = [
    { name: 'Корпоративные сайты', href: '#services' },
    { name: 'Интернет-магазины', href: '#services' },
    { name: 'Веб-приложения', href: '#services' },
    { name: 'UX/UI-дизайн', href: '#services' },
    { name: 'SEO-продвижение', href: '#services' },
    { name: 'Техподдержка', href: '#services' },
  ]

  const companyLinks = [
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Процесс', href: '#process' },
    { name: 'Тарифы', href: '#pricing' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contacts' },
  ]

  return (
    <footer className="border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image 
                src="/logo.png" 
                alt="Sitefy" 
                width={200} 
                height={56}
                className="h-11 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[240px]">
              Веб-студия полного цикла. Создаем цифровые продукты, которые работают на ваш бизнес.
            </p>
            <div className="text-sm text-muted-foreground">
              sitefy.ru
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Компания</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:info@sitefy.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={14} className="flex-shrink-0" />
                  info@sitefy.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                Россия, работаем удаленно по всей стране
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Sitefy. Все права защищены.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
