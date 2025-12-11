"use client"

import { useState } from "react"
import { X } from "lucide-react"

const eventPhotos = [
  {
    id: 1,
    title: "Diwali Celebration 2024",
    category: "Festival",
    image: "🪔",
  },
  {
    id: 2,
    title: "Holi Festival",
    category: "Festival",
    image: "🌈",
  },
  {
    id: 3,
    title: "Navratri Garba Night",
    category: "Dance",
    image: "💃",
  },
  {
    id: 4,
    title: "Yoga & Wellness Day",
    category: "Wellness",
    image: "🧘",
  },
  {
    id: 5,
    title: "Community Langar",
    category: "Community",
    image: "🍽️",
  },
  {
    id: 6,
    title: "Vedic Chanting Session",
    category: "Spiritual",
    image: "🕉️",
  },
  {
    id: 7,
    title: "Youth Cultural Program",
    category: "Cultural",
    image: "🎭",
  },
  {
    id: 8,
    title: "Annual Sports Day",
    category: "Community",
    image: "⚽",
  },
]

const categories = ["All", "Festival", "Dance", "Wellness", "Community", "Spiritual", "Cultural"]

export default function EventsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredPhotos =
    selectedCategory === "All" ? eventPhotos : eventPhotos.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Events & Celebrations</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the vibrant moments from our community celebrations and spiritual events
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-accent"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {photo.image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{photo.title}</h3>
                <p className="text-white/70 text-sm">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="bg-card rounded-xl overflow-hidden max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center text-8xl">
                {selectedPhoto.image}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">{selectedPhoto.title}</h2>
                <p className="text-foreground/70 mb-4">Category: {selectedPhoto.category}</p>
                <p className="text-foreground/60">
                  Experience the spiritual and cultural richness of our community celebrations
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
