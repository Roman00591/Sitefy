import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden noise-bg relative">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
