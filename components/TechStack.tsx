'use client'

import AnimatedSection from './AnimatedSection'

const techItems = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS',
  'Figma', 'Docker', 'AWS', 'Vercel', 'MongoDB', 'Redis',
  'GraphQL', 'REST API', 'WebSocket', 'Three.js', 'Stripe', '1C',
]

export default function TechStack() {
  const doubled = [...techItems, ...techItems]

  return (
    <section className="py-16 md:py-24 border-y border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-10">
        <AnimatedSection className="text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Технологии</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-foreground">
            Работаем с лучшими инструментами
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-3">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-xl border border-border/50 bg-card/50 text-sm text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - reverse */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee-reverse">
          {[...doubled].reverse().map((tech, i) => (
            <div
              key={`${tech}-rev-${i}`}
              className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-xl border border-border/50 bg-card/50 text-sm text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
