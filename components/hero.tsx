import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 to-accent/5 flex items-center py-12 md:py-0">
      {/* Decorative mandala element */}
      <div className="absolute top-10 md:top-20 right-5 md:right-10 opacity-10 text-4xl md:text-6xl">✦</div>
      <div className="absolute bottom-20 md:bottom-32 left-5 md:left-10 opacity-10 text-6xl md:text-8xl">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-accent font-semibold text-base md:text-lg">Welcome to Our Sacred Space</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
              Shri Mandir
              <span className="block text-accent">Hindu Temple</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
            A welcoming sanctuary for spiritual growth, community connection, and cultural celebration. Join us in
            experiencing the divine through sacred rituals, meaningful events, and spiritual teachings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm md:text-base"
            >
              Join Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors border-2 border-secondary text-sm md:text-base"
            >
              View Events
            </Link>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
            <div>
              <p className="text-accent font-bold text-xl md:text-2xl">24/7</p>
              <p className="text-xs md:text-sm text-foreground/70">Daily Darshan</p>
            </div>
            <div>
              <p className="text-accent font-bold text-xl md:text-2xl">500+</p>
              <p className="text-xs md:text-sm text-foreground/70">Community Members</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/30 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="text-6xl md:text-8xl mb-4">🏛️</div>
              <p className="text-primary font-semibold text-sm md:text-base">Temple Image Placeholder</p>
              <p className="text-xs md:text-sm text-foreground/60 mt-2">High-quality temple imagery goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
