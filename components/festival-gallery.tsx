"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface FestivalImage {
  id: number
  title: string
  category: string
  image: string
}

const festivalImages: FestivalImage[] = [
  {
    id: 1,
    title: "Diwali Celebration 2024",
    category: "Festival",
    image: "/diwali-celebration-lights-lamps.jpg",
  },
  {
    id: 2,
    title: "Holi Color Festival",
    category: "Festival",
    image: "/holi-colors-celebration-festival.jpg",
  },
  {
    id: 3,
    title: "Navratri Dance",
    category: "Dance",
    image: "/navratri-dance-garba-dandiya.jpg",
  },
  {
    id: 4,
    title: "Navaratri Puja",
    category: "Spiritual",
    image: "/navaratri-puja-worship-durga.jpg",
  },
  {
    id: 5,
    title: "Bhojan Seva Dinner",
    category: "Community",
    image: "/temple-community-dinner-prasad.jpg",
  },
  {
    id: 6,
    title: "Maha Shivaratri Vigil",
    category: "Spiritual",
    image: "/shivaratri-vigil-meditation-mantra.jpg",
  },
  {
    id: 7,
    title: "Hanumanstuti Performance",
    category: "Spiritual",
    image: "/hanuman-chanting-devotional-music.jpg",
  },
  {
    id: 8,
    title: "Yoga & Wellness",
    category: "Wellness",
    image: "/yoga-meditation-wellness-temple.jpg",
  },
]

export default function FestivalGallery() {
  const [selectedImage, setSelectedImage] = useState<FestivalImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Festival", "Spiritual", "Dance", "Community", "Wellness"]

  const filteredImages =
    selectedCategory === "All" ? festivalImages : festivalImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Temple Celebrations & Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the vibrant moments from our community celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setSelectedImage(null)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card border-2 border-primary/30 text-primary hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((img) => (
            <button
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.image || "/placeholder.svg"}
                alt={img.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm md:text-base">{img.title}</h3>
                <p className="text-accent text-xs md:text-sm">{img.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold">{selectedImage.title}</h3>
              <p className="text-accent mt-2">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
