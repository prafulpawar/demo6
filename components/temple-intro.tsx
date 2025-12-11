"use client"

import { Heart, Flame, Users, Sparkles } from "lucide-react"

export default function TempleIntro() {
  const highlights = [
    {
      icon: Flame,
      title: "Sacred Traditions",
      description: "Honoring ancient Vedic wisdom and spiritual practices",
    },
    {
      icon: Heart,
      title: "Spiritual Devotion",
      description: "Daily worship, pujas, and meditative practices",
    },
    {
      icon: Users,
      title: "Community Bond",
      description: "United by faith, culture, and spiritual growth",
    },
    {
      icon: Sparkles,
      title: "Divine Blessings",
      description: "Receive grace through sacred rituals and ceremonies",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-card via-background to-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Header with ॐ Symbol */}
        <div className="text-center mb-12">
          <div className="text-6xl md:text-7xl mb-4 opacity-30">ॐ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Welcome to Shri Mandir</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            A sacred space for spiritual awakening, cultural preservation, and community bonding. Our temple is a beacon
            of divine light where Hindu traditions thrive and souls find peace, guidance, and divine grace.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-accent to-secondary rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="text-4xl text-accent/30">🕉️</div>
          <div className="w-16 h-1 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    </section>
  )
}
