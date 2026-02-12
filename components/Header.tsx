'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const links = [
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Процесс', href: '#process' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contacts' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-2xl border-b border-border/60 shadow-lg shadow-primary/5'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          <Link href="/" className="relative z-10 flex items-center">
            <Image 
              src="/logo.png" 
              alt="Sitefy" 
              width={220} 
              height={64}
              className="h-12 lg:h-16 w-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2.5 text-[15px] font-medium text-muted-foreground hover:text-primary rounded-xl hover:bg-muted/60 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contacts"
              className="ml-2 px-7 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-200"
            >
              Обсудить проект
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay - lightweight */}
      <div
        className={`fixed inset-0 bg-background lg:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 px-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-12 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg shadow-xl"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </header>
  )
}
