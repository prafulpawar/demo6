"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ResourceDetailModal from "@/components/modals/resource-detail-modal"
import { useState } from "react"
import { BookOpen, Video, Users, Search } from "lucide-react"

const resources = [
  {
    title: "Understanding the Bhagavad Gita",
    type: "Article",
    category: "Vedas",
    icon: BookOpen,
    excerpt: "A comprehensive guide to understanding the teachings of Lord Krishna in the Bhagavad Gita.",
    author: "Swami Ananda",
  },
  {
    title: "Meditation Techniques for Beginners",
    type: "Video",
    category: "Meditation",
    icon: Video,
    excerpt: "Learn step-by-step meditation practices to calm your mind and deepen your spiritual connection.",
    author: "Guru Dev",
  },
  {
    title: "Vedic Sanskrit Basics",
    type: "Article",
    category: "Sanskrit",
    icon: BookOpen,
    excerpt: "Introduction to Vedic Sanskrit with pronunciation guide and basic mantras.",
    author: "Dr. Sharma",
  },
  {
    title: "Hindu Festival Guide",
    type: "Article",
    category: "Festivals",
    icon: BookOpen,
    excerpt: "Complete guide to major Hindu festivals, their significance, and celebrations.",
    author: "Community Team",
  },
  {
    title: "Yoga & Spiritual Health",
    type: "Video",
    category: "Yoga",
    icon: Video,
    excerpt: "Explore how yoga practices align with spiritual development and wellness.",
    author: "Yoga Master",
  },
  {
    title: "Discussion: Dharma in Modern Life",
    type: "Forum",
    category: "Philosophy",
    icon: Users,
    excerpt: "Community discussion on applying ancient dharma principles to contemporary challenges.",
    author: "Community Members",
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState<(typeof resources)[0] | null>(null)

  const categories = ["All", "Vedas", "Meditation", "Sanskrit", "Festivals", "Yoga", "Philosophy"]

  const filtered = resources.filter((r) => {
    const matchCategory = selectedCategory === "All" || r.category === selectedCategory
    const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const handleReadMore = (resource: (typeof resources)[0]) => {
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Spiritual Resources Library</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore our comprehensive collection of articles, videos, forums, and guidance to deepen your spiritual
            knowledge, practice, and connection with the divine.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-accent">
              <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                New
              </span>
              <h3 className="text-lg font-bold text-primary mb-2">Bhagavad Gita for Beginners</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Start your journey into one of Hinduism's most sacred texts with our beginner-friendly guide.
              </p>
              <button className="text-accent font-semibold hover:text-primary transition-colors text-sm">
                Explore →
              </button>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-secondary">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Popular
              </span>
              <h3 className="text-lg font-bold text-primary mb-2">Daily Meditation Practices</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Guided meditation sessions with expert instructors to enhance your spiritual practice.
              </p>
              <button className="text-accent font-semibold hover:text-primary transition-colors text-sm">
                Start Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 mb-12">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((resource, idx) => {
              const Icon = resource.icon
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                          {resource.type}
                        </span>
                        <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{resource.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4">{resource.excerpt}</p>
                      <p className="text-xs text-foreground/50">By {resource.author}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleReadMore(resource)}
                    className="mt-4 w-full text-center text-accent font-semibold hover:text-primary transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">No resources found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>

      {selectedResource && (
        <ResourceDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} resource={selectedResource} />
      )}

      <Footer />
    </main>
  )
}
