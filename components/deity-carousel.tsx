"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Deity {
  id: number
  name: string
  title: string
  description: string
  image: string
}

const deities: Deity[] = [
  {
    id: 1,
    name: "Lord Shiva",
    title: "The Destroyer & Transformer",
    description: "The supreme divine consciousness, meditation, and cosmic dance",
    image: "/lord-shiva-meditation-cosmic-dancer-mahakal.jpg",
  },
  {
    id: 2,
    name: "Lord Vishnu",
    title: "The Preserver",
    description: "The sustainer of the universe and guardian of dharma",
    image: "/lord-vishnu-preserver-narayan-blue-deity.jpg",
  },
  {
    id: 3,
    name: "Lord Brahma",
    title: "The Creator",
    description: "The architect of the universe and initiator of creation",
    image: "/lord-brahma-creator-vedic-deity.jpg",
  },
  {
    id: 4,
    name: "Goddess Durga",
    title: "The Divine Mother",
    description: "Protector against evil and embodiment of feminine divine power",
    image: "/goddess-durga-divine-mother-warrior.jpg",
  },
  {
    id: 5,
    name: "Lord Ganesha",
    title: "The Remover of Obstacles",
    description: "Wisdom, intellect, and the beginning of all auspicious endeavors",
    image: "/lord-ganesha-elephant-god-ganpati.jpg",
  },
  {
    id: 6,
    name: "Goddess Lakshmi",
    title: "The Goddess of Prosperity",
    description: "Wealth, fortune, abundance, and divine grace",
    image: "/goddess-lakshmi-prosperity-divine-wealth.jpg",
  },
]

export default function DeityCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % deities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % deities.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + deities.length) % deities.length)
    setIsAutoPlay(false)
  }

  const deity = deities[current]

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-card via-background to-card">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Divine Deities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with the sacred energies of our beloved deities
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-primary/5 to-secondary/5 border-4 border-primary/20"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Image Display */}
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
            <img
              src={deity.image || "/placeholder.svg"}
              alt={deity.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{deity.name}</h3>
              <p className="text-lg md:text-xl text-accent font-semibold mb-3">{deity.title}</p>
              <p className="text-base md:text-lg max-w-2xl leading-relaxed">{deity.description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Previous deity"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-colors shadow-lg"
            aria-label="Next deity"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {deities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx)
                  setIsAutoPlay(false)
                }}
                className={`transition-all ${
                  idx === current ? "bg-accent w-8 h-3" : "bg-white/50 hover:bg-white/80 w-3 h-3"
                } rounded-full`}
                aria-label={`View deity ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Deity Grid Below Carousel */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deities.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => {
                setCurrent(idx)
                setIsAutoPlay(false)
              }}
              className={`p-4 rounded-lg transition-all duration-300 text-center ${
                idx === current
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 border-2 border-primary/20"
              }`}
            >
              <p className="font-semibold text-sm md:text-base">{d.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{d.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
