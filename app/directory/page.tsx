"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import { Search, Phone, Mail, Globe } from "lucide-react"

const businessListings = [
  {
    name: "Sharma Real Estate",
    category: "Real Estate",
    owner: "Rajesh Sharma",
    phone: "+1 (555) 201-1111",
    email: "rajesh@sharmareal.ca",
    website: "www.sharmareal.ca",
    description: "Expert real estate services for Toronto and GTA areas",
  },
  {
    name: "Desi Catering",
    category: "Catering",
    owner: "Priya Patel",
    phone: "+1 (555) 202-2222",
    email: "info@desicatering.ca",
    website: "www.desicatering.ca",
    description: "Authentic Indian cuisine for all occasions",
  },
  {
    name: "Sanskrit Academy",
    category: "Education",
    owner: "Dr. Sharma",
    phone: "+1 (555) 203-3333",
    email: "learn@sanskritacad.ca",
    website: "www.sanskritacad.ca",
    description: "Sanskrit and Hindu studies for all age groups",
  },
  {
    name: "Ayurveda Wellness Center",
    category: "Health & Wellness",
    owner: "Vaidya Anand",
    phone: "+1 (555) 204-4444",
    email: "wellness@ayurveda.ca",
    website: "www.ayurveda.ca",
    description: "Traditional Ayurvedic treatments and consultations",
  },
  {
    name: "Indian Fashion Boutique",
    category: "Retail",
    owner: "Anjali Gupta",
    phone: "+1 (555) 205-5555",
    email: "shop@indianfashion.ca",
    website: "www.indianfashion.ca",
    description: "Traditional and contemporary Indian clothing",
  },
  {
    name: "Legal Advocates",
    category: "Professional Services",
    owner: "Amit Kumar",
    phone: "+1 (555) 206-6666",
    email: "legal@advocates.ca",
    website: "www.legaladvocates.ca",
    description: "Immigration and family law services",
  },
]

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Real Estate",
    "Catering",
    "Education",
    "Health & Wellness",
    "Retail",
    "Professional Services",
  ]
  const filtered = businessListings.filter((b) => {
    const matchCategory = selectedCategory === "All" || b.category === selectedCategory
    const matchSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.owner.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Community Business Directory</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Support our community members by connecting with local Indian-owned and operated businesses.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter */}
          <div className="space-y-6 mb-12">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by business name or owner..."
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

          {/* Directory Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((business, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {business.category}
                  </div>
                  <h3 className="text-lg font-bold text-primary">{business.name}</h3>
                  <p className="text-sm text-foreground/60">by {business.owner}</p>
                </div>

                <p className="text-foreground/70 text-sm mb-4">{business.description}</p>

                <div className="space-y-2 border-t border-border pt-4">
                  <a
                    href={`tel:${business.phone}`}
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {business.phone}
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {business.email}
                  </a>
                  <a
                    href={`https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4 flex-shrink-0" />
                    {business.website}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">No businesses found. Try adjusting your search.</p>
            </div>
          )}

          {/* CTA for new listings */}
          <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-2">Are you a community business owner?</h3>
            <p className="text-foreground/70 mb-6">
              List your business in our community directory to reach fellow members
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Add Your Business
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
