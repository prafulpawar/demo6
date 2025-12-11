"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactMemberModal from "@/components/modals/contact-member-modal"
import AddBusinessModal from "@/components/modals/add-business-modal"
import ShareService from "@/components/share-service"
import { Search, Phone, Mail, Star, Heart, Filter } from "lucide-react"

const memberServices = [
  {
    id: 1,
    name: "Arjun's Photography Services",
    memberName: "Arjun Patel",
    category: "Photography",
    description: "Professional photography for weddings, events, and portraits with traditional Hindu aesthetic",
    phone: "+1 (555) 201-1234",
    email: "arjun.photo@email.com",
    rating: 4.8,
    reviews: 24,
    image: "/professional-photographer.jpg",
  },
  {
    id: 2,
    name: "Priya's Catering",
    memberName: "Priya Sharma",
    category: "Catering",
    description: "Authentic Indian cuisine for all occasions - vegetarian and vegan options available",
    phone: "+1 (555) 202-1234",
    email: "priya.catering@email.com",
    rating: 4.9,
    reviews: 35,
    image: "/indian-catering.jpg",
  },
  {
    id: 3,
    name: "Rajesh's IT Solutions",
    memberName: "Rajesh Kumar",
    category: "Technology",
    description: "Web design, IT consulting, and software development for businesses",
    phone: "+1 (555) 203-1234",
    email: "rajesh.it@email.com",
    rating: 4.7,
    reviews: 18,
    image: "/it-technology.jpg",
  },
  {
    id: 4,
    name: "Ananya's Yoga & Wellness",
    memberName: "Ananya Singh",
    category: "Wellness",
    description: "Yoga classes, meditation sessions, and wellness coaching for holistic health",
    phone: "+1 (555) 204-1234",
    email: "ananya.wellness@email.com",
    rating: 4.9,
    reviews: 42,
    image: "/yoga-wellness.jpg",
  },
  {
    id: 5,
    name: "Deepak's Legal Services",
    memberName: "Deepak Verma",
    category: "Professional Services",
    description: "Legal consultation and services specializing in immigration and family law",
    phone: "+1 (555) 205-1234",
    email: "deepak.legal@email.com",
    rating: 4.6,
    reviews: 15,
    image: "/legal-services.jpg",
  },
  {
    id: 6,
    name: "Meera's Jewelry Design",
    memberName: "Meera Gupta",
    category: "Retail",
    description: "Custom traditional and modern jewelry designs with authentic materials",
    phone: "+1 (555) 206-1234",
    email: "meera.jewelry@email.com",
    rating: 4.8,
    reviews: 28,
    image: "/jewelry-design.jpg",
  },
]

const categories = ["All", "Photography", "Catering", "Technology", "Wellness", "Professional Services", "Retail"]

export default function MemberServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isAddBusinessModalOpen, setIsAddBusinessModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof memberServices)[0] | null>(null)

  const filtered = memberServices.filter((service) => {
    const matchCategory = selectedCategory === "All" || service.category === selectedCategory
    const matchSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.memberName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleContactClick = (service: (typeof memberServices)[0]) => {
    setSelectedService(service)
    setIsContactModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-balance">Member Services Directory</h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl">
            Connect with our community members who offer professional services. Support our temple family!
          </p>
        </div>
      </section>

      {/* CTA for Members to List Services */}
      <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">Are you a member offering services?</h3>
            <p className="text-foreground/70 text-sm">List your business and reach the community!</p>
          </div>
          <button
            onClick={() => setIsAddBusinessModalOpen(true)}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors whitespace-nowrap text-sm md:text-base"
          >
            Add Your Services
          </button>
        </div>
      </section>

      {/* ... existing search and filter code ... */}

      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search services, member names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap items-center overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-foreground/60 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors whitespace-nowrap ${
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
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service) => (
                <div
                  key={service.id}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-accent uppercase mb-1">{service.category}</p>
                        <h3 className="text-lg font-bold text-primary line-clamp-2">{service.name}</h3>
                      </div>
                      <button
                        onClick={() => toggleFavorite(service.id)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(service.id) ? "fill-accent text-accent" : "text-foreground/40"
                          }`}
                        />
                      </button>
                    </div>

                    <p className="text-sm text-foreground/70 mb-3 line-clamp-2">{service.description}</p>

                    {/* Member Info */}
                    <p className="text-xs text-accent font-semibold mb-3">by {service.memberName}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground text-sm">{service.rating}</span>
                      <span className="text-xs text-foreground/60">({service.reviews})</span>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4 text-xs md:text-sm">
                      <a
                        href={`tel:${service.phone}`}
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{service.phone}</span>
                      </a>
                      <a
                        href={`mailto:${service.email}`}
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{service.email}</span>
                      </a>
                    </div>

                    {/* Action Buttons */}
                    <button
                      onClick={() => handleContactClick(service)}
                      className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-2 text-sm"
                    >
                      Contact
                    </button>
                    <ShareService serviceName={service.name} serviceDescription={service.description} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/70 mb-4">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="text-accent font-semibold hover:text-primary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ... existing Why Support section ... */}

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">
            Why Support Member Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl md:text-5xl mb-4">💼</div>
              <h3 className="font-bold text-primary mb-2">Community First</h3>
              <p className="text-sm text-foreground/70">Help fellow temple members grow their businesses</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl md:text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-primary mb-2">Trusted Services</h3>
              <p className="text-sm text-foreground/70">All members are vetted community members</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="text-4xl md:text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-primary mb-2">Mutual Growth</h3>
              <p className="text-sm text-foreground/70">Strengthen bonds while supporting quality services</p>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ContactMemberModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          memberName={selectedService.memberName}
          serviceType={selectedService.name}
          email={selectedService.email}
          phone={selectedService.phone}
        />
      )}

      <AddBusinessModal isOpen={isAddBusinessModalOpen} onClose={() => setIsAddBusinessModalOpen(false)} />

      <Footer />
    </main>
  )
}
